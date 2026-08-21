'use client';

import React, { useState } from 'react';

export default function Signup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    if (!input?.value || !input.checkValidity()) {
      input?.focus();
      return;
    }
    setSubmitted(true);
    input.value = '';
  };

  return (
    <section id="signup" className="py-[clamp(46px,8vh,100px)] text-center">
      <div className="wrap">
        <h2 className="font-extrabold text-[clamp(30px,4.6vw,64px)] tracking-[-0.03em] uppercase mb-[14px]">
          First look, first run.
        </h2>
        <p className="text-[#8A8781] max-w-[40ch] mx-auto mb-[28px] text-[14px]">
          Runs are small and they do sell out. We write once a month, before anything goes
          on the site.
        </p>
        <form onSubmit={handleSubmit} noValidate className="flex gap-[8px] justify-center flex-wrap">
          <input 
            type="email" 
            required 
            placeholder="you@email.com" 
            aria-label="Email address"
            className="flex-1 min-w-[min(300px,80vw)] max-w-[380px] p-[16px_18px] border border-[#101010]/10 bg-transparent font-normal text-[14px] font-archivo text-[#101010] focus:outline focus:outline-2 focus:outline-[#101010] focus:outline-offset-2"
          />
          <button className="btn" type="submit"><span>Join the list</span></button>
        </form>
        <div 
          className={`mt-[16px] font-medium text-[10.5px] leading-none tracking-[0.18em] uppercase transition-opacity duration-450 ${submitted ? 'opacity-100' : 'opacity-0'}`}
          role="status"
        >
          You are on the list. Look out for Thursday.
        </div>
      </div>
    </section>
  );
}
