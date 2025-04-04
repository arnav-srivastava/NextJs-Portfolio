"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => router.push("/"), 3000);
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="pt-3"><Navbar/></div>
      
    <div className="text-white flex items-center justify-center px-6 mt-3">
      
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-400 text-center mb-6">Contact Me</h2>
        <p className="text-center text-gray-300 mb-6">Feel free to reach out. I'll get back to you as soon as possible!</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Response Messages */}
        {success && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
        {error && <p className="text-red-400 text-center mt-4">{error}</p>}

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-300">Or connect with me:</p>
          <div className="flex justify-center space-x-6 mt-4 text-2xl">
            <a href="mailto:arnavsrivastav398@gmail.com" className="text-gray-400 hover:text-blue-400"><FaEnvelope /></a>
            <a href="tel:+91 811349894" className="text-gray-400 hover:text-blue-400"><FaPhone /></a>
            <a href="https://www.linkedin.com/in/arnavsrivastava" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://github.com/arnav-srivastava" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
