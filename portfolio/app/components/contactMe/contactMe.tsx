'use client';
import { useRef, useState } from "react";
import "./contactMe.css";

export default function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef<number>(0);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (hidden field that bots fill out)
    const formData = new FormData(form.current!);
    if (formData.get("website")) {
      setStatus("Submission failed.");
      return;
    }

    // Rate limiting: prevent submitting more than once per 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) {
      setStatus("Please wait before sending another message.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending...");

    const serviceID = "service_jeaickr";
    const templateID = "template_iau9r26";
    const userID = "KbYAI2h_nrMOilIpn";

    const data = {
      from_name: formData.get("name"),
      reply_to: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: userID,
          template_params: data,
        }),
      });

      if (res.ok) {
        setStatus("Message sent!");
        form.current?.reset();
        lastSubmitTime.current = now;
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        
        {/* Honeypot field - hidden from real users */}
        <input 
          type="text" 
          name="website" 
          tabIndex={-1}
          autoComplete="off"
          style={{ 
            position: 'absolute', 
            left: '-9999px',
            width: '1px',
            height: '1px'
          }}
        />
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        <div className="contact-status">{status}</div>
      </form>
    </div>
  );
}