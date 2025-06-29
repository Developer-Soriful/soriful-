import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Detect device capabilities
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isLowPower = useMediaQuery({ query: "(max-width: 480px)" });

  useEffect(() => {
    const checkDeviceCapabilities = () => {
      // Don't render 3D on very small screens or low-end devices
      if (isLowPower || window.innerWidth < 480) {
        setShouldRender3D(false);
        return;
      }

      // Check for WebGL support
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      if (!gl) {
        setShouldRender3D(false);
        return;
      }

      // Check for low memory devices
      const memoryInfo = navigator.deviceMemory || 4;
      const cores = navigator.hardwareConcurrency || 4;
      
      if (memoryInfo < 2 || cores < 2) {
        setShouldRender3D(false);
        return;
      }

      setShouldRender3D(true);
    };

    checkDeviceCapabilities();
    window.addEventListener('resize', checkDeviceCapabilities);
    
    return () => window.removeEventListener('resize', checkDeviceCapabilities);
  }, [isLowPower]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      // Add recipient email to the form data
      const formData = new FormData(formRef.current);
      formData.append('to_email', '454250soriful@gmail.com');
      formData.append('recipient_name', 'Soriful Islam');

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
      alert("Message sent successfully! I'll get back to you soon.");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again or contact me directly at 454250soriful@gmail.com");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        
        {/* Contact Info */}
        <div className="text-center mb-8">
          <p className="text-white-50 text-lg">
            Send me a message and I'll get back to you at{" "}
            <span className="text-blue-50 font-semibold">454250soriful@gmail.com</span>
          </p>
        </div>
        
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {shouldRender3D ? (
                <ContactExperience />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-900/20 to-yellow-900/20">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
                    <p className="text-orange-50 text-sm">3D Computer Model</p>
                    <p className="text-orange-50/70 text-xs mt-1">Optimized for desktop</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
