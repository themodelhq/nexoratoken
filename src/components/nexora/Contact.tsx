"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Mail, Send } from "lucide-react";
import {
  contactEmail,
  contactFormEndpoint,
  riskDisclaimer,
} from "@/data/nexora";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const hasEmail = contactEmail.length > 0;
  const hasForm = contactFormEndpoint.length > 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasForm) return;
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 scroll-mt-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="For project inquiries, partnerships, or ecosystem questions. Official contact details appear here once published."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl glass-panel p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-bold text-bright-white">
              Official Channels
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All official links are centralized and configurable. No fake
              accounts are ever displayed.
            </p>

            {/* Email */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-gold">
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.2em]">Email</span>
              </div>
              {hasEmail ? (
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-1.5 block font-mono text-sm text-bright-white hover:text-gold break-all"
                >
                  {contactEmail}
                </a>
              ) : (
                <p className="mt-1.5 text-sm text-muted-foreground italic">
                  Official contact details will be published here.
                </p>
              )}
            </div>

            {/* Social */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Social</p>
              <div className="mt-3">
                <SocialLinks variant="grid" />
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-white/8 bg-black/30 p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  The website never requests seed phrases, private keys, or wallet
                  passwords. Anyone asking for these is not affiliated with NEXORA.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl glass-panel p-6 sm:p-8"
          >
            <h3 className="font-display text-lg font-bold text-bright-white">
              Send a Message
            </h3>
            {hasForm ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-lg border border-gold/20 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-gold/20 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-gold/20 bg-black/40 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/50 focus:outline-none focus:ring-2 focus:ring-gold/30 resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-near-black transition-colors hover:bg-gold-light disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
                {status === "success" && (
                  <p className="text-sm text-emerald-400" role="status">
                    Thanks — your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400" role="status">
                    Something went wrong. Please email us directly.
                  </p>
                )}
              </form>
            ) : (
              <div className="mt-5 rounded-lg border border-white/8 bg-black/30 p-5 text-sm text-muted-foreground">
                The contact form will be available once a secure form endpoint is
                configured. Until then, please use the official channels on the
                left once they are published.
              </div>
            )}

            <p className="mt-5 text-[0.7rem] leading-relaxed text-muted-foreground/70">
              {riskDisclaimer}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
