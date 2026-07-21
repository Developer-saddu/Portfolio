import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((type, message) => {
    setNotification({ type, message });
  }, []);

  const closeNotification = useCallback(() => {
    setNotification(null);
  }, []);

  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(closeNotification, 4000);
    return () => clearTimeout(timer);
  }, [notification, closeNotification]);

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      showNotification("error", "Please fill out all fields");
      return;
    }

    setSending(true);
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      if (res.status === 200) {
        showNotification("success", "Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      showNotification("error", "Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="Contact"
      className="py-20 px-4 md:px-16 lg:px-24 text-white relative"
    >
      {/* Notification Modal */}
      <AnimatePresence>
        {notification && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeNotification}
            />
            <motion.div
              className="relative bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {notification.type === "success" ? (
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              ) : (
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">
                {notification.type === "success" ? "Success!" : "Error"}
              </h3>
              <p className="text-gray-400 mb-6">{notification.message}</p>
              <button
                onClick={closeNotification}
                className="px-6 py-2 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 relative z-10">
        {/* Left Info */}
        <motion.div
          className="md:w-4/12 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 text-transparent bg-clip-text">
            Let&apos;s Talk
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m open to work on exciting projects! Feel free to reach out
            anytime, I will respond as soon as possible.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            <a
              className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
              href="mailto:saddammalik498@gmail.com?subject=Hello%20Saddam&body=Hi%20Saddam,%20I%20would%20like%20to%20get%20in%20touch%20regarding..."
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <img
                  src={mail_icon}
                  alt="Email"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  saddammalik498@gmail.com
                </p>
              </div>
            </a>
              <a
                href="tel:+918521538489"
                className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
              >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <img
                  src={call_icon}
                  alt="Phone"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  +91-8521538489
                </p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?q=17.451769350940094,78.40719182064657"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
                <img
                  src={location_icon}
                  alt="Location"
                  className="w-5 h-5 text-white"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          className="md:w-5/12 flex flex-col gap-5 bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message Here...."
            className="p-4 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex justify-center items-center px-8 py-4 mt-3 rounded-xl font-bold shadow-lg
             bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500
             transform hover:scale-105 hover:-translate-y-1
             focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800
             transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
          >
            {sending ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
