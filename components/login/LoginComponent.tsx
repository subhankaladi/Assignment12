"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import "./login.css";
import Image from "next/image";

export default function SignInPage() {
  const [name, setName] = useState("");

  const handleSignIn = () => {
    if (name.trim() === "") {
      alert("Please enter your name!");
      return;
    }
    signIn("github");
  };

  return (
    <div>
      <aside className="LP-navbar">
        <h2 className="Subhan-h2">SUBHAN</h2>
        <ul className="LP-inner-list">
          <li onClick={() => alert("Please Enter Your Name!")}>Home</li>
          <li onClick={() => alert("Please Enter Your Name!")}>Portfolio</li>
          <li onClick={() => alert("Please Enter Your Name!")}>News</li>
          <li onClick={() => alert("Please Enter Your Name!")}>Contact</li>
        </ul>
      </aside>

      <div className="lp-container">
        {/* Left Section */}
        <div className="left-section">
          <h1>Welcome To Digital Wealth!</h1>
          <input
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="LP-button" onClick={handleSignIn}>
            Sign In with Github
          </button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <Image src="/sk2.png" alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}
