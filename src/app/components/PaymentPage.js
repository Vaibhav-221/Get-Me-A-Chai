"use client";
import React from "react";
import { initiate } from "../../../actions/useractions";
import { useEffect, useState } from "react";
import { fetchuser, fetchpayments } from "../../../actions/useractions";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  const [razorpayReady, setRazorpayReady] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [currentuser, setcurrentuser] = useState({});
  const [payments, setpayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("paymentdone") == "true") {
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
        className:
          "!bg-zinc-900 !text-zinc-100 !border !border-zinc-800 !rounded-xl",
        progressClassName: "!bg-amber-500",
      });
    }
    router.push(`/${username}`);
  }, []);

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

  // To Disable the form for the undefined credential
  const isInvalid =
    !paymentform.name ||
    paymentform.name.length < 3 ||
    !paymentform.message ||
    paymentform.message.length < 3 ||
    !paymentform.amount ||
    Number.parseInt(paymentform.amount) < 1;

  const isDisabled = !razorpayReady || isInvalid;

  return (
    <>
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

      <div className="min-h-screen bg-zinc-950 text-zinc-100">
        {/* ===== Banner ===== */}
        <div
          className={`relative overflow-hidden h-40 sm:h-52 md:h-64 w-full rounded-b-3xl ${
            !currentuser.coverpic
              ? "bg-gradient-to-r from-amber-500 to-orange-600"
              : ""
          }`}
        >
          {/* Dynamic cover image — only rendered when one exists */}
          {currentuser.coverpic && (
            <img
              src={currentuser.coverpic}
              alt="Cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          <div className="pointer-events-none absolute -top-14 -left-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse [animation-duration:5s]"></div>
          <div className="pointer-events-none absolute -bottom-14 -right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl animate-pulse [animation-duration:7s]"></div>
        </div>

        {/* ===== Avatar ===== */}
        <div className="relative z-10 flex justify-center -mt-20 sm:-mt-16">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-zinc-900 border-4 border-zinc-950 ring-2 ring-amber-500/30 flex items-center justify-center text-3xl sm:text-4xl font-bold text-amber-400">
            {currentuser.profilepic ? (
              <img
                src={currentuser.profilepic}
                alt={username}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <span>{username?.charAt(0).toUpperCase()}</span>
            )}
          </div>
        </div>

        {/* ===== Creator Info ===== */}
        <div className="text-center mt-4 px-4">
          <h1 className="text-xl sm:text-2xl font-bold">{username}</h1>
          <p className="text-zinc-400 mt-1 text-sm sm:text-base">
            Let's help {username} get a chai!
          </p>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2">
            {payments.length} Payments · ₹
            {payments.reduce((total, p) => total + p.amount, 0).toFixed(2)}{" "}
            raised
          </p>
        </div>

        {/* ===== Main Content: Supporters + Payment ===== */}
        <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
          {/* ---- Supporters Card ---- */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">👥</span>
              <h2 className="text-lg sm:text-xl font-semibold">Supporters</h2>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mb-4">
              Everyone who's chipped in a chai so far
            </p>

            <div className="space-y-3">
              {payments.length === 0 ? (
                <p className="text-sm text-zinc-400">
                  No supporters yet. Be the first to support!
                </p>
              ) : (
                payments.map((p, index) => (
                  <div
                    key={index}
                    className="bg-zinc-950/60 border border-zinc-800/60 rounded-lg p-3 flex items-start gap-3 transition-colors hover:border-zinc-700"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-sm font-semibold text-zinc-950 shrink-0">
                      {p.name?.charAt(0).toUpperCase() || "A"}
                    </div>
                    <p className="text-sm text-zinc-300">
                      <span className="font-semibold text-zinc-100">
                        {p.name}{" "}
                      </span>
                      donated ₹{p.amount}
                      <span> with the message </span> — "{p.message}"
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ---- Payment Card ---- */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">☕</span>
              <h2 className="text-lg sm:text-xl font-semibold">
                Make a payment
              </h2>
            </div>
            <p className="text-zinc-500 text-xs sm:text-sm mb-4">
              Choose an amount below, or enter your own — every bit helps.
            </p>

            <div className="space-y-3">
              {/* Name input */}
              <input
                placeholder="Enter Name"
                onChange={handleChange}
                value={paymentform.name}
                name="name"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
              />

              {/* Message input */}
              <input
                placeholder="Enter Message"
                onChange={handleChange}
                value={paymentform.message}
                name="message"
                required
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
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
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-colors"
              />

              {paymentError && (
                <p className="text-sm text-red-400" role="alert">
                  {paymentError}
                </p>
              )}

              {/* Pay button */}
              <button
                type="button"
                disabled={isDisabled}
                onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                className={`w-full rounded-lg py-2.5 font-semibold transition-all duration-300 ${
                  isDisabled
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-zinc-950 hover:scale-[1.01] active:scale-[0.99]"
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
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 text-sm hover:border-amber-500/40 hover:bg-zinc-900 transition-colors"
                >
                  Pay ₹10
                </button>
                <button
                  onClick={() => {
                    pay(2000);
                  }}
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 text-sm hover:border-amber-500/40 hover:bg-zinc-900 transition-colors"
                >
                  Pay ₹20
                </button>
                <button
                  onClick={() => {
                    pay(3000);
                  }}
                  className="flex-1 bg-zinc-950 border border-zinc-800 rounded-lg py-1.5 text-sm hover:border-amber-500/40 hover:bg-zinc-900 transition-colors"
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
