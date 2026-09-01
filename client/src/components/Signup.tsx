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
    <section id="signup" className="py-[clamp(46px,8vh,100px)] text-center bg-matte-black border-t border-dark-grey text-on-surface">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 className="font-headline-xl text-headline-xl text-pure-white uppercase mb-4 tracking-tighter">
          First look, first run.
        </h2>
        <p className="text-on-surface-variant max-w-[40ch] mx-auto mb-8 font-body-lg text-body-lg">
          Runs are small and they do sell out. We write once a month, before anything goes
          on the site.
        </p>
        <form onSubmit={handleSubmit} noValidate className="flex gap-2 justify-center flex-wrap">
          <input 
            type="email" 
            required 
            placeholder="you@email.com" 
            aria-label="Email address"
            className="flex-1 min-w-[min(300px,80vw)] max-w-[380px] px-4 py-4 border border-dark-grey bg-surface-container text-pure-white placeholder-on-surface-variant font-body-md focus:outline focus:outline-1 focus:outline-electric-gold"
          />
          <button className="inline-flex items-center justify-center px-8 py-4 bg-pure-white text-matte-black font-label-caps text-label-caps uppercase hover:bg-electric-gold transition-colors" type="submit">
            Join the list
          </button>
        </form>
        <div 
          className={`mt-4 font-label-caps text-label-caps uppercase text-electric-gold transition-opacity duration-500 ${submitted ? 'opacity-100' : 'opacity-0'}`}
          role="status"
        >
          You are on the list. Look out for Thursday.
        </div>
      </div>
    </section>
  );
}
