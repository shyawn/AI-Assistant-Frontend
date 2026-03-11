import { useState } from "react";
import "./App.css";
import LiveKitModal from "./components/LiveKitModal";
import { services, steps } from "./constants";

function App() {
  const [showSupport, setShowSupport] = useState<boolean>(false);

  return (
    <div className="min-h-dvh font-sans bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary-blue rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-primary-blue font-black text-2xl tracking-tight">
              MediApt
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-gray-500 hover:text-primary-blue transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-gray-500 hover:text-primary-blue transition-colors text-sm font-medium"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-gray-500 hover:text-primary-blue transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={() => setShowSupport(true)}
            className="bg-primary-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-secondary-blue active:scale-95 transition-all shadow-sm"
          >
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-sky-50 to-white py-28 px-6 text-center relative overflow-hidden">
        <div className="hero-bg-blob" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-primary-blue px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 bg-primary-blue rounded-full animate-pulse inline-block" />
            AI-Powered · Available 24/7
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Your Health, Scheduled
            <br />
            <span className="text-primary-blue">Effortlessly with AI</span>
          </h1>

          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
            Talk to our AI assistant to book a medical appointment in minutes.
            No hold times, no paperwork — just fast, compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto mb-8">
            <button
              onClick={() => setShowSupport(true)}
              className="flex-1 flex items-center justify-center gap-2 px-7 py-4 bg-primary-blue text-white rounded-xl font-bold text-base hover:bg-secondary-blue active:scale-95 transition-all shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book an Appointment
            </button>
            <a
              href="#services"
              className="flex-1 flex items-center justify-center gap-2 px-7 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold text-base hover:border-blue-300 active:scale-95 transition-all"
            >
              View Services
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            Trusted by{" "}
            <span className="font-semibold text-gray-600">
              10,000+ patients
            </span>{" "}
            · No sign-up required
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-linear-to-r from-primary-blue to-secondary-blue py-6 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center text-white">
          {[
            { value: "24/7", label: "AI Availability" },
            { value: "< 2 min", label: "Avg. Booking Time" },
            { value: "50+ Clinics", label: "Partner Providers" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black">{stat.value}</div>
              <div className="text-sky-200 text-xs font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary-blue font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Medical Services at Your Fingertips
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Our AI assistant helps you book a wide range of medical
              appointments quickly and effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-xl">
                  {service.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary-blue font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Book in 3 Easy Steps
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              No phone calls, no waiting. Book your appointment through a simple
              conversation with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((item, idx) => (
              <div key={item.step} className="text-center relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] right-0 h-0.5 bg-blue-100" />
                )}
                <div className="w-14 h-14 bg-linear-to-br from-primary-blue to-secondary-blue text-white rounded-2xl flex items-center justify-center font-black text-lg mx-auto mb-5 shadow-md shadow-blue-200 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-linear-to-br from-primary-blue to-[#0c4a6e] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-sky-200 mb-10 leading-relaxed">
            Our AI assistant is available around the clock. Get seen faster — no
            long waits.
          </p>
          <button
            onClick={() => setShowSupport(true)}
            className="inline-flex items-center gap-3 bg-white text-primary-blue px-8 py-4 rounded-xl font-bold text-base hover:bg-sky-50 active:scale-95 transition-all shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            Talk to AI Assistant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 text-gray-500 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary-blue rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <span className="text-primary-blue font-black text-lg">
              MediApt
            </span>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} MediApt. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <button
        className="fixed bottom-8 right-8 flex items-center gap-2.5 py-3.5 px-5 bg-linear-to-br from-primary-blue to-secondary-blue text-white border-none rounded-full cursor-pointer font-semibold text-sm shadow-2xl shadow-blue-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
        onClick={() => setShowSupport(true)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Book Now
      </button>

      {showSupport && <LiveKitModal setShowSupport={setShowSupport} />}
    </div>
  );
}

export default App;
