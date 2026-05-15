"use client";

import { useState } from "react";

const symptoms = [
  "Hot Flashes",
  "Sleep Problems",
  "Mood Swings",
  "Brain Fog",
  "Weight Changes",
  "Joint Pain",
  "Anxiety",
  "Irregular Periods",
];

const faqs = [
  {
    q: "Is menopause the same for every woman?",
    a: "No. Every woman’s experience is different. Genetics, lifestyle, stress, family support, and access to care all shape the journey.",
  },
  {
    q: "Can perimenopause start before 40?",
    a: "Yes, some women may notice changes in their mid-30s. Any major or worrying change should be discussed with a qualified healthcare professional.",
  },
  {
    q: "Does Lavi diagnose or recommend medicine?",
    a: "No. Lavi is a support and education companion. She does not diagnose, prescribe, or replace a doctor.",
  },
  {
    q: "Can corporates see employee health details?",
    a: "No. Corporate dashboards should only show anonymous, group-level insights. Individual symptoms and private conversations remain protected.",
  },
];

const plans = [
  {
    name: "HerSfar Free",
    tag: "Start Your Journey",
    price: "₹0 / month",
    cta: "Start Free",
    dark: false,
    features: [
      "Limited Lavi AI conversations",
      "Basic symptom tracker",
      "Selected education articles",
      "Hindi & English access",
      "Basic community access",
      "Doctor-prep checklist",
    ],
  },
  {
    name: "HerSfar Premium",
    tag: "For Deeper Personal Support",
    price: "₹199 / month",
    cta: "Go Premium",
    dark: true,
    features: [
      "Unlimited Lavi AI conversations",
      "Advanced symptom & mood insights",
      "Personal journey summaries",
      "Full learn library access",
      "Priority expert webinars",
      "Downloadable doctor visit report",
    ],
  },
  {
    name: "HerSfar for Teams",
    tag: "B2B Corporate Wellness",
    price: "₹ Custom",
    cta: "Book Corporate Demo",
    dark: false,
    features: [
      "Employee app access",
      "Corporate invite dashboard",
      "Anonymous wellness insights",
      "Live expert workshops",
      "HR awareness campaigns",
      "Impact reports & analytics",
    ],
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [lang, setLang] = useState("EN");

  return (
    <main className="min-h-screen bg-[#FDF8F2] text-[#2C1B24]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDF8F2]/90 backdrop-blur-xl border-b border-[#E8D8CA] shadow-sm">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="text-3xl font-serif tracking-tight">
            <span className="text-[#2C1B24]">Her</span>
            <span className="text-[#C4956A]">Sfar</span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#5D4A52]">
            <a href="#home" className="hover:text-[#7A3F5E]">Home</a>
            <a href="#about" className="hover:text-[#7A3F5E]">About</a>
            <a href="#why" className="hover:text-[#7A3F5E]">Why Us</a>
            <a href="#lavi" className="hover:text-[#7A3F5E]">Meet Lavi</a>
            <a href="#plans" className="hover:text-[#7A3F5E]">For You</a>
            <a href="#organisations" className="hover:text-[#7A3F5E]">Organisations</a>
            <a href="#contact" className="hover:text-[#7A3F5E]">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "EN" ? "HI" : "EN")}
              className="h-11 px-4 rounded-full border border-[#D9BFA9] text-sm font-semibold text-[#7A3F5E] hover:bg-white transition"
            >
              EN / HI
            </button>
            <a href="#plans" className="hidden sm:inline-flex h-11 items-center px-5 rounded-full bg-[#7A3F5E] text-white text-sm font-semibold shadow-lg shadow-[#7A3F5E]/20 hover:-translate-y-0.5 transition">
              Download App
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-screen pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(196,149,106,0.36),transparent_32%),radial-gradient(circle_at_8%_18%,rgba(122,63,94,0.12),transparent_26%)]" />
        <div className="absolute right-[-120px] top-32 w-[520px] h-[520px] rounded-full bg-[#F2C9B8]/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center min-h-[calc(100vh-8rem)]">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-[#E9D8C9] text-[#7A3F5E] text-sm font-semibold shadow-sm">
              Women’s Wellness Platform
            </div>

            <h1 className="font-serif mt-8 text-6xl md:text-8xl leading-[0.92] tracking-tight text-[#2C1B24] max-w-4xl">
              {lang === "HI" ? "वो सफ़र जिसके बारे में कोई बात नहीं करता।" : "The Journey No One Talks About."}
            </h1>

            <p className="mt-7 text-lg md:text-xl leading-9 text-[#6C5962] max-w-2xl">
              Perimenopause and menopause affect every woman — yet most face it alone, in silence, without answers. HerSfar changes that. With Lavi, your AI companion, you are never alone.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#plans" className="px-7 py-4 rounded-full bg-[#7A3F5E] text-white font-semibold shadow-xl shadow-[#7A3F5E]/20 hover:-translate-y-1 transition text-center">
                Download Free — No Strings
              </a>
              <a href="#lavi" className="px-7 py-4 rounded-full border border-[#7A3F5E] text-[#7A3F5E] font-semibold hover:bg-white transition text-center">
                Meet Lavi
              </a>
            </div>

            <div className="mt-12 pt-7 border-t border-[#C4956A]/45 grid sm:grid-cols-3 gap-5 max-w-3xl">
              <div><p className="text-2xl font-serif text-[#7A3F5E]">1B+</p><p className="text-sm text-[#6C5962]">Women affected globally</p></div>
              <div><p className="text-2xl font-serif text-[#7A3F5E]">10 Years</p><p className="text-sm text-[#6C5962]">Average journey duration</p></div>
              <div><p className="text-2xl font-serif text-[#7A3F5E]">India-first</p><p className="text-sm text-[#6C5962]">Hindi + English from day one</p></div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto w-[390px] rounded-[3rem] p-4 bg-[#2C1B24] shadow-2xl shadow-[#2C1B24]/30">
              <div className="rounded-[2.25rem] overflow-hidden bg-[#FDF8F2] min-h-[650px] border border-[#EBD9CA]">
                <div className="bg-[#7A3F5E] text-white p-6">
                  <p className="text-sm text-[#F4D9C7]">Lavi AI</p>
                  <h3 className="font-serif text-3xl mt-2">Namaste, I’m here.</h3>
                </div>

                <div className="p-5 space-y-4">
                  <div className="rounded-3xl bg-white p-4 shadow-sm text-sm leading-6">Namaste! I’m Lavi 🌸 What are you feeling today?</div>
                  <div className="rounded-3xl bg-[#F1D8DD] p-4 ml-10 text-sm leading-6">I’ve been having hot flashes at night.</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm text-sm leading-6">I can help you understand and track patterns. I won’t diagnose, but I’ll help you prepare better questions for your doctor.</div>
                  <div className="rounded-3xl bg-[#F1D8DD] p-4 ml-10 text-sm leading-6">मुझे हिंदी में बताओ</div>
                  <div className="rounded-3xl bg-white p-4 shadow-sm text-sm leading-6">बिल्कुल. हम इसे simple language में समझेंगे और pattern note करेंगे.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Understanding the Journey</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">What is Perimenopause & Menopause?</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">It’s not a disease. It’s not weakness. It’s a natural biological transition that every woman will experience — and deserves to understand fully.</p>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-14">
            <div className="relative pl-8 border-l border-[#C4956A]/50 space-y-10">
              {[
                ["Stage 1 | Age 35–45", "Perimenopause Begins", "Hormones start shifting. Periods may become irregular. Mood changes, sleep trouble, and hot flashes can begin quietly."],
                ["Stage 2 | Age 45–55", "Menopause", "12 consecutive months without a period. Estrogen significantly declines, and body changes can feel more visible."],
                ["Stage 3 | Age 55+", "Post-Menopause", "A new chapter. Some symptoms may ease. Bone, heart, and emotional health need continued attention."]
              ].map(([stage, title, text]) => (
                <div key={title} className="relative">
                  <div className="absolute -left-[43px] top-1 w-5 h-5 rounded-full bg-[#C4956A] ring-8 ring-[#FDF8F2]" />
                  <p className="text-sm font-semibold text-[#7A3F5E]">{stage}</p>
                  <h3 className="font-serif text-3xl mt-2">{title}</h3>
                  <p className="mt-3 text-[#6C5962] leading-7">{text}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="font-serif text-3xl text-[#7A3F5E]">Common Symptoms</h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {symptoms.map((item) => (
                  <div key={item} className="rounded-full border border-[#ECD9CA] px-4 py-3 bg-[#FDF8F2] text-sm font-medium text-[#5D4A52]">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {faqs.map((faq, index) => (
                  <div key={faq.q} className="border border-[#ECD9CA] rounded-3xl overflow-hidden bg-[#FDF8F2]">
                    <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full p-5 flex justify-between items-center text-left font-semibold">
                      <span>{faq.q}</span>
                      <span className="text-[#C4956A] text-2xl">{openFaq === index ? "−" : "+"}</span>
                    </button>
                    {openFaq === index && <p className="px-5 pb-5 text-[#6C5962] leading-7">{faq.a}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#7A3F5E] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-[#EBC9A9] uppercase tracking-[0.25em] text-xs font-bold">Our Purpose</p>
            <h2 className="font-serif text-5xl md:text-7xl mt-4">Why HerSfar Exists</h2>
            <p className="mt-6 text-lg leading-9 text-[#F7E7DC]">Millions of women navigate this transition without information, community, or compassionate support. We built HerSfar to change that — for every woman, in every language.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["🤫", "The Silence Is the Problem", "Women suffer for years because no one told them what was happening. Families don’t discuss it. We break that silence."],
              ["🇮🇳", "Built for India First", "Most menopause resources are Western. HerSfar is rooted in Indian context — families, food, culture, and language."],
              ["💜", "No Woman Left Behind", "Housewife or CEO. Student or professional. HerSfar is designed to be accessible, respectful, and privacy-first."]
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-[2rem] bg-white/10 border border-white/15 p-7 backdrop-blur">
                <div className="text-4xl">{icon}</div>
                <h3 className="font-serif text-3xl mt-6 text-[#F4D9C7]">{title}</h3>
                <p className="mt-4 leading-8 text-[#F7E7DC]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-[#C4956A]/60 p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="font-serif italic text-3xl md:text-4xl text-[#EBC9A9] max-w-4xl">“Every woman deserves to walk this journey with knowledge, dignity, and someone who truly listens.”</p>
            <a href="#contact" className="px-7 py-4 rounded-full border border-[#EBC9A9] text-[#EBC9A9] font-semibold hover:bg-[#EBC9A9] hover:text-[#2C1B24] transition text-center">Join the Movement</a>
          </div>
        </div>
      </section>

      <section id="lavi" className="bg-[#FDF8F2] py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mx-auto max-w-[360px] rounded-[3rem] p-4 bg-[#2C1B24] shadow-2xl shadow-[#2C1B24]/25">
              <div className="rounded-[2.2rem] bg-white overflow-hidden min-h-[610px]">
                <div className="bg-[#7A3F5E] p-5 text-white">
                  <h3 className="font-serif text-3xl">Lavi</h3>
                  <p className="text-sm text-[#F4D9C7]">Your menopause companion</p>
                </div>
                <div className="p-5 space-y-4 text-sm leading-6">
                  <div className="bg-[#FDF8F2] rounded-3xl p-4">Namaste! I’m Lavi 🌸 I’m here for your menopause journey. What are you feeling today?</div>
                  <div className="bg-[#F1D8DD] rounded-3xl p-4 ml-8">I’ve been having hot flashes at night. Is this normal?</div>
                  <div className="bg-[#FDF8F2] rounded-3xl p-4">It can be common during this stage. I can explain general information and help you track patterns, but I can’t diagnose.</div>
                  <div className="bg-[#F1D8DD] rounded-3xl p-4 ml-8">मुझे हिंदी में बताओ</div>
                  <div className="bg-[#FDF8F2] rounded-3xl p-4">बिल्कुल. हम इसे simple Hindi-English में समझेंगे.</div>
                </div>
                <div className="mx-5 mt-2 rounded-full border border-[#E8D8CA] px-5 py-4 text-[#9B8C91]">Ask Lavi anything...</div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Your AI Companion</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">Meet Lavi — She Gets It.</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">Named with love. Designed with care. Available 24/7. Lavi supports menopause-related conversations while avoiding diagnosis or treatment advice.</p>

            <div className="mt-9 space-y-5">
              {[
                ["Answer Every Question", "Symptoms, timelines, body changes, emotions — ask without judgement."],
                ["Track Your Journey", "Log symptoms, moods, sleep, and energy so patterns become easier to understand."],
                ["Hindi & English Both", "Talk in whichever language feels comfortable. Lavi can switch between Hindi and English."],
                ["Doctor Prep", "Prepare symptom notes and questions before visiting a healthcare professional."]
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl bg-white border border-[#EAD9CC] p-6 shadow-sm">
                  <h3 className="font-serif text-3xl text-[#7A3F5E]">{title}</h3>
                  <p className="mt-3 text-[#6C5962] leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="bg-[#F6EDE5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Plans for Every Stage</p>
            <h2 className="font-serif text-5xl md:text-7xl mt-4">Start Free. Upgrade When You Need More.</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">HerSfar keeps basic menopause support accessible, while premium and corporate plans unlock deeper insights, expert sessions, and workplace wellness support.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative rounded-[2.2rem] p-8 border shadow-sm ${plan.dark ? "bg-[#7A3F5E] text-white border-[#7A3F5E] scale-[1.02] shadow-2xl" : "bg-white text-[#2C1B24] border-[#E8D8CA]"}`}>
                {plan.dark && <div className="absolute -top-4 left-8 px-4 py-2 rounded-full bg-[#C4956A] text-[#2C1B24] text-xs font-bold">Recommended</div>}
                <p className={`text-sm font-bold ${plan.dark ? "text-[#F3D8C2]" : "text-[#C4956A]"}`}>{plan.tag}</p>
                <h3 className="font-serif text-4xl mt-3">{plan.name}</h3>
                <p className="text-3xl font-semibold mt-5">{plan.price}</p>
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => <p key={feature}>✓ {feature}</p>)}
                </div>
                <button className={`mt-9 w-full py-4 rounded-full font-semibold ${plan.dark ? "bg-white text-[#7A3F5E]" : "border border-[#7A3F5E] text-[#7A3F5E]"}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="credibility" className="bg-[#FDF8F2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Trust & Credibility</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">Inspired by Global Menopause Platforms. Built for India.</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">Global menopause platforms prove that women need symptom tracking, expert education, habit support, and appointment preparation. HerSfar brings this category to India with Hindi-English support, cultural sensitivity, and Lavi AI.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <div className="rounded-[2.2rem] bg-white border border-[#E8D8CA] p-7 shadow-sm">
              <p className="text-[#C4956A] font-bold">Video Stories</p>
              <h3 className="font-serif text-3xl mt-3 text-[#7A3F5E]">Women Sharing Their Journey</h3>
              <div className="mt-6 aspect-video rounded-3xl bg-[#F6EDE5] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#7A3F5E] text-white flex items-center justify-center text-2xl">▶</div>
              </div>
              <p className="mt-5 text-[#6C5962] leading-7">Prototype area for user stories, doctor voices, HR leaders, and women’s wellness advocates.</p>
            </div>

            <div className="rounded-[2.2rem] bg-white border border-[#E8D8CA] p-7 shadow-sm">
              <p className="text-[#C4956A] font-bold">User Voices</p>
              <h3 className="font-serif text-3xl mt-3 text-[#7A3F5E]">Text Testimonials</h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-[#FDF8F2] p-5 text-[#6C5962] leading-7">“For the first time, I felt someone explained menopause in a language I understand.”</div>
                <div className="rounded-3xl bg-[#FDF8F2] p-5 text-[#6C5962] leading-7">“This can help HR teams talk about a topic nobody discusses openly.”</div>
              </div>
            </div>

            <div className="rounded-[2.2rem] bg-[#7A3F5E] text-white p-7 shadow-sm">
              <p className="text-[#EBC9A9] font-bold">Press & Recognition</p>
              <h3 className="font-serif text-3xl mt-3 text-[#F4D9C7]">Media-ready Movement</h3>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-white/20 p-4">Press Release</div>
                <div className="rounded-2xl border border-white/20 p-4">Founder Story</div>
                <div className="rounded-2xl border border-white/20 p-4">Doctor Advisory</div>
                <div className="rounded-2xl border border-white/20 p-4">Corporate Pilot</div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2.2rem] bg-white border border-[#E8D8CA] p-7 shadow-sm overflow-x-auto">
            <h3 className="font-serif text-4xl text-[#7A3F5E]">Global Category Benchmark</h3>
            <table className="mt-6 w-full text-left text-sm">
              <thead className="text-[#7A3F5E]">
                <tr className="border-b border-[#E8D8CA]">
                  <th className="py-4 pr-5">Platform</th>
                  <th className="py-4 pr-5">Known Strength</th>
                  <th className="py-4 pr-5">HerSfar Differentiation</th>
                </tr>
              </thead>
              <tbody className="text-[#6C5962]">
                <tr className="border-b border-[#F0E4DA]">
                  <td className="py-4 pr-5 font-semibold text-[#2C1B24]">Balance</td>
                  <td className="py-4 pr-5">Hormone health education, symptom tracking, and appointment preparation.</td>
                  <td className="py-4 pr-5">India-first menopause support with Hindi-English Lavi AI and cultural context.</td>
                </tr>
                <tr>
                  <td className="py-4 pr-5 font-semibold text-[#2C1B24]">Health & Her</td>
                  <td className="py-4 pr-5">Menopause tracker, expert content, guided exercises, and habit support.</td>
                  <td className="py-4 pr-5">Bilingual companion, corporate wellness dashboard, and Indian family/workplace sensitivity.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="organisations" className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">For Businesses</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">Invest in Her. Watch Her Thrive.</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">Women going through menopause represent a meaningful part of your workforce. HerSfar gives them private support while giving HR only anonymized, ethical wellness insights.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 gap-7">
            <div className="rounded-[2.2rem] p-8 bg-[#FDF8F2] border border-[#C4956A]/55">
              <p className="text-[#C4956A] font-bold">B2B — Corporate</p>
              <h3 className="font-serif text-4xl mt-3 text-[#7A3F5E]">Menopause-Inclusive Workplace</h3>
              <p className="mt-5 leading-8 text-[#6C5962]">Companies that support women through menopause can improve retention, productivity, and employer brand.</p>
              <div className="mt-7 space-y-3 text-[#4E3E45]">
                <p>→ Employee wellness program rollout</p>
                <p>→ Sensitivity training for managers</p>
                <p>→ Anonymous employee insights</p>
                <p>→ Expert-led workshops and reports</p>
              </div>
              <button className="mt-8 px-7 py-4 rounded-full bg-[#7A3F5E] text-white font-semibold">Book a Demo</button>
            </div>

            <div className="rounded-[2.2rem] p-8 bg-[#7A3F5E] text-white">
              <p className="text-[#EBC9A9] font-bold">Corporate Dashboard</p>
              <h3 className="font-serif text-4xl mt-3 text-[#F4D9C7]">Invite. Activate. Support. Measure.</h3>
              <div className="mt-7 space-y-4 text-[#F7E7DC]">
                <p>1. HR signs up and selects plan</p>
                <p>2. Adds women employees manually or via CSV</p>
                <p>3. Sends private app invite links</p>
                <p>4. Employees activate privately</p>
                <p>5. HR sees anonymized engagement and wellness trends</p>
              </div>
              <button className="mt-8 px-7 py-4 rounded-full border border-[#EBC9A9] text-[#EBC9A9] font-semibold">See Corporate Flow</button>
            </div>
          </div>
        </div>
      </section>

      <section id="safety" className="bg-[#F6EDE5] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Privacy & Safety</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">Built for trust from day one.</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">HerSfar handles sensitive women’s health conversations. That means privacy, consent, transparency, and clear AI boundaries must be visible across the product.</p>
          </div>

          <div className="grid gap-4">
            <div className="bg-white rounded-3xl p-5 border border-[#E8D8CA]">No diagnosis or prescription from Lavi</div>
            <div className="bg-white rounded-3xl p-5 border border-[#E8D8CA]">Consent-led onboarding and privacy notices</div>
            <div className="bg-white rounded-3xl p-5 border border-[#E8D8CA]">Delete my data option</div>
            <div className="bg-white rounded-3xl p-5 border border-[#E8D8CA]">Anonymous corporate insights only</div>
            <div className="bg-white rounded-3xl p-5 border border-[#E8D8CA]">Emergency and serious symptom escalation guidance</div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#FDF8F2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[#C4956A] uppercase tracking-[0.25em] text-xs font-bold">Get in Touch</p>
            <h2 className="font-serif text-5xl md:text-7xl leading-tight mt-4">Let’s Start a Conversation</h2>
            <p className="mt-6 text-lg leading-9 text-[#6C5962]">Whether you’re a woman with questions, a company exploring wellness, or a doctor who wants to collaborate — we’d love to hear from you.</p>
            <div className="mt-9 space-y-4 text-[#4E3E45]">
              <p>✉ Email: hello@hersfar.com</p>
              <p>📍 Location: Delhi NCR, India</p>
              <p>🌐 Languages: Hindi, English</p>
            </div>
          </div>

          <form className="bg-white rounded-[2.2rem] p-7 md:p-9 border border-[#E8D8CA] shadow-xl shadow-[#7A3F5E]/10 space-y-5">
            <input className="w-full rounded-2xl border border-[#E5D5C9] px-5 py-4 outline-none focus:border-[#7A3F5E]" placeholder="Your Name" />
            <input className="w-full rounded-2xl border border-[#E5D5C9] px-5 py-4 outline-none focus:border-[#7A3F5E]" placeholder="Email" />
            <select className="w-full rounded-2xl border border-[#E5D5C9] px-5 py-4 outline-none focus:border-[#7A3F5E] text-[#6C5962]">
              <option>I Am</option>
              <option>A Woman on the Journey</option>
              <option>Corporate HR</option>
              <option>Doctor Specialist</option>
              <option>Media / Press</option>
            </select>
            <textarea rows={5} className="w-full rounded-2xl border border-[#E5D5C9] px-5 py-4 outline-none focus:border-[#7A3F5E]" placeholder="Message" />
            <button type="button" className="w-full py-4 rounded-full bg-[#7A3F5E] text-white font-semibold shadow-lg shadow-[#7A3F5E]/20">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="bg-[#2C1B24] text-white py-14">
        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
          <div>
            <h3 className="font-serif text-4xl"><span>Her</span><span className="text-[#C4956A]">Sfar</span></h3>
            <p className="mt-5 text-[#EADFD9] leading-8 max-w-md">The journey no one talks about — talked about, supported, and celebrated. For every woman. In every language.</p>
          </div>
          <div><h4 className="font-bold mb-4 text-[#C4956A]">Platform</h4><p>About Menopause</p><p>Meet Lavi</p><p>Download App</p><p>Community</p></div>
          <div><h4 className="font-bold mb-4 text-[#C4956A]">For Organisations</h4><p>Corporate Wellness</p><p>Book Demo</p><p>Workshops</p></div>
          <div><h4 className="font-bold mb-4 text-[#C4956A]">Company</h4><p>Our Mission</p><p>Contact Us</p><p>Privacy Policy</p></div>
        </div>
        <div className="max-w-7xl mx-auto px-5 md:px-8 mt-12 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#BCAFB4]">
          <p>© 2025 HerSfar. All rights reserved.</p>
          <p>Made with ♥ in Delhi, for every woman in India</p>
        </div>
      </footer>
    </main>
  );
}
