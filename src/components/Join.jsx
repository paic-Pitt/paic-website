"use client";

import { useState } from "react";
import { Check, ChevronDown, Loader2, MoveRight } from "lucide-react";

const labelClass = "u-annot";
const fieldClass =
  "w-full border-0 border-b border-chalk/25 bg-transparent px-0 py-3 text-base text-chalk outline-none transition-colors duration-200 placeholder:text-chalk/35 focus:border-gold";
const submitClass =
  "group inline-flex h-14 cursor-pointer items-center justify-center gap-3 bg-gold px-8 font-display text-lg font-medium text-navy transition-colors duration-200 hover:bg-gold-bright active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60";

const benefits = [
  {
    title: "Access to Exclusive Workshops",
    desc: "Attend hands-on workshops led by experts and industry professionals.",
  },
  {
    title: "Networking Opportunities",
    desc: "Connect with peers, alumni, and industry partners in AI.",
  },
  {
    title: "Project Collaboration",
    desc: "Work on real-world AI projects with fellow members.",
  },
  {
    title: "Career Resources",
    desc: "Access to internship postings, resume reviews, and career guidance.",
  },
  {
    title: "Free Resources",
    desc: "Curated learning materials, computing resources, and more.",
  },
  {
    title: "Community Support",
    desc: "Join our Discord server for 24/7 help and discussion.",
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
    <section id="join" className="relative overflow-hidden py-24 md:py-36">
      <div className="u-grid-field" aria-hidden="true" />

      <div className="site-container relative">
        <div className="reveal">
          <p className="u-annot mb-5">// Membership</p>
          <h2 className="u-display text-[clamp(2.5rem,7vw,5rem)]">Join the club.</h2>
          <p className="u-lede mt-6 max-w-[48ch]">
            All students are welcome — every major, every year, no experience needed.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-16 md:mt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

          {/* Left column: benefits */}
          <ol className="reveal lg:sticky lg:top-28">
            {benefits.map((benefit, i) => (
              <li key={benefit.title} className="group flex gap-6 border-t border-chalk/12 py-5 last:border-b">
                <span className="pt-1 font-mono text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-lg font-medium transition-colors group-hover:text-gold">{benefit.title}</p>
                  <p className="mt-1 leading-relaxed text-chalk/60">{benefit.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Right column: form */}
          <div className="reveal border border-chalk/12 bg-navy-deep/80 p-8 backdrop-blur-sm md:p-12">
            {submitted ? (
              <div className="flex flex-col items-start py-8">
                <span className="mb-8 grid size-16 animate-draw-in place-items-center rounded-full border border-gold text-gold">
                  <Check size={30} strokeWidth={1.5} />
                </span>
                <h3 className="u-display text-[2.25rem]">Welcome to Panther AI!</h3>
                <p className="u-lede mt-4 max-w-md">
                  Thank you for joining! Your registration has been recorded in our database. Check your email for next steps.
                </p>
                <button onClick={() => setSubmitted(false)} className={`${submitClass} mt-10`}>
                  Register another student
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <p className="u-annot text-gold">Membership application</p>
                  <h3 className="u-display mt-3 text-[2rem]">Tell us about you.</h3>
                </div>

                {error && (
                  <div role="alert" className="mb-8 border-l-2 border-gold bg-gold/10 px-4 py-3 text-sm text-chalk/90">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="firstName" className={labelClass}>First name *</label>
                      <input id="firstName" name="firstName" required placeholder="John" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="lastName" className={labelClass}>Last name *</label>
                      <input id="lastName" name="lastName" required placeholder="Doe" className={fieldClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className={labelClass}>Pitt email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      pattern=".+@pitt\.edu"
                      title="Please use a valid @pitt.edu email address"
                      placeholder="john.doe@pitt.edu"
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="year" className={labelClass}>Year *</label>
                      <div className="relative">
                        <select
                          id="year"
                          name="year"
                          required
                          defaultValue=""
                          className={`${fieldClass} cursor-pointer appearance-none pr-8 invalid:text-chalk/35 [&>option]:bg-navy-deep [&>option]:text-chalk`}
                        >
                          <option value="" disabled>Select your year</option>
                          <option value="freshman">Freshman</option>
                          <option value="sophomore">Sophomore</option>
                          <option value="junior">Junior</option>
                          <option value="senior">Senior</option>
                          <option value="graduate">Graduate</option>
                        </select>
                        <ChevronDown size={18} className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-chalk/50" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label htmlFor="major" className={labelClass}>Major *</label>
                      <input id="major" name="major" required placeholder="Your major" className={fieldClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="interests" className={labelClass}>What interests you most about AI?</label>
                    <textarea
                      id="interests"
                      name="interests"
                      placeholder="Tell us what excites you about AI and what you hope to learn..."
                      className={`${fieldClass} min-h-28 resize-none`}
                    />
                  </div>

                  <label htmlFor="newsletter" className="flex cursor-pointer items-start gap-3 text-sm text-chalk/70">
                    <input type="checkbox" id="newsletter" name="newsletter" className="mt-0.5 size-4 cursor-pointer accent-gold" />
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
                        <MoveRight size={20} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-chalk/45">
                    By submitting, you agree to our{" "}
                    <a href="/privacy_policy" className="underline underline-offset-2 hover:text-chalk">privacy policy</a> and{" "}
                    <a href="" className="underline underline-offset-2 hover:text-chalk">terms</a>
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
