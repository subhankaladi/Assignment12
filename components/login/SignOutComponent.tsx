

'use client';

import React, { useEffect } from 'react';
import { signOut } from "next-auth/react";
import Typed from 'typed.js';
import './mnpg.css';
import Sp from '../secondpage/page';
import Link from 'next/link';
import Third from '../thirdpage/Third';
import Contact from '../secondpage/contact/Contact';
import Mentor from '../mentor/Mentor';

const Page: React.FC = () => {


      
  useEffect(() => {
    const options = {
      strings: [
        " Welcome To Generative AI",
        " Welcome To Autonomous Systems AI",
        " Welcome To Robotic AI",
        " Welcome To Computer Vision AI",
        " Welcome To Superintelligent AI",
        " Welcome To General AI",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='main-page'>
      <div className='mnpg-container'>
        <div className="mn-video">
          <video
            src="/blackhole.webm"
            className='blackhole-video rotate-180'
            loop
            autoPlay
            muted
          ></video>
        </div>

        <aside className="LP-navbar">
          <h2 className="Subhan-h2">SUBHAN</h2>
          <ul className="LP-inner-list">
            <li>
              <Link href="/mainpage">Home</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            
            <li>
              <Link href="https://subhankaladiportfolio.vercel.app/" target='_blank'>Portfolio</Link>
            </li>
            <li>
            <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </ul>
        </aside>

        <div className="skills-div">
          <span className="auto-type"></span>
        </div>

        <div className="my-intro-and-img">
          <div className="my-img">
            <img src="/subhan-ab.png" alt="subhan's-photo" />
          </div>
          <div className="my-intro">
          Welcome to our Generative AI website! Here, you'll find an overview of generative AI, the latest AI news, and an introduction to our Lead Mentor, an expert guiding us through this journey. Stay updated and explore the exciting world of generative AI with us!          </div>
        </div>
      </div>
      <hr />
      <Third />
      <hr />
      <Mentor />
      <hr />
      <Sp />
      <Contact />
    </div>
  );
};

export default Page;
