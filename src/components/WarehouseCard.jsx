import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./WarehouseCard.css";

export default function WarehouseCard({ warehouse, index = 0 }) {
  const formatPrice = (w) => {
    if (w.priceDisplay) return w.priceDisplay;
    if (w.priceUnit === "month") {
      return `₹${w.price.toLocaleString("en-IN")}/mo`;
    }
    return `₹${w.price}/sq.ft/mo`;
  };

  return (
    <motion.div
      className="wcard"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="wcard__image-wrap">
        <img src={warehouse.images[0]} alt={warehouse.name} className="wcard__image" loading="lazy" />
        <div className="wcard__overlay" />
        {warehouse.type === "rent" && (
          <span className="wcard__badge wcard__badge--rent">For Rent</span>
        )}
        {warehouse.badge && (
          <span className="wcard__tag">{warehouse.badge}</span>
        )}
      </div>

      <div className="wcard__body">
        <h3 className="wcard__name">{warehouse.name}</h3>
        <p className="wcard__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {warehouse.location}
        </p>

        <div className="wcard__specs">
          <div className="wcard__spec">
            <span className="wcard__spec-label">Area</span>
            <span className="wcard__spec-value">{warehouse.area.toLocaleString("en-IN")} sq.ft</span>
          </div>
          <div className="wcard__spec">
            <span className="wcard__spec-label">Height</span>
            <span className="wcard__spec-value">{warehouse.ceilingHeight} ft</span>
          </div>
          <div className="wcard__spec">
            <span className="wcard__spec-label">Docks</span>
            <span className="wcard__spec-value">{warehouse.loadingDocks}</span>
          </div>
        </div>

        <div className="wcard__footer">
          <div className="wcard__price">
            <span className="wcard__price-label">Starting at</span>
            <span className="wcard__price-value">{formatPrice(warehouse)}</span>
          </div>
          <Link to={`/warehouses/${warehouse.id}`} className="wcard__btn">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
