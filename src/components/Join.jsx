"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";

const labelClass = "text-sm font-semibold";
const fieldClass =
  "w-full rounded-xl border-[1.5px] border-ink/25 bg-paper px-4 py-3 text-base text-ink outline-none transition-colors duration-200 placeholder:text-ink/35 focus:border-blue focus:bg-white";
const submitClass =
  "group inline-flex h-14 cursor-pointer items-center justify-center gap-2 rounded-full border-[1.5px] border-ink bg-gold px-8 font-display text-lg font-semibold text-ink shadow-pop transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-pop-sm active:translate-x-1 active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:opacity-60";

const benefits = [
  {
    title: "Work on a real problem",
    desc: "Every workshop starts with a company or startup that's stuck on something. You help get it unstuck.",
  },
  {
    title: "Team up across majors",
    desc: "Business, marketing, engineering, whatever you study. Mixed teams come up with better answers.",
  },
  {
    title: "Get help building",
    desc: "Our tech team sits with your group and shows you the AI tools as you go.",
  },
  {
    title: "Leave with something to show",
    desc: "You present your work to the company and walk away with a project you can talk about in interviews.",
  },
];

export function Join() {

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // 1. Extract Data from Form
    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      year: e.target.year.value,
      major: e.target.major.value,
      interests: e.target.interests.value,
      newsletter: e.target.newsletter.checked,
    };

    // 2. Client-Side Validation
    if (!formData.email.toLowerCase().endsWith("@pitt.edu")) {
      setError("Please register using a valid University of Pittsburgh email (@pitt.edu).");
      setIsLoading(false);
      return;
    }

    try {
      // 3. Send Data to Backend
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setError("Failed to connect to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="join" className="pb-20 md:pb-28">
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">

          {/* Left column: pitch + benefits */}
          <div className="lg:sticky lg:top-28">
            <div className="reveal">
              <h2 className="u-display text-[clamp(2.25rem,5.5vw,4.25rem)]">Join the club.</h2>
              <p className="u-lede mt-5 max-w-[44ch] text-ink/75">
                All students are welcome. Every major, every year, no experience needed.
              </p>
            </div>

            <ul className="reveal mt-10 grid gap-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-gold">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-snug font-semibold">{benefit.title}</p>
                    <p className="mt-1 leading-relaxed text-ink/70">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: form */}
          <div className="reveal u-card bg-white p-7 shadow-pop md:p-10">
            {submitted ? (
              <div className="flex flex-col items-start py-8">
                <span className="mb-8 grid size-16 animate-draw-in place-items-center rounded-full border-[1.5px] border-ink bg-gold">
                  <Check size={30} strokeWidth={2.5} />
                </span>
                <h3 className="u-display text-[2.25rem]">Welcome to Panther AI!</h3>
                <p className="u-lede mt-4 max-w-md text-ink/75">
                  Thank you for joining! Your registration has been recorded in our database. Check your email for next steps.
                </p>
                <button onClick={() => setSubmitted(false)} className={`${submitClass} mt-10`}>
                  Register another student
                </button>
              </div>
            ) : (
              <>
                <h3 className="u-display mb-8 text-[1.9rem]">Tell us about you.</h3>

                {error && (
                  <div role="alert" className="mb-8 rounded-xl border-[1.5px] border-ink bg-coral/30 px-4 py-3 text-sm font-medium">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className={labelClass}>First name *</label>
                      <input id="firstName" name="firstName" required placeholder="Roc" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className={labelClass}>Last name *</label>
                      <input id="lastName" name="lastName" required placeholder="Panther" className={fieldClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className={labelClass}>Pitt email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern=".+@pitt\.edu"
                      title="Please use a valid @pitt.edu email address"
                      placeholder="roc1@pitt.edu"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="year" className={labelClass}>Year *</label>
                      <div className="relative">
                        <select
                          id="year"
                          name="year"
                          required
                          defaultValue=""
                          className={`${fieldClass} cursor-pointer appearance-none pr-10 invalid:text-ink/35`}
                        >
                          <option value="" disabled>Select your year</option>
                          <option value="freshman">Freshman</option>
                          <option value="sophomore">Sophomore</option>
                          <option value="junior">Junior</option>
                          <option value="senior">Senior</option>
                          <option value="graduate">Graduate</option>
                        </select>
                        <ChevronDown size={18} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-ink/50" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="major" className={labelClass}>Major *</label>
                      <input id="major" name="major" required placeholder="Your major" className={fieldClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="interests" className={labelClass}>What would you like to get out of the club?</label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="Anything you're curious about, or want to try building"
                      className={`${fieldClass} min-h-28 resize-none`}
                    />
                  </div>

                  <label htmlFor="newsletter" className="flex cursor-pointer items-start gap-3 text-sm text-ink/75">
                    <input type="checkbox" id="newsletter" name="newsletter" className="mt-0.5 size-4 cursor-pointer accent-blue" />
                    I want to receive club newsletters and event updates
                  </label>

                  <button type="submit" className={`${submitClass} w-full`} disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit application
                        <ArrowRight size={20} strokeWidth={2.25} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-ink/55">
                    By submitting, you agree to our{" "}
                    <a href="/privacy_policy" className="underline underline-offset-2 hover:text-ink">privacy policy</a> and{" "}
                    <a href="" className="underline underline-offset-2 hover:text-ink">terms</a>
                  </p>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Join;
