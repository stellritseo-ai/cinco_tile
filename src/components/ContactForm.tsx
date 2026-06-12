import { useState } from "react";
import { z } from "zod";
import { Send, Phone, Mail, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <div className="mt-1.5">{children}</div>
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );

  const inputCls = "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div>
          <span className="inline-flex items-center gap-2 bg-brand-soft text-brand rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" /> Contact Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Let's Talk About Your Floors</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-md">
            Send us a quick note and we'll get back to you within one business day with answers, ideas, or a free in-home estimate.
          </p>
          <div className="mt-8 space-y-5">
            {[
              { i: Phone, t: "Call", v: "(360) 202-5612", href: "tel:3602025612" },
              { i: Mail, t: "Email", v: "hello@pnwlaminate.com", href: "mailto:hello@pnwlaminate.com" },
              { i: MapPin, t: "Visit", v: "Olympia, WA 98501" },
            ].map(({ i: Icon, t, v, href }) => (
              <div key={t} className="flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-brand-soft grid place-items-center shrink-0"><Icon className="w-5 h-5 text-brand" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{t}</div>
                  {href ? <a href={href} className="font-semibold hover:text-brand">{v}</a> : <div className="font-semibold">{v}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="bg-cream rounded-3xl border border-border p-8 md:p-10 shadow-sm">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-soft grid place-items-center"><CheckCircle2 className="w-8 h-8 text-brand" /></div>
              <h3 className="mt-5 font-display text-2xl font-semibold">Message received!</h3>
              <p className="mt-2 text-muted-foreground text-sm">Thanks for reaching out. We'll be in touch within one business day.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-brand font-semibold text-sm hover:underline">Send another message</button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name">
                  <input className={inputCls} value={form.name} onChange={onChange("name")} placeholder="Jane Doe" maxLength={100} />
                </Field>
                <Field label="Email" name="email">
                  <input type="email" className={inputCls} value={form.email} onChange={onChange("email")} placeholder="jane@example.com" maxLength={255} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Phone (optional)" name="phone">
                  <input type="tel" className={inputCls} value={form.phone} onChange={onChange("phone")} placeholder="(360) 555-0123" maxLength={30} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message" name="message">
                  <textarea rows={5} className={inputCls + " resize-none"} value={form.message} onChange={onChange("message")} placeholder="Tell us about your project, square footage, timeline..." maxLength={2000} />
                </Field>
              </div>
              {status === "error" && <p className="mt-4 text-sm text-destructive">{errorMsg}</p>}
              <button type="submit" disabled={status === "loading"} className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand text-primary-foreground rounded-full px-7 py-3.5 font-semibold hover:brightness-105 disabled:opacity-60 shadow-[0_12px_30px_-10px_oklch(0.74_0.165_55/0.6)]">
                {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">We respect your privacy. Your info is only used to reply to you.</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
