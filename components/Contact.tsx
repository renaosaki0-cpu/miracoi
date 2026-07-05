"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { ScrollReveal } from "./ui/ScrollReveal";
import { CTAButton } from "./ui/CTAButton";

type InquiryFields = { name: string; email: string; message: string };

type ContactMailFormProps = {
  labels: { name: string; email: string; message: string; submit: string; note: string };
  subject: string;
  title: string;
  value: InquiryFields;
  onChange: (value: InquiryFields) => void;
};

function ContactMailForm({ labels, subject, title, value, onChange }: ContactMailFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${labels.name}: ${value.name}\n${labels.email}: ${value.email}\n\n${value.message}`,
    );
    window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm md:p-10">
      <h2 className="mb-6 text-xl font-bold text-text">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="inquiry-name" className="mb-1.5 block text-sm font-medium text-text">
            {labels.name}
          </label>
          <input
            id="inquiry-name"
            type="text"
            required
            autoComplete="name"
            value={value.name}
            onChange={(e) => onChange({ ...value, name: e.target.value })}
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="inquiry-email" className="mb-1.5 block text-sm font-medium text-text">
            {labels.email}
          </label>
          <input
            id="inquiry-email"
            type="email"
            required
            autoComplete="email"
            value={value.email}
            onChange={(e) => onChange({ ...value, email: e.target.value })}
            className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="inquiry-message" className="mb-1.5 block text-sm font-medium text-text">
            {labels.message}
          </label>
          <textarea
            id="inquiry-message"
            required
            rows={5}
            value={value.message}
            onChange={(e) => onChange({ ...value, message: e.target.value })}
            className="w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <p className="text-xs text-subtext">{labels.note}</p>
        <button
          type="submit"
          className="w-full rounded-full bg-primary py-4 text-base font-semibold text-white transition-colors hover:bg-[#249088] sm:w-auto sm:px-10"
        >
          {labels.submit}
        </button>
      </form>
    </div>
  );
}

/** お問い合わせ + 取材 + 応援メッセージ（Googleフォーム） */
export function Contact() {
  const { t } = useLocale();
  const [inquiry, setInquiry] = useState<InquiryFields>({ name: "", email: "", message: "" });

  return (
    <section className="section-padding bg-background">
      <div className="container-main max-w-3xl">
        <ScrollReveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-primary uppercase">
            {t.contact.label}
          </p>
          <h1 className="text-3xl font-bold text-text md:text-4xl">{t.contact.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-subtext">{t.contact.description}</p>
        </ScrollReveal>

        <ScrollReveal className="mb-12">
          <div className="rounded-3xl bg-accent/70 p-8 md:p-10">
            <h2 className="mb-4 text-xl font-bold text-text">{t.contact.mediaTitle}</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-subtext">{t.contact.mediaDescription}</p>
            <p className="mt-4 text-sm leading-relaxed text-subtext">{t.contact.mediaNote}</p>
            <a
              href={`mailto:${SITE.contactEmail}?subject=${encodeURIComponent(t.contact.emailSubject)}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {SITE.contactEmail} →
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-8">
          <ContactMailForm
            title={t.contact.inquiryForm.title}
            labels={t.contact.inquiryForm}
            subject={t.contact.emailSubject}
            value={inquiry}
            onChange={setInquiry}
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-3xl border border-accent/60 bg-gradient-to-br from-white via-[#faf8f5] to-accent/40 p-8 text-center shadow-sm md:p-10">
            <h2 className="text-xl font-bold text-text md:text-2xl">{t.contact.form.title}</h2>
            <p className="mt-4 text-sm leading-[1.9] text-subtext sm:text-base">{t.contact.form.description}</p>
            <div className="mt-6 md:mt-8">
              <CTAButton
                href={SITE.supportMessageFormUrl}
                external
                variant="primary"
                size="lg"
                className="w-full min-h-12 shadow-lg shadow-primary/30 sm:w-auto sm:min-w-[260px]"
              >
                {t.contact.form.submit}
              </CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
