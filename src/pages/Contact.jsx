import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // Basic validation (good enough for now)
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please fill out all fields." });
      return;
    }
    if (!email.includes("@")) {
      setStatus({ type: "error", text: "Please enter a valid email." });
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "contactMessages"), {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
	createdAt: serverTimestamp(),
      });

      setStatus({ type: "success", text: "Message sent! Thanks for reaching out." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Firestore error:", err);
      setStatus({ type: "error", text: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
      <p className="mt-3 text-black/70">
        Send me a message and I’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="mt-1 w-full rounded-md border px-3 py-2 text-sm min-h-[120px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-md bg-black px-4 py-2 text-white text-sm font-medium disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status.text && (
          <p
            className={`text-sm ${
              status.type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {status.text}
          </p>
        )}
      </form>
    </div>
  );
}
