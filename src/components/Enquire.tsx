"use client";

import { useState } from "react";

export default function Enquire() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    occasion: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", occasion: "", message: "" });
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit. Please try again.");
    }
  };

  const inputClass = "w-full bg-transparent border-b border-foreground/20 px-0 py-3 focus:outline-none focus:border-forest focus:ring-0 transition-colors placeholder:text-foreground/30";
  const labelClass = "block text-xs uppercase tracking-widest font-semibold text-foreground/60 mb-1";

  return (
    <section id="enquire" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-14 rounded-xl shadow-sm border border-foreground/5 relative overflow-hidden">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest/20 via-forest to-forest/20"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-forest mb-4">Request a Proposal</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Share your gifting requirements, and our team will craft a bespoke solution for your brand.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-forest/5 border border-forest/10 text-forest p-10 rounded-lg text-center transition-all duration-500 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mx-auto mb-6 text-cream">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-3">Thank you for your interest.</h3>
              <p className="text-foreground/70 max-w-md mx-auto">Your enquiry has been successfully received. A member of our concierge team will reach out to you shortly.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-8 text-xs uppercase tracking-widest font-semibold text-forest border-b hover:border-forest/0 pb-1 transition-all">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-500">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label htmlFor="company" className={labelClass}>Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Acme Corp" />
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className={labelClass}>Gifting Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} className={`${inputClass} text-foreground/80 bg-transparent`}>
                  <option value="" disabled className="text-foreground/40">Select an occasion...</option>
                  <option value="Diwali / Festivals">Diwali / Festivals</option>
                  <option value="Client Appreciation">Client Appreciation</option>
                  <option value="Employee Welcome Kits">Employee Welcome Kits</option>
                  <option value="Event / Conference">Event / Conference</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-2">
                <label htmlFor="message" className={labelClass}>Your Requirements *</label>
                <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Please share details such as your approximate quantity, preferred budget, and ideal delivery timeline..." className={`w-full bg-transparent border border-foreground/10 px-4 py-3 focus:outline-none focus:border-forest transition-colors rounded-md placeholder:text-foreground/30 mt-3 resize-none bg-cream/20 hover:bg-cream/40 focus:bg-white`}></textarea>
              </div>

              {status === "error" && <p className="text-burgundy text-sm text-center font-medium bg-burgundy/10 py-3 rounded-md">{errorMessage}</p>}

              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-forest text-cream uppercase tracking-[0.2em] text-xs px-12 py-4 hover:bg-forest-light transition-all duration-300 w-full md:w-auto font-medium disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg disabled:hover:shadow-none"
                >
                  {status === "loading" ? "Submitting..." : "Send Enquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}