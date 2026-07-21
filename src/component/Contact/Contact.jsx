import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { FaTerminal, FaCode, FaServer, FaEnvelopeOpenText } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const terminalLines = [
  "> ssh contact@saddam.dev",
  "> mail.send --priority=high",
  "> ping saddam.ansari --response=soon",
  "> curl -X POST /api/contact",
];

const contactStatuses = [
  { label: "EMAIL", status: "ONLINE", color: "text-green-400", dot: "bg-green-500" },
  { label: "PHONE", status: "AVAILABLE", color: "text-green-400", dot: "bg-green-500" },
  { label: "LOCATION", status: "ACTIVE", color: "text-green-400", dot: "bg-green-500" },
];

export default function Contact() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [notification, setNotification] = useState(null);
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [formFocused, setFormFocused] = useState(false);

  const currentLine = useMemo(
    () => terminalLines[terminalLineIndex % terminalLines.length],
    [terminalLineIndex]
  );

  useEffect(() => {
    const speed = isDeleting ? 25 : 60;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentLine.length) {
          setTypedText(currentLine.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          const pause = setTimeout(() => setIsDeleting(true), 2000);
          return () => clearTimeout(pause);
        }
      } else {
        if (charIndex > 0) {
          setTypedText(currentLine.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setTerminalLineIndex((prev) => prev + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentLine]);

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
      showNotification("error", "All fields are required. Please fill them out.");
      return;
    }

    setSending(true);
    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      if (res.status === 200) {
        showNotification("success", "Message sent successfully! I will respond ASAP.");
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
      className="py-20 px-4 md:px-16 lg:px-24 text-white relative overflow-hidden"
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
                {notification.type === "success" ? "200 OK" : "400 Bad Request"}
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

      {/* Floating code snippets */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 md:right-20 text-xs font-mono text-cyan-500/30 pointer-events-none hidden md:block"
      >
        {"{ status: 200 }"}
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 text-xs font-mono text-blue-500/30 pointer-events-none hidden md:block"
      >
        {"await response.json()"}
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      {/* Terminal Typing Subtitle */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FaTerminal className="text-cyan-400 text-sm" />
        <span className="font-mono text-sm text-cyan-400/80">
          <span className="text-green-400">saddam@dev</span>
          <span className="text-gray-500">:~$ </span>
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="text-cyan-400"
          >
            |
          </motion.span>
        </span>
        <FaTerminal className="text-cyan-400 text-sm" />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 relative z-10">
        {/* Left Info */}
        <motion.div
          className="md:w-4/12 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300 text-transparent bg-clip-text">
              Let&apos;s Talk
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-green-400">STATUS: AVAILABLE FOR WORK</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-mono">
            <span className="text-gray-600">// </span>
            Open to freelance, full-time, and contract roles.
            <br />
            <span className="text-gray-600">// </span>
            Response time &lt; 24 hours. Let&apos;s build something awesome!
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: mail_icon,
                label: "Email",
                value: "saddammalik498@gmail.com",
                href: "mailto:saddammalik498@gmail.com?subject=Hello%20Saddam&body=Hi%20Saddam,%20I%20would%20like%20to%20get%20in%20touch%20regarding...",
                status: contactStatuses[0],
              },
              {
                icon: call_icon,
                label: "Phone",
                value: "+91-8521538489",
                href: "tel:+918521538489",
                status: contactStatuses[1],
              },
              {
                icon: location_icon,
                label: "Location",
                value: "Hyderabad, Telangana, India",
                href: "https://www.google.com/maps?q=17.451769350940094,78.40719182064657",
                target: "_blank",
                status: contactStatuses[2],
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.target || undefined}
                rel={item.target ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.03 }}
                className="group flex items-center gap-4 bg-gray-800/50 backdrop-blur-md p-4 rounded-2xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700 hover:border-cyan-500/30"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <img src={item.icon} alt={item.label} className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">{item.label}</p>
                    <span className={`w-1.5 h-1.5 rounded-full ${item.status.dot} flex-shrink-0`} />
                    <span className={`text-[10px] font-mono ${item.status.color} hidden sm:inline`}>{item.status.status}</span>
                  </div>
                  <p className="font-semibold text-white group-hover:text-cyan-400 transition-colors truncate text-sm sm:text-base">
                    {item.value}
                  </p>
                </div>
                <div className="text-gray-600 group-hover:text-cyan-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Dev Stats */}
          <motion.div
            className="grid grid-cols-3 gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {[
              { icon: <FaCode />, label: "Projects", value: "5+" },
              { icon: <FaServer />, label: "Services", value: "3+" },
              { icon: <FaEnvelopeOpenText />, label: "Response", value: "24H" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-3 text-center hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-cyan-400 text-lg mb-1 flex justify-center">{stat.icon}</div>
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-gray-500 font-mono uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          className="md:w-5/12 flex flex-col gap-5 bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-gray-700 hover:border-cyan-500/20 transition-colors duration-500"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onFocus={() => setFormFocused(true)}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-gray-700/50">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-gray-500 font-mono flex-1 text-center">
              send_message.tsx
            </span>
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[10px] font-mono text-cyan-400"
            >
              {formFocused ? "EDITING" : "READY"}
            </motion.span>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> const name =
            </label>
            <input
              type="text"
              name="name"
              placeholder='"Saddam Ansari"'
              className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder:text-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> const email =
            </label>
            <input
              type="email"
              name="email"
              placeholder='"you@example.com"'
              className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder:text-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-gray-500 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> const message =
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder='"I have an exciting project idea..."'
              className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder:text-gray-500 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all resize-none"
            ></textarea>
          </div>

          {/* Char counter */}
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-600">
            <span>async function submit()</span>
            <motion.span
              animate={{ color: ["#6b7280", "#22d3ee", "#6b7280"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {"{ await sendEmail(data); }"}
            </motion.span>
          </div>

          <button
            type="submit"
            disabled={sending}
            className="inline-flex justify-center items-center px-8 py-4 mt-1 rounded-xl font-bold shadow-lg
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
                <span className="font-mono">await sendEmail()</span>
              </>
            ) : (
              <>
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
                  className="mr-2"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span className="font-mono">sendMessage()</span>
              </>
            )}
          </button>

          {/* Mock Console Output */}
          <div className="bg-gray-900/80 rounded-xl p-3 font-mono text-[10px] leading-relaxed border border-gray-700/50">
            <p className="text-gray-600">
              <span className="text-green-400">saddam@dev</span>:~$ node send_message.tsx
            </p>
            <p className="text-gray-500">
              <span className="text-cyan-400">[INFO]</span> Initializing email client...
            </p>
            <p className="text-gray-500">
              <span className="text-cyan-400">[INFO]</span> SMTP server connected.
            </p>
            {sending ? (
              <p className="text-yellow-400 animate-pulse">
                <span className="text-yellow-400">[SENDING]</span> Dispatching message...
              </p>
            ) : (
              <p className="text-gray-600">
                <span className="text-gray-600">[WAITING]</span> Ready to send.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
