"use client";
import React from "react";


// ===== About Page — Get Me A Chai =====
// Color palette matches the rest of the app:
//   Background:      #0f172a (slate-950-ish navy)
//   Card surface:     #1e1b4b/60 with border-violet-900
//   Accent gradient:  from-purple-600 to-violet-600
//   Text:             white / gray-300 / gray-400 / gray-500

const values = [
  {
    title: "Built for creators",
    desc: "Every rupee goes straight to the person you're supporting — no middleman taking a cut of the moment someone says thanks.",
  },
  {
    title: "Own your page",
    desc: "Your profile, your story, your Razorpay account. You're in control of how supporters find and pay you.",
  },
  {
    title: "Simple by design",
    desc: "No subscriptions, no walls, no clutter. A supporter picks an amount, adds a message, and pays — that's the whole flow.",
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

const AboutPage = () => {
  return (
    <>
     <title>About - Get Me a Chai</title>
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* ===== Banner ===== */}
      <div className="h-40 sm:h-52 md:h-64 w-full bg-linear-to-r from-purple-700 via-violet-800 to-indigo-900 flex items-center justify-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
          About Get Me A Chai
        </h1>
      </div>

      {/* ===== Intro ===== */}
      <div className="max-w-3xl mx-auto text-center mt-8 sm:mt-10 px-4">
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Get Me A Chai is a simple way for creators, developers, writers, and
          makers of all kinds to receive small tokens of support from the
          people who value what they do. No paperwork, no platform lock-in —
          just a page, a link, and a chai's worth of appreciation, one
          supporter at a time.
        </p>
      </div>

      {/* ===== Values ===== */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
          Why Get Me A Chai
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-4 sm:p-6 flex flex-col gap-2"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-r from-purple-600 to-violet-600 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                {v.title}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== How it works ===== */}
      <div className="max-w-5xl mx-auto mt-10 sm:mt-14 px-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
            >
              <span className="text-xl sm:text-2xl font-bold text-violet-400 shrink-0">
                {s.step}
              </span>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="max-w-3xl mx-auto mt-10 sm:mt-14 px-4">
        <div className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-6 sm:p-8 text-center flex flex-col items-center gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl font-semibold">
            Ready to get your own page?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-md">
            Set up your profile in minutes and start collecting support from
            the people who already love what you make.
          </p>
          <a
            href="/login"
            className="w-full sm:w-auto bg-linear-to-r from-purple-600 to-violet-600 rounded-md px-6 py-2 font-semibold hover:opacity-90 transition text-center"
          >
            Create your page
          </a>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="text-center mt-12 sm:mt-16 pb-8 px-4">
        <p className="text-gray-500 text-xs sm:text-sm">
          © 2026 GetMeAChai. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          Designed &amp; Developed by Vaibhav Singh
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage;

