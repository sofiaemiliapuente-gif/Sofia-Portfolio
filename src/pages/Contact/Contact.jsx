import { useState, useEffect } from "react";
import { Send, MapPin, Mail, Phone, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    try {
      // Using EmailJS to send email
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatus("There was an error sending your message.");
      }
    } catch (error) {
      setStatus(`An error occurred: ${error.message}`);
      console.error("Full error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-main-bone min-h-screen"
    >
      <div className="flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 text-main-ink font-serif">
                  Let's talk
                </h2>
                <p className="text-main-taupe text-lg">
                  I'm open to roles and collaborations in sales, culture,
                  events, and politics — anywhere a multilingual,
                  cross-cultural perspective is useful. If you're building
                  something in international affairs, sustainability,
                  events, or communications, I'd like to hear about it.
                </p>
                <p className="text-main-taupe text-lg mt-3">
                  Tell me a bit about what you're working on and I'll get
                  back to you soon.
                </p>

                {/* How I work */}
                <div className="mt-6 space-y-2">
                  <h3 className="font-semibold text-main-ink">How I work</h3>
                  <ul className="text-main-taupe space-y-1.5">
                    <li>
                      <span className="text-main-ink">Multilingual, always.</span>{" "}
                      Reach me in Spanish, English, or German — I move
                      between them daily.
                    </li>
                    <li>
                      <span className="text-main-ink">Detail-first.</span>{" "}
                      From diplomatic reports to event logistics, I keep
                      track of the details that keep things moving.
                    </li>
                    <li>
                      <span className="text-main-ink">People first.</span>{" "}
                      I care more about connecting people across languages
                      and cultures than about following a script.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-sage/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-accent-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main-ink">Email</h3>
                    <a
                      href="mailto:sofiaemiliapuente@gmail.com"
                      className="text-main-taupe hover:text-accent-forest transition-colors"
                    >
                      sofiaemiliapuente@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent-forest/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-accent-forest" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main-ink">Phone</h3>
                    <a
                      href="tel:+436601185761"
                      className="text-main-taupe hover:text-accent-forest transition-colors"
                    >
                      +43 660 1185761
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent-gold/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main-ink">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/sof%C3%ADa-emilia-puente-hernandez-916782284/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-main-taupe hover:text-accent-forest transition-colors"
                    >
                      Sofía Emilia Puente Hernández
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent-rust/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent-rust" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-main-ink">Location</h3>
                    <p className="text-main-taupe">Vienna, Austria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-main-sand p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-main-bone border ${
                        errors.name ? "border-accent-rust" : "border-main-taupe/30"
                      } focus:border-accent-sage focus:outline-none transition-colors text-main-ink`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-accent-rust text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-main-bone border ${
                        errors.email ? "border-accent-rust" : "border-main-taupe/30"
                      } focus:border-accent-sage focus:outline-none transition-colors text-main-ink`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-accent-rust text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-main-bone border ${
                        errors.subject ? "border-accent-rust" : "border-main-taupe/30"
                      } focus:border-accent-sage focus:outline-none transition-colors text-main-ink`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-accent-rust text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-main-bone border ${
                        errors.message ? "border-accent-rust" : "border-main-taupe/30"
                      } focus:border-accent-sage focus:outline-none transition-colors resize-none text-main-ink`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-accent-rust text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-sage text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-accent-forest transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Status Message */}
              {status && (
                <div
                  className={`mt-4 text-center ${
                    status.includes("success")
                      ? "text-accent-forest"
                      : "text-accent-rust"
                  }`}
                >
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
