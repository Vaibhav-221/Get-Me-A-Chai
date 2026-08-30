"use client";
import React from "react";

// ===== About Page — Get Me A Chai =====
// Color palette matches the rest of the app:
//   Background:      zinc-950
//   Card surface:     zinc-900/60 with border-zinc-800
//   Accent:           amber-500 (primary), emerald-500 / sky-500 (variety)
//   Text:             zinc-100 / zinc-400 / zinc-500

const values = [
  {
    title: "Built for creators",
    desc: "Every rupee goes straight to the person you're supporting — no middleman taking a cut of the moment someone says thanks.",
    color: "amber",
  },
  {
    title: "Own your page",
    desc: "Your profile, your story, your Razorpay account. You're in control of how supporters find and pay you.",
    color: "emerald",
  },
  {
    title: "Simple by design",
    desc: "No subscriptions, no walls, no clutter. A supporter picks an amount, adds a message, and pays — that's the whole flow.",
    color: "sky",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your page",
    desc: "Sign up and set your username — that's your unique link, like getmeachai.com/yourname.",
  },
  {
    step: "02",
    title: "Connect Razorpay",
    desc: "Add your own Razorpay keys from your dashboard so payments land directly in your account.",
  },
  {
    step: "03",
    title: "Share your link",
    desc: "Drop it in your bio, your videos, your posts — anywhere your audience already finds you.",
  },
  {
    step: "04",
    title: "Get supported",
    desc: "Supporters leave a name, a message, and a small amount — like buying you a chai to say thanks.",
  },
];

const faqs = [
  {
    q: "Does GetMeAChai take a cut of my earnings?",
    a: "No. Since you connect your own Razorpay account, payments go directly to you — we don't sit in the middle of the money.",
  },
  {
    q: "Do I need a business account to get started?",
    a: "No. Any valid Razorpay account works. You can start with a personal account and upgrade later if you need to.",
  },
  {
    q: "Can supporters pay without creating an account?",
    a: "Yes. Supporters just visit your page, choose an amount, add a message, and pay — no sign-up required on their end.",
  },
];

const colorMap = {
  amber: {
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  sky: {
    badge: "bg-sky-500/10 border-sky-500/20 text-sky-400",
  },
};

const AboutPage = () => {
  return (
    <>
      <title>About - Get Me a Chai</title>
      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* ===== Banner ===== */}
        <div className="relative overflow-hidden h-44 sm:h-56 md:h-64 w-full rounded-b-3xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center px-4">
          <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse [animation-duration:5s]"></div>
          <div className="pointer-events-none absolute -bottom-16 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse [animation-duration:7s]"></div>
          <div className="relative text-center">
            <span className="inline-block text-xs sm:text-sm font-medium text-zinc-100 bg-zinc-950 border border-zinc-900 rounded-full px-4 py-1.5 mb-4">
              ☕ Our story
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-zinc-950">
              About Get Me A Chai
            </h1>
          </div>
        </div>

        {/* ===== Intro ===== */}
        <div className="max-w-3xl mx-auto text-center mt-10 sm:mt-12 px-4">
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Get Me A Chai is a simple way for creators, developers, writers, and
            makers of all kinds to receive small tokens of support from the
            people who value what they do. No paperwork, no platform lock-in —
            just a page, a link, and a chai's worth of appreciation, one
            supporter at a time.
          </p>
        </div>

        {/* ===== Our story ===== */}
        <div className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4">
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">
              Why we built this
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              This started as a small side project — a way to learn the Next.js
              App Router, NextAuth, and MongoDB by building something real
              instead of another to-do list. Somewhere along the way it became
              something worth polishing: a genuinely useful, no-frills way for
              creators to accept support without signing up for a platform that
              takes a cut or buries them in features they'll never use.
            </p>
          </div>
        </div>

        {/* ===== Values ===== */}
        <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-amber-500">
            Why Get Me A Chai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="group bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 sm:p-6 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-300 group-hover:scale-110 ${colorMap[v.color].badge}`}
                >
                  {i + 1}
                </div>
                <h3 className="font-semibold text-sm sm:text-base">
                  {v.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== How it works ===== */}
        <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-amber-500">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4 transition-colors duration-300 hover:border-zinc-700"
              >
                <span className="text-xl sm:text-2xl font-bold text-amber-400 shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1">
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== FAQ ===== */}
        <div className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-amber-500">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 sm:p-5"
              >
                <h3 className="font-semibold text-sm sm:text-base mb-1.5 text-zinc-100">
                  {f.q}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="max-w-3xl mx-auto mt-10 sm:mt-14 mb-16 sm:mb-20 px-4">
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-3 sm:gap-4">
            <div className="pointer-events-none absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h2 className="relative text-lg sm:text-xl font-semibold text-zinc-950">
              Ready to get your own page?
            </h2>
            <p className="relative text-zinc-900/80 text-xs sm:text-sm max-w-md">
              Set up your profile in minutes and start collecting support from
              the people who already love what you make.
            </p>
            <a
              href="/login"
              className="relative w-full sm:w-auto bg-zinc-950 text-zinc-100 hover:bg-zinc-900 rounded-md px-6 py-2.5 font-semibold transition-all duration-300 hover:scale-[1.03] active:scale-95 text-center"
            >
              Create your page
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
