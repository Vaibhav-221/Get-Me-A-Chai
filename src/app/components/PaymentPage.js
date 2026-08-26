"use server";
import React from "react";
import Razorpay from "razorpay";
import { initiate } from "../../../actions/useractions";


const PaymentPage = ({username}) => {


  const pay =(amount, orderId) => {
    let a = await initiate(amount, session?user.name, paymentform);
    const orderId = a.order.id;



    var options = {
    "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": `Get Me A Chai - ${username}`, //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.URL}/api/razorpay`, //This is the callback URL where the payment response will be sent
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
    
};
var rzp1 = new Razorpay(options);
    rzp1.open();




  }
  return (
    <>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <div className="min-h-screen bg-[#0f172a] text-white">
        {/* ===== Banner ===== */}
        <div className="h-40 sm:h-52 md:h-64 w-full bg-gradient-to-r from-purple-700 via-violet-800 to-indigo-900" />

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
              {/* Single supporter item — repeat/map this later */}
              <div className="bg-[#0f172a]/60 rounded-lg p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-sm shrink-0">
                  A
                </div>
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Name</span> donated{" "}
                  <span className="text-violet-400">$0</span> — "message"
                </p>
              </div>
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
                placeholder="Enter Name" onchange={()=> handleChange}
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {/* Message input */}
              <input
                placeholder="Enter Message"
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {/* Amount input */}
              <input
                placeholder="Enter Amount"
                type="number"
                className="w-full bg-[#0f172a] border border-violet-800 rounded-md px-3 py-2 text-sm outline-none focus:border-violet-500"
              />

              {/* Pay button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 rounded-md py-2 font-semibold hover:opacity-90 transition">
                Pay
              </button>

              {/* Quick-pay preset buttons */}
              <div className="flex flex-col xs:flex-row gap-2 pt-1 sm:flex-row">
                <button onClick={() => {pay(1000, )
                  
                }
                } className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition">
                  Pay ₹10
                </button>
                <button onClick={() => {pay(1000, )
                  
                }
                } className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition">
                  Pay ₹20
                </button>
                <button onClick={() => {pay(1000, )
                  
                }
                } className="flex-1 bg-[#0f172a] border border-violet-800 rounded-md py-1.5 text-sm hover:bg-violet-900/40 transition">
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
