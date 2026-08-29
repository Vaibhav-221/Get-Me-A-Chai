"use client";
import React from "react";
import { initiate } from "../../../actions/useractions";
import { useEffect, useState } from "react";
import { fetchuser, fetchpayments } from "../../../actions/useractions";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentForm] = useState({});
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [currentuser, setcurrentuser] = useState({});
  const [payments, setpayments] = useState([]);

  useEffect(() => {
    if (window.Razorpay) {
      setRazorpayReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayReady(Boolean(window.Razorpay));
    script.onerror = () => setRazorpayReady(false);
    document.body.appendChild(script);

    return () => script.remove();
  }, []);

  const pay = async (amount) => {
    if (!razorpayReady || !window.Razorpay) {
      console.error("Razorpay checkout is not loaded");
      return;
    }

    if (
      !paymentform.name?.trim() ||
      !paymentform.message?.trim() ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      setPaymentError("Enter your name, a message, and a valid amount.");
      return;
    }

    setPaymentError("");

    console.log("Payment initiated for amount:", amount, "by user:", username);
    let a = await initiate(amount, username, paymentform);
    console.log("Client recieved:", a);
    let orderId = a.id;

    var options = {
      key: a.key, // Public Key ID generated from the Dashboard
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "Get Me A Chai", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`, //This is the callback URL where the payment response will be sent
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        name: "Gaurav Kumar", //your customer's name
        email: "gaurav.kumar@example.com",
        contact: "+919876543210", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
  };

  const handleChange = (e) => {
    setPaymentForm({
      ...paymentform,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async () => {
    let u = await fetchuser(username);
    setcurrentuser(u);
    let dbpayments = await fetchpayments(username);
    setpayments(dbpayments);
    console.log(u, dbpayments);
  };
  useEffect(() => {
    getData();
  }, [username]);
  const isInvalid =
  !paymentform.name || paymentform.name.length < 3 ||
  !paymentform.message || paymentform.message.length < 3 ||
  !paymentform.amount || Number.parseInt(paymentform.amount) < 1

const isDisabled = !razorpayReady || isInvalid

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] text-white">
        {/* ===== Banner ===== */}
        <div className="h-40 sm:h-52 md:h-64 w-full bg-linear-to-r from-purple-700 via-violet-800 to-indigo-900" />

        {/* ===== Avatar ===== */}
        <div className="flex justify-center -mt-12 sm:-mt-16">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-violet-600 border-4 border-[#0f172a] flex items-center justify-center text-3xl sm:text-4xl font-bold">
            U
          </div>
        </div>

        {/* ===== Creator Info ===== */}
        <div className="text-center mt-4 px-4">
          <h1 className="text-xl sm:text-2xl font-bold"> {username} </h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">
            Creator bio goes here
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            0 members · 0 posts
          </p>
        </div>

        {/* ===== Main Content: Supporters + Payment ===== */}
        <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
          {/* ---- Supporters Card ---- */}
          <div className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Supporters
            </h2>

            <div className="space-y-3">
              {payments.length === 0 ? (
                <p className="text-sm text-gray-300">
                  No supporters yet. Be the first to support!
                </p>
              ) : (
                payments.map((p, index) => (
                  <div
                    key={index}
                    className="bg-[#0f172a]/60 rounded-lg p-3 flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm shrink-0">
                      {p.name?.charAt(0).toUpperCase() || "A"}
                    </div>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-white">
                        {p.name}{" "}
                      </span>
                      donated {p.amount}
                      <span> with the message </span> — "{p.message}"
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ---- Payment Card ---- */}
          <div className="bg-[#1e1b4b]/60 border border-violet-900 rounded-xl p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Make a Payment
            </h2>

            <div className="space-y-3">
              {/* Name input */}
              <input
                placeholder="Enter Name"
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                required
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {/* Message input */}
              <input
                placeholder="Enter Message"
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                required
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {/* Amount input */}
              <input
                placeholder="Enter Amount"
                type="number"
                min="1"
                onChange={handleChange}
                value={paymentform.amount}
                name="amount"
                required
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {paymentError && (
                <p className="text-sm text-red-300" role="alert">
                  {paymentError}
                </p>
              )}

              {/* Pay button */}
             <button
  type="button"
  disabled={isDisabled}
  onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
  className={`w-full rounded-md py-2 font-semibold transition ${
    isDisabled
      ? "bg-linear-to-r from-red-600 to-blue-600 opacity-50 cursor-not-allowed"
      : "bg-linear-to-r from-purple-600 to-violet-600 hover:opacity-90"
  }`}
>
  Pay
</button>
              {/* Quick-pay preset buttons */}
              <div className="flex flex-col xs:flex-row gap-2 pt-1 sm:flex-row">
                <button
                  onClick={() => {
                    pay(1000);
                  }}
                  className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition"
                >
                  Pay ₹10
                </button>
                <button
                  onClick={() => {
                    pay(2000);
                  }}
                  className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition"
                >
                  Pay ₹20
                </button>
                <button
                  onClick={() => {
                    pay(3000);
                  }}
                  className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition"
                >
                  Pay ₹30
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
