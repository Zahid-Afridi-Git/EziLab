"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "2707b767-70a9-4561-9013-f7283c6045d5";

const NAME_REGEX = /^[a-zA-Z\s'-]{2,60}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MIN_MESSAGE_LENGTH = 20;

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateForm(name: string, email: string, message: string): FieldErrors {
  const errors: FieldErrors = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (!NAME_REGEX.test(trimmedName)) {
    errors.name = "Please enter a valid name (letters only).";
  }

  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    errors.message = "Project details are required.";
  } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Please provide at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setError("");

    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const errors = validateForm(name, email, message);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Project Inquiry â€” EziLab");
    formData.append("from_name", "EziLab Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFieldErrors({});
        form.reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "h-11 w-full rounded-lg border bg-slate-950 px-3 text-sm text-slate-100 outline-none transition focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]";
  const inputOk = "border-slate-700 focus:border-cyan-300/70";
  const inputErr = "border-red-400/60 focus:border-red-400/80";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-white">Send a Project Inquiry</h2>
      <p className="mt-2 text-sm text-slate-300">
        Share your requirements and EziLab will respond within 24 hours.
      </p>

      <input type="hidden" name="botcheck" className="hidden" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-200">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            className={`${inputBase} ${fieldErrors.name ? inputErr : inputOk}`}
          />
          {fieldErrors.name ? (
            <p className="text-xs text-red-300">{fieldErrors.name}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            className={`${inputBase} ${fieldErrors.email ? inputErr : inputOk}`}
          />
          {fieldErrors.email ? (
            <p className="text-xs text-red-300">{fieldErrors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-200">
          Project Details
        </label>
        <textarea
          id="contact-message"
          rows={6}
          name="message"
          className={`w-full rounded-lg border bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)] ${fieldErrors.message ? inputErr : inputOk}`}
          placeholder="Tell us what you want to build, your timeline, and expected outcomes."
        />
        {fieldErrors.message ? (
          <p className="text-xs text-red-300">{fieldErrors.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-75 sm:w-auto"
      >
        {submitting ? (
          <>
            <LoaderCircle size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>

      {submitted ? (
        <div className="mt-5 rounded-xl border border-cyan-300/35 bg-cyan-300/12 px-4 py-3 text-sm text-cyan-100">
          <p className="flex items-center gap-2 font-medium">
            <CheckCircle2 size={16} />
            Inquiry submitted
          </p>
          <p className="mt-1 text-cyan-100/90">
            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : null}

      {error ? (
        <div className="mt-5 rounded-xl border border-red-400/35 bg-red-400/12 px-4 py-3 text-sm text-red-200">
          <p className="flex items-center gap-2 font-medium">
            <AlertCircle size={16} />
            {error}
          </p>
        </div>
      ) : null}
    </form>
  );
}
