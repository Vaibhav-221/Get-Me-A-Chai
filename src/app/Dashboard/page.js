"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from 'react';
import {fetchuser, updateProfile} from "../../../actions/useractions";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer, Bounce } from "react-toastify";


const Dashboard = () => {
  const { data: session, update } = useSession();
  // Form state — holds all dashboard fields
  const [form, setForm] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
  }, [])
  

  const getData = async () => {
        let u = await fetchuser(session.user.name)
        setForm(u)
    }

  // Single handler for all inputs — uses name attribute to update correct field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = async () => {
    let a = await updateProfile(form, session.user.name)
    update()
    toast("Profile updated successfully!", {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Bounce,
  icon: "☕",
  className: "!bg-zinc-900 !text-zinc-100 !border !border-zinc-800 !rounded-xl",
  progressClassName: "!bg-amber-500",
});

  }

  return (
    <>
  <title>Dashboard - Get Me a Chai</title>
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    transition={Bounce}
  />

  <div className="min-h-screen bg-zinc-950 text-zinc-100 px-4 py-10 sm:py-14">
    {/* ===== Header ===== */}
    <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
      <span className="inline-block text-xs sm:text-sm font-medium text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
        ⚙️ Your dashboard
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
        Manage your page
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base">
        Update your details below — this is what your supporters will see
        and how your payments get routed.
      </p>
    </div>

    <div className="max-w-2xl mx-auto space-y-6">
      {/* ===== Profile details card ===== */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-7 space-y-5">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-sm shrink-0">
            👤
          </span>
          <div>
            <h2 className="font-semibold text-sm sm:text-base text-zinc-100">
              Profile details
            </h2>
            <p className="text-zinc-500 text-xs">
              This is what shows up on your public page
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">Name</label>
            <input
              value={form.name ? form.name : ""}
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">Email</label>
            <input
              value={form.email ? form.email : ""}
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
            />
          </div>

          {/* Username */}
          <div className="sm:col-span-2">
            <label className="block text-sm mb-1.5 text-zinc-300">
              Username
            </label>
            <input
              value={form.username ? form.username : ""}
              onChange={handleChange}
              type="text"
              name="username"
              id="username"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
            />
            <p className="text-zinc-500 text-xs mt-1.5">
              Your page link: getmeachai.com/{form.username || "yourname"}
            </p>
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">
              Profile picture
            </label>
            <input
              value={form.profilepic ? form.profilepic : ""}
              onChange={handleChange}
              type="text"
              name="profilepic"
              id="profilepic"
              placeholder="Image URL"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors placeholder:text-zinc-600"
            />
          </div>

          {/* Cover Picture */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">
              Cover picture
            </label>
            <input
              value={form.coverpic ? form.coverpic : ""}
              onChange={handleChange}
              type="text"
              name="coverpic"
              id="coverpic"
              placeholder="Image URL"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors placeholder:text-zinc-600"
            />
          </div>
        </div>
      </div>

      {/* ===== Payment settings card ===== */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 sm:p-7 space-y-5">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm shrink-0">
            💳
          </span>
          <div>
            <h2 className="font-semibold text-sm sm:text-base text-zinc-100">
              Payment settings
            </h2>
            <p className="text-zinc-500 text-xs">
              Connect Razorpay so payments land directly in your account
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Razorpay Id */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">
              Razorpay ID
            </label>
            <input
              value={form.razorpayid ? form.razorpayid : ""}
              onChange={handleChange}
              type="text"
              name="razorpayid"
              id="razorpayid"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
            />
          </div>

          {/* Razorpay Secret */}
          <div>
            <label className="block text-sm mb-1.5 text-zinc-300">
              Razorpay secret
            </label>
            <input
              value={form.razorpaysecret ? form.razorpaysecret : ""}
              onChange={handleChange}
              type="password"
              name="razorpaysecret"
              id="razorpaysecret"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
            />
          </div>
        </div>

        <p className="text-zinc-500 text-xs flex items-start gap-1.5 pt-1">
          <span>🔒</span>
          <span>Your secret key is stored securely and never shown publicly.</span>
        </p>
      </div>

      {/* Save button — logic untouched */}
      <button
        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 rounded-lg py-3 font-semibold text-zinc-950 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
        onClick={handlesubmit}
      >
        Save changes
      </button>
    </div>
  </div>
</>
  );
};

export default Dashboard;


