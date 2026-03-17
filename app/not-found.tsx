import Link from "next/link";

import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <main className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-300 sm:text-base">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Back to Home
        </Link>
      </Container>
    </main>
  );
}
