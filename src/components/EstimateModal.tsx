import React, { useState } from "react";
import { z } from "zod";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const schema = z.object({
  name: z.string().trim().min(1, "Full Name is required").max(100),
  email: z.string().trim().email("Enter a valid email Address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  serviceNeeded: z.string().min(1, "Service Needed is required"),
  propertyType: z.string().min(1, "Property Type is required"),
  timeline: z.string().optional().or(z.literal("")),
  preferredContact: z.string().optional().or(z.literal("")),
  bestTimeToCall: z.string().optional().or(z.literal("")),
  approxSqFootage: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(1, "How Can We Help? is required").max(2000),
  agreeToContact: z.boolean().optional(),
});

type FormState = z.infer<typeof schema>;

const Field = ({
  label,
  required,
  optional,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <label className="block w-full">
    <span className="text-[14px] font-bold text-[#1f2937] font-sans">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
      {optional && <span className="text-slate-400 font-normal ml-1">(Optional)</span>}
    </span>
    <div className="mt-[8px] relative">{children}</div>
    {error && (
      <span className="mt-[4px] block text-[13px] text-red-500 font-medium font-sans">
        {error}
      </span>
    )}
  </label>
);

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    propertyType: "",
    timeline: "",
    preferredContact: "",
    bestTimeToCall: "",
    approxSqFootage: "",
    message: "",
    agreeToContact: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [k]: value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const handleRadioChange = (k: "preferredContact", value: string) => {
    setForm((f) => ({ ...f, [k]: value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const messageDetails = `
Service Needed: ${parsed.data.serviceNeeded}
Property Type: ${parsed.data.propertyType}
Timeline: ${parsed.data.timeline || "Not specified"}
Preferred Contact: ${parsed.data.preferredContact || "Not specified"}
Best Time to Call: ${parsed.data.bestTimeToCall || "Not specified"}
Approx. Sq. Footage: ${parsed.data.approxSqFootage || "Not specified"}
Privacy Agreement: ${form.agreeToContact ? "Yes" : "No"}

Message:
${parsed.data.message}
`.trim();

    try {
      // 1. Save to MongoDB Atlas: Web Emails & Leads
      const { addWebEmail, addCustomLead } = await import("@/lib/leads-store");

      await Promise.all([
        addWebEmail({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "",
          service: parsed.data.serviceNeeded || "Free Estimate Request",
          message: messageDetails,
          source: "Free Estimate Modal"
        }).catch((e) => console.error("[EstimateModal] Failed to save WebEmail:", e)),

        addCustomLead({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "(Not provided)",
          address: "Houston, TX",
          projectType: parsed.data.serviceNeeded?.toLowerCase().includes("tile") ? "remodeling" : "new-construction",
          description: messageDetails,
          contactTime: parsed.data.bestTimeToCall || "morning",
          status: "new",
          estimatedValue: 25000,
          notes: `SqFt: ${parsed.data.approxSqFootage || 'N/A'}, Timeline: ${parsed.data.timeline || 'N/A'}`
        }).catch((e) => console.error("[EstimateModal] Failed to save Lead:", e))
      ]);

      // 2. Also send external email notification via formsubmit.co
      fetch("https://formsubmit.co/ajax/info@cincoservicesllc.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Free Estimate Request - ${parsed.data.name}`,
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone || "Not provided",
          message: messageDetails,
        }),
      }).catch(() => {});

      setStatus("success");
      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        propertyType: "",
        timeline: "",
        preferredContact: "",
        bestTimeToCall: "",
        approxSqFootage: "",
        message: "",
        agreeToContact: false,
      });
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
    }
  };

  const inputCls =
    "w-full bg-white border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[15px] text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#d62828] transition-all font-sans";

  const selectCls =
    "w-full bg-white border border-gray-200 rounded-[12px] px-[16px] py-[12px] text-[15px] text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#d62828] transition-all appearance-none cursor-pointer pr-[40px] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[position:right_16px_center] bg-no-repeat font-sans";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[760px] w-[95vw] max-h-[90vh] overflow-y-auto p-[24px] md:p-[32px] rounded-[24px] border border-slate-100 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] focus:outline-none focus-visible:outline-none">
        {status === "success" ? (
          <div className="text-center py-[60px]">
            <div className="w-[64px] h-[64px] mx-auto rounded-full bg-sky-50 flex items-center justify-center">
              <CheckCircle2 className="w-[32px] h-[32px] text-[#0077b6]" />
            </div>
            <h3 className="mt-[24px] text-[24px] font-extrabold text-[#111827] font-sans">
              Message received!
            </h3>
            <p className="mt-[12px] text-[#4B5563] text-[16px] leading-[1.6] font-sans">
              Thanks for reaching out. We'll be in touch within one business day.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                onClose();
              }}
              className="mt-[32px] text-[#d62828] font-bold text-[15px] hover:text-[#b52020] transition-colors font-sans cursor-pointer bg-transparent border-0 outline-none"
            >
              Close Window &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="relative w-full">
            {/* Header */}
            <div className="mb-[24px]">
              <h2 className="font-sans text-[24px] sm:text-[30px] font-bold text-[#0f172a] leading-tight tracking-tight">
                Send Us a Message
              </h2>
              <p className="mt-[8px] text-[14px] sm:text-[15px] text-[#6b7280] leading-relaxed font-medium font-sans">
                Fill out the form below and we'll get back to you within one business day with
                answers, ideas, or a free in-home or on-site estimate.
              </p>
            </div>

            {/* Form Fields Container */}
            <div className="space-y-[16px]">
              {/* Row 1: Full Name & Email Address */}
              <div className="grid sm:grid-cols-2 gap-[16px]">
                <Field label="Full Name" error={errors.name} required>
                  <input
                    type="text"
                    className={inputCls}
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="John Doe"
                    maxLength={100}
                  />
                </Field>
                <Field label="Email Address" error={errors.email} required>
                  <input
                    type="email"
                    className={inputCls}
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="john@example.com"
                    maxLength={255}
                  />
                </Field>
              </div>

              {/* Row 2: Phone Number & Service Needed */}
              <div className="grid sm:grid-cols-2 gap-[16px]">
                <Field label="Phone Number" error={errors.phone} optional>
                  <input
                    type="tel"
                    className={inputCls}
                    value={form.phone}
                    onChange={onChange("phone")}
                    placeholder="(832) 555-0199"
                    maxLength={30}
                  />
                </Field>
                <Field label="Service Needed" error={errors.serviceNeeded} required>
                  <select
                    className={selectCls}
                    value={form.serviceNeeded}
                    onChange={onChange("serviceNeeded")}
                  >
                    <option value="">Select a service...</option>
                    <option value="Home Remodeling">Home Remodeling</option>
                    <option value="New Home Construction">New Home Construction</option>
                    <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Roofing Services">Roofing Services</option>
                    <option value="Interior Painting">Interior Painting</option>
                    <option value="Exterior Painting">Exterior Painting</option>
                    <option value="Tile Installation">Tile Installation</option>
                    <option value="Flooring Installation">Flooring Installation</option>
                    <option value="Shower Installation / Repair">Shower Installation / Repair</option>
                    <option value="Commercial Services">Commercial Services</option>
                  </select>
                </Field>
              </div>

              {/* Row 3: Property Type & Timeline */}
              <div className="grid sm:grid-cols-2 gap-[16px]">
                <Field label="Property Type" error={errors.propertyType} required>
                  <select
                    className={selectCls}
                    value={form.propertyType}
                    onChange={onChange("propertyType")}
                  >
                    <option value="">Select property type...</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </Field>
                <Field label="Timeline" error={errors.timeline} optional>
                  <select
                    className={selectCls}
                    value={form.timeline}
                    onChange={onChange("timeline")}
                  >
                    <option value="">Select project timeline...</option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1 to 3 Months">1 to 3 Months</option>
                    <option value="3+ Months">3+ Months</option>
                    <option value="Flexible / Researching">Flexible / Researching</option>
                  </select>
                </Field>
              </div>

              {/* Row 4: Preferred Contact, Best Time to Call, Approx. Sq. Footage */}
              <div className="grid sm:grid-cols-3 gap-[16px] items-start">
                <Field label="Preferred Contact" error={errors.preferredContact} optional>
                  <div className="flex items-center gap-[16px] h-[48px]">
                    {[
                      { value: "Phone", label: "Phone" },
                      { value: "Email", label: "Email" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleRadioChange("preferredContact", opt.value)}
                        className="flex items-center gap-[8px] cursor-pointer text-[15px] font-medium text-[#4B5563] bg-transparent border-0 outline-none p-0 focus:outline-none"
                      >
                        <div
                          className={`w-[20px] h-[20px] rounded-full border flex items-center justify-center transition-all ${
                            form.preferredContact === opt.value
                              ? "border-[#d62828] bg-white"
                              : "border-gray-300 bg-white"
                          }`}
                        >
                          {form.preferredContact === opt.value && (
                            <div className="w-[10px] h-[10px] rounded-full bg-[#d62828]" />
                          )}
                        </div>
                        <span className="font-sans leading-none">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </Field>

                <Field label="Best Time to Call" error={errors.bestTimeToCall} optional>
                  <select
                    className={selectCls}
                    value={form.bestTimeToCall}
                    onChange={onChange("bestTimeToCall")}
                  >
                    <option value="">Select time...</option>
                    <option value="Morning">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="Evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </Field>

                <Field label="Approx. Sq. Footage" error={errors.approxSqFootage} optional>
                  <input
                    type="text"
                    className={inputCls}
                    value={form.approxSqFootage}
                    onChange={onChange("approxSqFootage")}
                    placeholder="e.g. 1500 sqft"
                    maxLength={50}
                  />
                </Field>
              </div>

              {/* Textarea: How Can We Help? */}
              <Field label="How Can We Help?" error={errors.message} required>
                <textarea
                  rows={4}
                  className={`${inputCls} resize-none`}
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Tell us about your remodeling, painting, tile, or roofing project plans..."
                  maxLength={2000}
                />
              </Field>
            </div>

            {/* Error Message display */}
            {status === "error" && (
              <p className="mt-[16px] text-[14px] font-medium text-red-500 bg-red-50 p-[12px] rounded-[8px] font-sans">
                {errorMsg}
              </p>
            )}

            {/* Checkbox: I agree */}
            <label className="flex items-start gap-[12px] cursor-pointer mt-[24px]">
              <div className="relative flex items-center h-[20px] mt-[2px]">
                <input
                  type="checkbox"
                  checked={form.agreeToContact}
                  onChange={(e) => {
                    setForm((f) => ({ ...f, agreeToContact: e.target.checked }));
                    setErrors((err) => ({ ...err, agreeToContact: undefined }));
                  }}
                  className="sr-only"
                  id="agreeToContact"
                />
                <div
                  className={`w-[20px] h-[20px] border rounded-[4px] flex items-center justify-center transition-all ${
                    form.agreeToContact
                      ? "border-[#d62828] bg-[#d62828] text-white"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {form.agreeToContact && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.4] select-none font-sans font-medium">
                I agree to be contacted regarding my project. We respect your privacy and will
                never share your information.
              </span>
            </label>

            {/* Submit Button */}
            <div className="mt-[24px]">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-[10px] bg-[#d62828] text-white rounded-full h-[54px] font-bold text-[16px] hover:brightness-110 active:scale-[0.98] transition-all duration-300 shadow-[0_8px_24px_rgba(214,40,40,0.35)] disabled:opacity-60 disabled:hover:brightness-100 disabled:hover:scale-100 cursor-pointer font-sans"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-[20px] h-[20px] animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
