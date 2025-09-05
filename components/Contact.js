import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_URL || "";
    try {
      if (!endpoint) {
        setStatus({
          ok: false,
          message:
            "Form endpoint not configured. Add NEXT_PUBLIC_FORMSPREE_URL.",
        });
        return;
      }
      const res = await fetch(endpoint, {
        method: "POST",
        body: form,
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ ok: true, message: "Message sent — thank you!" });
        e.target.reset();
      } else {
        setStatus({ ok: false, message: data.error || "Submission failed" });
      }
    } catch (err) {
      setStatus({ ok: false, message: err.message || "Error sending message" });
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Contact Us
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Let’s Work Together
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Weala, Cinta Township, Margibi County, Liberia
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
            <h4 className="font-semibold text-gray-900">Reach Us</h4>
            <ul className="mt-3 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +231-770-180-697 /
                +231-886-856-201
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> wedolcso@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Weala, Cinta Township, Margibi
                County
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-500">
              Add Google Map and social links in production.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h4 className="font-semibold text-gray-900">Send a Message</h4>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input
                name="name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
                placeholder="Name"
                required
              />
              <input
                name="email"
                type="email"
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
                placeholder="Message"
                required
              />
              <button
                type="submit"
                className="inline-flex w-fit items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold"
              >
                Send
              </button>
              {status && (
                <p
                  className={`${
                    status.ok ? "text-emerald-700" : "text-red-600"
                  } text-sm mt-2`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
