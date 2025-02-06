"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Image from "next/image";
import wish from "@/app/images/wish.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzdgabo");

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div className="mt-10 text-center px-6">
        <h1 className="font-extrabold text-4xl md:text-5xl uppercase tracking-wider text-gray-900">
          Get In Touch <span className="text-orange-500">With Us</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          For more information about our products & services, please feel free to drop us an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-6">

        {/* Form Section */}
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
          {state.succeeded ? (
            <p className="text-green-600 text-center">Thanks for reaching out! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-semibold block text-gray-700">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full border-b-2 border-gray-400 text-gray-900 py-2 px-4 focus:outline-none focus:border-orange-500 transition-all duration-300"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="font-semibold block text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border-b-2 border-gray-400 text-gray-900 py-2 px-4 focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none h-24"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-[#029FAE] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#027e87] transition-all duration-300"
                >
                  {state.submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="mt-10 flex justify-center">
        <Image src={wish} alt="Wish" className="w-3/4 md:w-1/2" />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
