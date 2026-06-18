import { useState } from "react";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/ui/Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormState = z.infer<typeof schema>;

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [k]: e.target.value }));
    setErrors(err => ({ ...err, [k]: undefined }));
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
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone ? parsed.data.phone : null,
      message: parsed.data.message,
    });
    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call us directly.");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const Field = ({ label, name, children }: { label: string; name: keyof FormState; children: React.ReactNode }) => (
    <label className="block">
      <span className="text-[14px] font-bold text-[#111827]">{label}</span>
      <div className="mt-[8px]">{children}</div>
      {errors[name] && <span className="mt-[4px] block text-[13px] text-red-500 font-medium">{errors[name]}</span>}
    </label>
  );

  const inputCls = "w-full bg-white border border-gray-200 rounded-[8px] px-[16px] py-[12px] text-[15px] text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d62828] focus:border-transparent transition-all";

  return (
    <section id="contact" className="py-[60px] bg-[#F6F5F2] w-full relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-[60px] lg:gap-[60px] items-start">

          {/* Left Column */}
          <Reveal variant="reveal-left">
            <div>
              <span className="inline-block bg-[#0077b6] text-white rounded-[20px] px-[16px] py-[6px] text-[13px] font-bold font-sans tracking-wide">
                Contact Us
              </span>

              <h2 className="mt-[24px] font-sans text-[24px] md:text-[35px] font-extrabold text-[#111827] leading-[1.1] tracking-[-0.02em]">
                Let's Talk About Your Project
              </h2>

              <p className="mt-[20px] text-[16px] md:text-[17px] text-[#4B5563] leading-[1.6] max-w-[480px]">
                Send us a quick note and we'll get back to you within one business day with answers, ideas, or a free in-home estimate.
              </p>

              <div className="mt-[48px] space-y-[32px]">
                {[
                  { i: Phone, t: "Call Us", v: "(832) 406-2716", href: "tel:8324062716" },
                  { i: Mail, t: "Email Us", v: "eli@cincoservicesllc.com", href: "mailto:eli@cincoservicesllc.com" },
                  { i: MapPin, t: "Visit Us", v: "1400 Broadfield Blvd, Houston, TX 77084" },
                ].map(({ i: Icon, t, v, href }) => (
                  <div key={t} className="flex items-start gap-[16px]">
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
                      <Icon className="w-[20px] h-[20px] text-[#0077b6]" strokeWidth={2.5} />
                    </div>
                    <div className="pt-[2px]">
                      <div className="text-[13px] uppercase tracking-wider text-[#8b5a2b] font-bold">{t}</div>
                      {href ? (
                        <a href={href} className="text-[16px] font-semibold text-[#111827] hover:text-[#d62828] transition-colors mt-[4px] block">
                          {v}
                        </a>
                      ) : (
                        <div className="text-[16px] font-semibold text-[#111827] mt-[4px]">
                          {v}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Form */}
          <Reveal variant="reveal-right">
            <form onSubmit={submit} className="bg-white rounded-[24px] border border-gray-100 p-[24px] md:p-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
              {status === "success" ? (
                <div className="text-center py-[60px]">
                  <div className="w-[64px] h-[64px] mx-auto rounded-full bg-[#0077b6]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-[32px] h-[32px] text-[#0077b6]" />
                  </div>
                  <h3 className="mt-[24px] text-[24px] font-extrabold text-[#111827]">Message received!</h3>
                  <p className="mt-[12px] text-[#4B5563] text-[16px] leading-[1.6]">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-[32px] text-[#d62828] font-bold text-[15px] hover:text-[#b52020] transition-colors"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-[24px]">
                    <Field label="Your Name" name="name">
                      <input className={inputCls} value={form.name} onChange={onChange("name")} placeholder="John Doe" maxLength={100} />
                    </Field>
                    <Field label="Email Address" name="email">
                      <input type="email" className={inputCls} value={form.email} onChange={onChange("email")} placeholder="john@example.com" maxLength={255} />
                    </Field>
                  </div>
                  <div className="mt-[16px]">
                    <Field label="Phone Number (optional)" name="phone">
                      <input type="tel" className={inputCls} value={form.phone} onChange={onChange("phone")} placeholder="(832) 406-2716" maxLength={30} />
                    </Field>
                  </div>
                  <div className="mt-[16px]">
                    <Field label="How can we help?" name="message">
                      <textarea rows={4} className={inputCls + " resize-none"} value={form.message} onChange={onChange("message")} placeholder="Tell us about your project, square footage, timeline..." maxLength={2000} />
                    </Field>
                  </div>

                  {status === "error" && (
                    <p className="mt-[16px] text-[14px] font-medium text-red-500 bg-red-50 p-[12px] rounded-[8px]">
                      {errorMsg}
                    </p>
                  )}

                  <div className="mt-[24px] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
                    <p className="text-[13px] text-[#6B7280]">
                      We respect your privacy.
                    </p>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-[10px] bg-[#d62828] text-white rounded-[8px] px-[32px] py-[16px] font-bold text-[15px] hover:bg-[#b52020] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.3)] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:bg-[#d62828]"
                    >
                      {status === "loading" ? (
                        <><Loader2 className="w-[18px] h-[18px] animate-spin" /> Sending...</>
                      ) : (
                        <>Send Message <Send className="w-[16px] h-[16px]" /></>
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
