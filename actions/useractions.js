"use server"
import Razorpay from "razorpay";
import Payment from "@/app/Model/payment"
import connectDb from "@/app/db/connectdb"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    console.log("API_KEY on server:", process.env.API_KEY) 

var instance = new Razorpay({ key_id: process.env.API_KEY, key_secret: process.env.KEY_SECRET })


let options = {
    amount: Number.parseInt(amount),
    currency: "INR",
}

let x = await instance.orders.create(options)

await Payment.create({
    oid: x.id,
    amount: amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
})

return x
}