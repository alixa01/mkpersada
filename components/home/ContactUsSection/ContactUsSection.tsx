"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="relative min-h-screen bg-gradient-to-bl from-black to-[#2A5B8C] overflow-hidden">
      <div className="lg:py-16 py-10 px-6 lg:px-8 mx-auto max-w-7xl h-full flex flex-col space-y-12">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center items-center flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-sub-text ">
            Get in Touch
          </h2>
          <p className="text-slate-300 text-base lg:text-lg text-center">
            Ready to discuss your energy needs? Our team is here to help
          </p>
        </motion.div>

        {/* content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16">
          {/* left content*/}
          <div className="flex flex-1 flex-col space-y-6">
            {/* contact information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col bg-white/5 backdrop-blur-sm rounded-2xl shadow-[0_18px_50px_rgba(0,0,0,0.25)] border border-white/10 text-sub-text p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-semibold text-sub-text mb-4 lg:mb-6">
                Contact Information
              </h3>
              {/* detail contact */}
              <div className="space-y-6">
                {/* location */}
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 lg:p-3 bg-white/5 backdrop-blur-sm rounded-lg shrink-0">
                    <MapPin />
                  </div>
                  <div className="">
                    <p className="text-white font-medium text-sm lg:text-base">
                      Our Location
                    </p>
                    <span className="text-slate-300 text-sm lg:text-base">
                      Jl. RS. Fatmawati No. 15, Jakarta Selatan
                    </span>
                  </div>
                </div>

                {/* phone */}
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 lg:p-3 bg-white/5 backdrop-blur-sm rounded-lg shrink-0">
                    <Phone />
                  </div>
                  <div className="">
                    <p className="text-white font-medium text-sm lg:text-base">
                      Phone
                    </p>
                    <span className="text-slate-300 text-sm lg:text-base">
                      +62 217506200
                    </span>
                  </div>
                </div>

                {/* email */}
                <div className="flex flex-row items-center gap-4">
                  <div className="p-2 lg:p-3 bg-white/5 backdrop-blur-sm rounded-lg shrink-0">
                    <Mail />
                  </div>
                  <div className="">
                    <p className="text-white font-medium text-sm lg:text-base">
                      Email
                    </p>
                    <span className="text-slate-300 text-sm lg:text-base">
                      cs@mkpersada.co.id
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* maps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-48 lg:h-64 w-full rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-slate-800 relative group z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5996.840088690675!2d106.79366449423327!3d-6.269044648697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1982d73009b%3A0xb22eba74feb3342e!2sJl.%20RS.%20Fatmawati%20Raya%20No.15%2C%20Gandaria%20Sel.%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012420!5e0!3m2!1sid!2sid!4v1763978998646!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale invert-[0.85] group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* right content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-1 h-fit rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_18px_50px_rgba(15,23,42,0.55)] text-sub-text z-10">
            <form action="" className="w-full flex flex-col p-6 lg:p-8 gap-6">
              <div className="flex flex-row justify-between gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all bg-white/5 backdrop-blur-sm text-white placeholder:text-white/30 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-200">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all bg-white/5 backdrop-blur-sm text-white placeholder:text-white/30 text-sm"
                    placeholder="Johndoe@gmail.com"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-200">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all bg-white/5 backdrop-blur-sm text-white placeholder:text-white/30 text-sm"
                  placeholder="Request Quotation / Project Collaboration"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="subject"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 focus:border-white/30 focus:ring-2 focus:ring-white/10 outline-none transition-all bg-white/5 backdrop-blur-sm text-white placeholder:text-white/30 text-sm"
                  placeholder="Tell us more about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full bg-white text-[#194670] font-bold py-3 lg:py-4 rounded-lg shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
                <Send className="w-4 h-4 lg:w-5 lg:h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* grid overlay */}
      <div className="absolute inset-0 bg-grid-white-soft-big opacity-40 pointer-events-none [mask-image:radial-gradient(circle,black_40%,transparent_70%)]" />

      {/* blob shapes */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/15 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[460px] md:h-[460px] bg-shape/15 blur-3xl rounded-full" />
    </section>
  );
}
