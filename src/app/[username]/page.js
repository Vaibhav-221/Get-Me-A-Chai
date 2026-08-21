"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

const UserProfile = () => {
  const { username } = useParams();

  // Dummy data — replace with real DB fetch later
  const creator = {
    name: decodeURIComponent(username),
    bio: "Creating awesome content for you!",
    members: 1200,
    posts: 45,
    supporters: [
      { name: "Aman", amount: 50, message: "Keep it up bro! 🔥" },
      { name: "Riya", amount: 100, message: "Love your work ❤️" },
      { name: "Karan", amount: 20, message: "Small support, big respect" },
    ],
  };

  // Payment form state
  const [form, setForm] = useState({ name: "", message: "", amount: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = (presetAmount) => {
    const amount = presetAmount || form.amount;
    if (!amount) return alert("Enter an amount");
    // TODO: hook into Razorpay order creation here
    console.log("Paying", amount, "to", creator.name, form);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Banner */}
      <div className="h-52 md:h-64 w-full bg-gradient-to-r from-purple-700 via-violet-800 to-indigo-900" />

      {/* Avatar */}
      <div className="flex justify-center -mt-16">
        <div className="w-32 h-32 rounded-full bg-violet-600 border-4 border-[#0f172a] flex items-center justify-center text-4xl font-bold">
          {creator.name.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* Creator info */}
      <div className="text-center mt-4 px-4">
        <h1 className="text-2xl font-bold">@{creator.name}</h1>
        <p className="text-gray-400 mt-1">{creator.bio}</p>
        <p className="text-sm text-gray-500 mt-2">
          {creator.members} members · {creator.posts} posts
        </p>
      </div>

      {/* Supporters + Payment */}
      <div className="max-w-5xl mx-auto mt-10 px-4 grid md:grid-cols-2 gap-6 pb-16">
        {/* Supporters card */}
        <div className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Supporters</h2>
          <div className="space-y-3">
            {creator.supporters.map((s, i) => (
              <div
                key={i}
                className="bg-[#0f172a]/60 rounded-lg p-3 flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm shrink-0">
                  {s.name.charAt(0)}
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">{s.name}</span>{" "}
                  donated <span className="text-violet-400">${s.amount}</span>{" "}
                  — "{s.message}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment form */}
        <div className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>

          <div className="space-y-3">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
            />
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
            />
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="Enter Amount"
              type="number"
              className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
            />

            <button
              onClick={() => handlePay()}
              className="w-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-md py-2 font-semibold hover:opacity-90 transition"
            >
              Pay
            </button>

            {/* Quick-pay presets */}
            <div className="flex gap-2 pt-1">
              {[10, 20, 30].map((amt) => (
                <button
                  key={amt}
                  onClick={() => handlePay(amt)}
                  className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition"
                >
                  Pay ${amt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;