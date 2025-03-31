"use client";

import { useRouter } from "next/navigation";
import { Home, Wallet, CreditCard, PieChart, Bell, MessageCircle, User, LogOut } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    router.push("/"); // Redirect to home
  };

  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow">
      <div
        onClick={() => router.push("/dashboard/user")}
        className="text-lg font-bold text-green-700 hover:cursor-pointer"
      >
        CREDIT APP
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-green-700 font-medium">
            <Home size={20} className="mr-1" />
            <span>Home</span>
          </div>
          
          <div className="flex items-center text-gray-600 hover:text-green-700 font-medium">
            <Wallet size={20} className="mr-1" />
            <span>Payments</span>
          </div>
          
          <div className="flex items-center text-gray-600 hover:text-green-700 font-medium">
            <PieChart size={20} className="mr-1" />
            <span>Budget</span>
          </div>
          
          <div className="flex items-center text-gray-600 hover:text-green-700 font-medium">
            <CreditCard size={20} className="mr-1" />
            <span>Card</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-6 text-gray-600 items-center">
        <Bell className="cursor-pointer hover:text-green-700" />
        <MessageCircle className="cursor-pointer hover:text-green-700" />
        <User onClick={() => router.push("/dashboard/user/profile")} className="cursor-pointer hover:text-green-700" />
        <LogOut
          onClick={handleLogout}
          className="cursor-pointer hover:text-red-600 transition duration-200"
        />
      </div>
    </nav>
  );
}