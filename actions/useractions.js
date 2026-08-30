"use server"
import Razorpay from "razorpay";
import Payment from "@/app/Model/payment"
import connectDb from "@/app/db/connectdb"
import User from "@/app/Model/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    // Fetch the creator who is receiving payment, to use THEIR Razorpay account
    let user = await User.findOne({ username: to_username })
    if (!user?.razorpayid || !user?.razorpaysecret) {
        return { error: "Creator has not configured Razorpay yet" }
    }

    var instance = new Razorpay({
        key_id: user.razorpayid,
        key_secret: user.razorpaysecret
    })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: paymentform.name,
        message: paymentform.message,
    })

    return { ...x, key: user.razorpayid }
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(5).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = data

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }
    else {
        await User.updateOne({ email: ndata.email }, ndata)
    }
}