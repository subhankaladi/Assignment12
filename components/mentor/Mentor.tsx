import React from 'react'
import './Mentor.css'
import Image from 'next/image'

const Mentor = () => {
  return (
    <div>

<h1 className='lead-mentor'>Our Lead Mentor For Generative AI at (PIAIC) & (GIAIC)</h1>
<section className="articles">
  <article>
    <div className="article-wrapper">
      <figure>
        <Image src="/sir-zia.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h2>Welcome to Pakistans Hero</h2>
        <p>

Meet Sir Zia  a visionary educator with Triple Masters Degrees. and has led top educators across Pakistan. With a passion for youth empowerment, he equips students with real-world skills through platforms like PIAIC, GIAIC, and Saylani, driving them toward future success.
 </p>
        <a target='_blank' href="https://www.linkedin.com/in/ziaukhan/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          
        </a>
      </div>
    </div>
  </article>
  <article>

    <div className="article-wrapper">
      <figure>
        <Image src="/sir-qasim.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h2>Welcome to Chief AI Officer</h2>
        <p>
My Name Is Muhammad Qasim  My expertise includes Generative AI, Deep Learning, TypeScript, Next.js, Serverless architecture, and Cloud infrastructure. I specialize in applying LLMs and Multi-agent systems using Crewai and LangChain, and I develop custom GPT solutions with FastAPI, integrating GPT-4 with existing systems
        </p>
        <a target='_blank' href="https://www.linkedin.com/in/sirqasim/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
          
        </a>
      </div>
    </div>
  </article>

  <article>

<div className="article-wrapper">
  <figure>
    <Image src="/sir-ameen.jpg" alt="" />
  </figure>
  <div className="article-body">
    <h2> Welcome to Ameen Alams World</h2>
    <p>
    My name is Ameen Alam, And Im Global AI & Cloud Education Leader | Internet-Scale Multi-Cloud Solutions Architect | Generative AI & Humanoid Robotics Visionary | Strategic Tech Innovation Pioneer    </p>
    <a target='_blank' href="https://www.linkedin.com/in/ameen-alam/" className="read-more">
      Read more <span className="sr-only">about this is some title</span>
      
    </a>
  </div>
</div>
</article>
  {/* <article>

    <div className="article-wrapper">
      <figure>
        <img src="/sir-hamza.jpg" alt="" />
      </figure>
      <div className="article-body">
        <h2>This is some title</h2>
        <p>
          Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
        </p>
        <a href="https://www.linkedin.com/in/webdeveloper-react-jamstack-expert/" className="read-more">
          Read more <span className="sr-only">about this is some title</span>
         
        </a>
      </div>
    </div>
  </article> */}
</section>
    </div>
  )
}

export default Mentor