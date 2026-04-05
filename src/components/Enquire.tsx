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

  return (
    <section id="enquire" className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-champagne/30">
          <div className="text-center mb-10">
             <h2 className="text-3xl md:text-4xl font-serif text-forest mb-4">Request a Proposal</h2>
             <p className="text-foreground/70">Share your gifting requirements, and our team will craft a bespoke solution for your brand.</p>
          </div>
          
          {status === "success" ? (
            <div className="bg-forest/10 border border-forest/20 text-forest p-6 rounded-sm text-center">
              <h3 className="text-xl font-serif mb-2">Thank you for your interest!</h3>
              <p>Your enquiry has been received. Our team will get back to you shortly.</p>
              <button type="button" onClick={() => setStatus("idle")} className="mt-6 text-sm font-semibold underline">Submit another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Full Name *</label>
                  <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email Address *</label>
                  <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-2">Phone Number *</label>
                  <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-2">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-foreground/80 mb-2">Gifting Occasion</label>
                <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors">
                  <option value="">Select an occasion...</option>
                  <option value="Diwali / Festivals">Diwali / Festivals</option>
                  <option value="Client Appreciation">Client Appreciation</option>
                  <option value="Employee Welcome Kits">Employee Welcome Kits</option>
                  <option value="Event / Conference">Event / Conference</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Your Requirements *</label>
                <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Approximate quantity, preferences, budget..." className="w-full bg-cream/50 border border-champagne px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-forest focus:border-forest transition-colors"></textarea>
              </div>

              {status === "error" && <p className="text-burgundy text-sm">{errorMessage}</p>}

              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="bg-forest text-cream px-10 py-4 rounded-sm hover:bg-forest-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg w-full md:w-auto font-medium disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
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
