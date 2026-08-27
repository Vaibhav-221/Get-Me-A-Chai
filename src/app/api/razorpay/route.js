import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/Model/payment";
import connectDb from "@/app/db/connectdb";
import User from "@/app/Model/User";

export const POST = async (req) => {
    await connectDb()
    const body = Object.fromEntries(await req.formData())

    if (!body.razorpay_order_id || !body.razorpay_payment_id || !body.razorpay_signature) {
        return NextResponse.json({success: false, message: "Incomplete payment response"}, {status: 400})
    }

    // Check if razorpayOrderId is present on the server
    let p = await Payment.findOne({oid: body.razorpay_order_id})
    if(!p){
        return NextResponse.json({success: false, message:"Order Id not found"})
    }

    // fetch the secret of the user who is getting the payment 
    let user = await User.findOne({username: p.to_user})
    if (!user?.razorpaysecret) {
        return NextResponse.json({success: false, message: "Razorpay secret not configured"}, {status: 500})
    }
    const secret = user.razorpaysecret

    // Verify the payment
    let xx = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id}, body.razorpay_signature, secret)

    if(xx){
        // Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({oid: body.razorpay_order_id}, {done: "true"}, {new: true})
        return NextResponse.redirect(new URL(`/${updatedPayment.to_user}?paymentdone=true`, process.env.NEXT_PUBLIC_URL), 303)  
    }

    else{
        return NextResponse.json({success: false, message:"Payment Verification Failed"})
    }

}