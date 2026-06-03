import { useState } from "react";
import { Check, Copy, Heart, IndianRupee, Landmark, QrCode } from "lucide-react";

const upiId = "9847303256@cnrb";
const payeeName = "MAHILA VIKAS SAMAJ";
const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&cu=INR`;

const Donate = () => {
  const [copied, setCopied] = useState(false);

  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-green-700 mb-8">
              <Heart size={16} fill="currentColor" />
              Support our work
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-8 text-gray-950">
              Donate to Mahila Vikas Samaj
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Your contribution helps us continue grassroots programmes for
              women entrepreneurship, livelihood training, and community-led
              development across Kerala.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={upiLink}
                className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-white font-bold shadow-xl shadow-green-900/20 hover:bg-green-700 hover:-translate-y-1 active:scale-95 transition-all"
              >
                <IndianRupee size={20} />
                Pay with UPI
              </a>
              <button
                type="button"
                onClick={copyUpiId}
                className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-8 py-4 text-green-800 font-bold shadow-sm hover:bg-green-50 active:scale-95 transition-all"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
                {copied ? "Copied" : "Copy UPI ID"}
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/70 rounded-[2rem] p-5 md:p-7 max-w-[480px] w-full mx-auto">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-green-700">
                  UPI QR
                </p>
                <h2 className="text-2xl font-extrabold text-gray-950">
                  Scan to Donate
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                <QrCode size={24} />
              </div>
            </div>

            <img
              src="/donation-qr.png"
              alt="UPI QR code for Mahila Vikas Samaj donations"
              className="w-full max-h-[62vh] md:max-h-[560px] object-contain rounded-3xl border border-gray-100 bg-white"
            />

            <div className="mt-6 rounded-3xl bg-gray-50 p-5 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-white text-green-700 flex items-center justify-center shadow-sm">
                  <Landmark size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">UPI ID</p>
                  <p className="text-xl font-extrabold text-gray-950 break-all">
                    {upiId}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Payee: Mahila Vikas Samaj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donate;
