import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-indigo-100">
            We'd love to hear from you. Whether you have a question,
            feedback, or need support, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg border p-8">
            <h2 className="text-3xl font-bold mb-8">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <p className="text-slate-600 leading-8 mb-10">
              Have questions about SkillPilot AI or need assistance?
              Reach out to us through any of the following channels.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                <Mail className="text-indigo-600" size={28} />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-slate-600">
                    support@skillpilotai.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                <Phone className="text-indigo-600" size={28} />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-slate-600">
                    +880 1700-000000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                <MapPin className="text-indigo-600" size={28} />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-slate-600">
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                <Clock className="text-indigo-600" size={28} />
                <div>
                  <h3 className="font-semibold text-lg">
                    Working Hours
                  </h3>
                  <p className="text-slate-600">
                    Sunday - Thursday
                  </p>
                  <p className="text-slate-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Start Your Learning Journey Today
          </h2>

          <p className="text-indigo-100 mb-8">
            Discover AI-powered career guidance, personalized roadmaps,
            and expert-designed courses with SkillPilot AI.
          </p>

                    <Link
            href="/courses"
            className="inline-block bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition"
            >
            Explore Courses
            </Link>
        </div>
      </section>
    </main>
  );
}