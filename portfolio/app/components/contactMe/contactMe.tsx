import { useRef, useState } from "react";
import "./contactMe.css";

export default function ContactMe() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these with your EmailJS credentials
    const serviceID = "service_jeaickr";
    const templateID = "template_r3brkl5";
    const userID = "KbYAI2h_nrMOilIpn";

    const formData = new FormData(form.current!);
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
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch {
      setStatus("Failed to send. Try again.");
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
        <button type="submit">Send</button>
        <div className="contact-status">{status}</div>
      </form>
    </div>
  );
}