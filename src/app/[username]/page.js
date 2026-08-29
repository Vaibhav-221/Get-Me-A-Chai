import React from "react";
import PaymentPage from "../components/PaymentPage";
import User from "../Model/User";
import connectDb from "../db/connectdb";
import { notFound } from "next/navigation";

const UserProfile = async ({ params }) => {
    connectDb();
    let u = await User.findOne({ username: params.username });
    if (!u) {
      return notFound();
    }
    
  return <PaymentPage username={params.username} />;
};

export default UserProfile;
