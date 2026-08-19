"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const Dashboard = () => {
  const {data : session,status} = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") return null;
  if (!session) return null;


  
  return (
    <div>
      Hii this is Dashboard
    </div>
  )
}

export default Dashboard
