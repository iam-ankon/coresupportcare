import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Home, Car, Clock3, HeartHandshake } from "lucide-react";
import { PageHero, Reveal, tiltHandlers, FeatureTabs } from "../components/ui.jsx";
import { IMG, SIL_FEATURE_TABS } from "../data.js";
import { useSEO } from "../hooks/useSEO.js";

const SIL_SERVICES = [
  { icon: Home, title: "Accommodation", desc: "We have a range of homes available across Sydney, matched to your needs and preferences." },
  { icon: Car, title: "Accessible Transport", desc: "Access everything you need within your community with our fleet of accessible vehicles." },
  { icon: Clock3, title: "24/7 Supports", desc: "Support from our reliable and trained Core Care team, day and night." },
];

const SIL_SUPPORT_LIST = [
  { label: "Daily Living Assistance", desc: "Support with everyday routines and activities at home." },
  { label: "Personal Care", desc: "Assistance with showering, dressing, grooming and personal hygiene." },
  { label: "Meal Preparation", desc: "Help with preparing meals and developing healthy eating routines." },
  { label: "Household Tasks", desc: "Assistance with cleaning, laundry, tidying and maintaining a comfortable home." },
  { label: "Medication Assistance", desc: "Support with medication routines in accordance with individual plans and applicable requirements." },
  { label: "Community Participation", desc: "Assistance to access community activities, appointments, shopping and social outings." },
  { label: "Building Independence", desc: "Encouraging daily living skills, confidence, decision-making and greater independence." },
  { label: "24/7 Support Arrangements", desc: "Assistance with accessing appropriate support throughout the day and overnight, where required and funded." },
];

export default function GroupHomeSIL() {
  useSEO({
    title: "Group Homes — Supported Independent Living (SIL)",
    description: "Fabulous Supported Independent Living (SIL) group homes across Sydney with 24/7 tailored supports, accessible transport and a home that's genuinely yours.",
    path: "/group-home-sil",
  });

  return (
    <>
      <PageHero
        eyebrow="Supported Independent Living"
        title="Fabulous Group Homes (SIL)"
        img={IMG.silRoom}
        color="var(--pink)"
        sticker={{ color: "purple", icon: Home, label: "Great Locations!" }}
      >
        <p>Experience the Core Lifestyle with 24/7 tailored supports, in a home that's genuinely yours.</p>
      </PageHero>

      <section className="cdc-section" style={{ paddingBottom: 0 }}>
        <div className="cdc-shell" style={{ maxWidth: 860, display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>Supported Independent Living (SIL) is an NDIS-funded support that helps people with disabilities who require assistance with everyday tasks to live as independently as possible.</p>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>SIL can involve shared living arrangements or support within a participant's own home, depending on their individual needs and circumstances.</p>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>At Core Support Care, we provide personalised support to help participants feel safe, comfortable and confident in their homes.</p>
          <h2 style={{ fontFamily: "'Baloo 2', sans-serif", color: "var(--navy)", fontSize: "1.3rem", marginTop: ".5rem" }}>What Support Can We Provide?</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: "1.05rem" }}>Our SIL support services may include:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".8rem", listStyle: "none", padding: 0 }}>
            {SIL_SUPPORT_LIST.map((s) => (
              <li key={s.label} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", color: "var(--ink-soft)" }}>
                <HeartHandshake size={18} color="var(--purple)" style={{ flex: "none", marginTop: "2px" }} />
                <span><strong style={{ color: "var(--navy)" }}>{s.label}:</strong> {s.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Core Home Features</span>
            <h2>Take a look around</h2>
            <p>Every Core home is different, but here's what you can expect from rooms to routines.</p>
          </Reveal>
          <FeatureTabs tabs={SIL_FEATURE_TABS} />
        </div>
      </section>

      <section className="cdc-section">
        <div className="cdc-shell">
          <Reveal className="cdc-section-head">
            <span className="cdc-script">Core Services Available in SIL</span>
            <h2>Everything included in your plan</h2>
          </Reveal>
          <div className="cdc-feature-grid">
            {SIL_SERVICES.map((s) => (
              <Reveal as="div" className="cdc-feature-card" key={s.title} {...tiltHandlers(5)}>
                <s.icon size={26} color="var(--pink)" style={{ marginBottom: ".8rem" }} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cdc-section" style={{ paddingTop: 0 }}>
        <div className="cdc-shell">
          <Reveal className="cdc-cta-card">
            <p>Ready to move in? Your SIL journey starts here.</p>
            <Link to="/contact" className="cdc-btn cdc-btn-pink">Contact Us <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
