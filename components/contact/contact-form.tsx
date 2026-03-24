"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle } from "lucide-react";

// TODO: Replace with your real Web3Forms access key
// Get yours free at https://web3forms.com (enter zahid@ezilab.io)
const WEB3FORMS_ACCESS_KEY = "2707b767-70a9-4561-9013-f7283c6045d5";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Project Inquiry — EziLab");
    formData.append("from_name", "EziLab Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        (event.target as HTMLFormElement).reset();
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8"
    >
      <h2 className="font-heading text-2xl font-semibold text-white">Send a Project Inquiry</h2>
      <p className="mt-2 text-sm text-slate-300">
        Share your requirements and EziLab will respond within 24 hours.
      </p>

      <input type="hidden" name="botcheck" className="hidden" />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Full Name</span>
          <input
            required
            type="text"
            name="name"
            className="h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-200">Email</span>
          <input
            required
            type="email"
            name="email"
            className="h-11 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2">
        <span className="text-sm font-medium text-slate-200">Project Details</span>
        <textarea
          required
          rows={6}
          name="message"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-300/70 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
          placeholder="Tell us what you want to build, your timeline, and expected outcomes."
        />
      </label>

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
