// app/contact/page.tsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-primary text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 text-center mt-4">✅ Your message has been sent!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mt-4">❌ Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
