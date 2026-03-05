import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { warehouses } from "../data/warehouses";
import WarehouseCard from "../components/WarehouseCard";
import "./Home.css";

const stats = [
  { value: "120+", label: "Warehouses Listed" },
  { value: "85+", label: "Happy Clients" },
  { value: "4.2M", label: "Sq.ft Managed" },
  { value: "8+", label: "Cities Covered" },
];

const whyUs = [
  {
    icon: "🏭",
    title: "Premium Locations",
    desc: "All properties are in prime industrial zones with excellent connectivity to highways, ports, and rail.",
  },
  {
    icon: "📋",
    title: "Transparent Listings",
    desc: "Detailed specs, verified photos, and clear pricing. No hidden costs, no surprises.",
  },
  {
    icon: "⚡",
    title: "Fast Processing",
    desc: "From inquiry to agreement in as little as 72 hours. Our team moves at the speed of your business.",
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    desc: "All warehouses carry valid fire NOC, structural certificates, and municipal approvals.",
  },
];

export default function Home() {
  const featured = warehouses.slice(0, 3);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__container">
          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="hero__pill">Industrial Real Estate Platform</span>
            <h1 className="hero__title">
              Find the Perfect
              <br />
              <span className="hero__title-accent">Warehouse Space</span>
              <br />
              for Your Business
            </h1>
            <p className="hero__subtitle">
              Discover premium warehouses available on rent across Ghaziabad and Hapur's top industrial corridors. Verified listings, transparent pricing.
            </p>
            <div className="hero__actions">
              <Link to="/warehouses" className="hero__btn hero__btn--primary">
                Browse Warehouses
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="hero__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900"
                alt="Modern warehouse"
                className="hero__image"
              />
              <div className="hero__image-overlay" />
              <div className="hero__floating-card hero__floating-card--1">
                <div className="hero__floating-icon">📦</div>
                <div>
                  <div className="hero__floating-value">50,000 sq.ft</div>
                  <div className="hero__floating-label">Avg. Warehouse Size</div>
                </div>
              </div>
              <div className="hero__floating-card hero__floating-card--2">
                <div className="hero__floating-icon">✅</div>
                <div>
                  <div className="hero__floating-value">Verified</div>
                  <div className="hero__floating-label">All Listings</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Featured Warehouses */}
      <section className="section featured">
        <div className="section__container">
          <div className="section__header">
            <motion.span
              className="section__pill"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Top Picks
            </motion.span>
            <motion.h2
              className="section__title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Featured Warehouses
            </motion.h2>
            <motion.p
              className="section__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Handpicked premium spaces across Ghaziabad and Hapur's best industrial zones
            </motion.p>
          </div>

          <div className="featured__grid">
            {featured.map((w, i) => (
              <WarehouseCard key={w.id} warehouse={w} index={i} />
            ))}
          </div>

          <motion.div
            className="featured__cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/warehouses" className="btn-outline">
              View All Warehouses
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why">
        <div className="section__container">
          <div className="section__header">
            <motion.span className="section__pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Why WareSpace
            </motion.span>
            <motion.h2 className="section__title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              The Smarter Way to Find Warehouse Space
            </motion.h2>
          </div>
          <div className="why__grid">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="why__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="why__icon">{item.icon}</div>
                <h3 className="why__title">{item.title}</h3>
                <p className="why__desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-banner__container">
          <motion.div
            className="cta-banner__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="cta-banner__title">Looking for a Warehouse?</h2>
            <p className="cta-banner__text">
              Get in touch with our team and we'll help you find the right space for your business needs — fast and hassle-free.
            </p>
            <Link to="/contact" className="hero__btn hero__btn--primary">
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
