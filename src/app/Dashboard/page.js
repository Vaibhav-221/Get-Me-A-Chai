"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from 'react';
import {fetchuser, userProfile} from "../../../actions/useractions";


const Dashboard = () => {
  const { data: session } = useSession();
  // Form state — holds all dashboard fields
  const [form, setForm] = useState({});

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
        setform(u)
    }

  // Single handler for all inputs — uses name attribute to update correct field
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    update()
    let a = await updateProfile(e, session.user.name)
    alert("Profile Updated Successfully")

  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-4 py-8">

      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Welcome to your Dashboard
      </h1>

      <div className="max-w-xl mx-auto bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-4 sm:p-6 space-y-4" action={handlesubmit}>

        {/* Name */}
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            value={form.name ? form.name : ""}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            value={form.email ? form.email : ""}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm mb-1">Username</label>
          <input
            value={form.username ? form.username : ""}
            onChange={handleChange}
            type="text"
            name="username"
            id="username"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block text-sm mb-1">Profile Picture</label>
          <input
            value={form.profilepic ? form.profilepic : ""}
            onChange={handleChange}
            type="text"
            name="profilepic"
            id="profilepic"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Cover Picture */}
        <div>
          <label className="block text-sm mb-1">Cover Picture</label>
          <input
            value={form.coverpic ? form.coverpic : ""}
            onChange={handleChange}
            type="text"
            name="coverpic"
            id="coverpic"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Razorpay Id */}
        <div>
          <label className="block text-sm mb-1">Razorpay Id</label>
          <input
            value={form.razorpayid ? form.razorpayid : ""}
            onChange={handleChange}
            type="text"
            name="razorpayid"
            id="razorpayid"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Razorpay Secret */}
        <div>
          <label className="block text-sm mb-1">Razorpay Secret</label>
          <input
            value={form.razorpaysecret ? form.razorpaysecret : ""}
            onChange={handleChange}
            type="password"
            name="razorpaysecret"
            id="razorpaysecret"
            className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
          />
        </div>

        {/* Save button — you'll add the submit handler yourself */}
        <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-md py-2 font-semibold hover:opacity-90 transition">
          Save
        </button>

      </div>
    </div>
  );
};

export default Dashboard;

