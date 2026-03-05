import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { warehouses } from "../data/warehouses";
import "./WarehouseDetail.css";

export default function WarehouseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const warehouse = warehouses.find((w) => w.id === parseInt(id));
  const [activeImg, setActiveImg] = useState(0);

  if (!warehouse) {
    return (
      <div className="detail-notfound">
        <h2>Warehouse not found</h2>
        <Link to="/warehouses">Back to listings</Link>
      </div>
    );
  }

  const formatPrice = (w) => {
    if (w.priceDisplay) return w.priceDisplay;
    return w.priceUnit === "month"
      ? `₹${w.price.toLocaleString("en-IN")} / month`
      : `₹${w.price} / sq.ft / month`;
  };

  const specs = [
    { label: "Total Area", value: `${warehouse.area.toLocaleString("en-IN")} sq.ft`, icon: "📐" },
    { label: "Ceiling Height", value: `${warehouse.ceilingHeight} ft`, icon: "↕️" },
    { label: "Loading Docks", value: warehouse.loadingDocks, icon: "🚚" },
    { label: "Power Supply", value: warehouse.power, icon: "⚡" },
    { label: "Docks Height", value: warehouse.docksHeight, icon: "🏗️" },
    { label: "Security", value: warehouse.security, icon: "🔒" },
    { label: "Parking", value: warehouse.parking, icon: "🅿️" },
    { label: "Available From", value: warehouse.availableFrom, icon: "📅" },
  ];

  const related = warehouses.filter((w) => w.id !== warehouse.id).slice(0, 3);

  return (
    <main className="detail-page">
      {/* Back */}
      <div className="detail-back">
        <div className="detail-back__container">
          <button onClick={() => navigate(-1)} className="detail-back__btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Listings
          </button>
        </div>
      </div>

      <div className="detail-container">
        {/* Gallery */}
        <motion.div
          className="detail-gallery"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="detail-gallery__main">
            <img
              src={warehouse.images[activeImg]}
              alt={warehouse.name}
              className="detail-gallery__main-img"
            />
            <div className="detail-gallery__badges">
              <span className="detail-badge detail-badge--rent">For Rent</span>
              {warehouse.badge && (
                <span className="detail-badge detail-badge--tag">{warehouse.badge}</span>
              )}
            </div>
          </div>
          <div className="detail-gallery__thumbs">
            {warehouse.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`detail-gallery__thumb ${activeImg === i ? "detail-gallery__thumb--active" : ""}`}
              >
                <img src={img} alt={`View ${i + 1}`} />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="detail-content">
          {/* Left col */}
          <motion.div
            className="detail-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="detail-info__header">
              <h1 className="detail-info__name">{warehouse.name}</h1>
              <p className="detail-info__location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {warehouse.location}
              </p>
            </div>

            <div className="detail-info__price-wrap">
              <div>
                <div className="detail-info__price-label">Asking Price</div>
                <div className="detail-info__price">{formatPrice(warehouse)}</div>
              </div>
              <Link to="/contact" className="detail-info__enquire">
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="detail-info__desc">
              <h3>About this Property</h3>
              <p>{warehouse.description}</p>
            </div>

            {/* Features */}
            <div className="detail-info__features">
              <h3>Key Features</h3>
              <div className="detail-features-grid">
                {warehouse.features.map((f) => (
                  <div key={f} className="detail-feature-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right col — Specs */}
          <motion.div
            className="detail-specs"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="detail-specs__card">
              <h3 className="detail-specs__title">Property Specifications</h3>
              <div className="detail-specs__grid">
                {specs.map((s) => (
                  <div key={s.label} className="detail-spec-item">
                    <span className="detail-spec-icon">{s.icon}</span>
                    <div>
                      <div className="detail-spec-label">{s.label}</div>
                      <div className="detail-spec-value">{s.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-contact-card">
              <h3>Interested in this Property?</h3>
              <p>Fill out a quick enquiry form and our team will reach out within 24 hours.</p>
              <Link to={`/contact?warehouse=${encodeURIComponent(warehouse.name)}`} className="detail-contact-btn">
                Send Enquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <div className="detail-contact-card__divider">or call us directly</div>
              <a href="tel:+919760470337" className="detail-contact-card__phone">
                +91 97604 70337
              </a>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        <section className="detail-related">
          <h2 className="detail-related__title">You May Also Like</h2>
          <div className="detail-related__grid">
            {related.map((w, i) => (
              <motion.div
                key={w.id}
                className="detail-related-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/warehouses/${w.id}`} className="detail-related-card__link">
                  <img src={w.images[0]} alt={w.name} />
                  <div className="detail-related-card__body">
                    <span className="detail-badge detail-badge--rent">For Rent</span>
                    <h4>{w.name}</h4>
                    <p>{w.location}</p>
                    <span className="detail-related-card__area">{w.area.toLocaleString("en-IN")} sq.ft</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
