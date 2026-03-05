import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { warehouses } from "../data/warehouses";
import WarehouseCard from "../components/WarehouseCard";
import "./Warehouses.css";

const SORT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area-asc", label: "Area: Small to Large" },
  { value: "area-desc", label: "Area: Large to Small" },
];

export default function Warehouses() {
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = [...warehouses];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.location.toLowerCase().includes(q)
      );
    }

    if (sort === "price-asc") {
      list.sort((a, b) => {
        const pa = a.priceUnit === "month" ? a.price : a.price * a.area;
        const pb = b.priceUnit === "month" ? b.price : b.price * b.area;
        return pa - pb;
      });
    } else if (sort === "price-desc") {
      list.sort((a, b) => {
        const pa = a.priceUnit === "month" ? a.price : a.price * a.area;
        const pb = b.priceUnit === "month" ? b.price : b.price * b.area;
        return pb - pa;
      });
    } else if (sort === "area-asc") {
      list.sort((a, b) => a.area - b.area);
    } else if (sort === "area-desc") {
      list.sort((a, b) => b.area - a.area);
    }

    return list;
  }, [sort, search]);

  return (
    <main className="warehouses-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg" />
        <div className="page-header__container">
          <motion.span
            className="page-header__pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            All Properties
          </motion.span>
          <motion.h1
            className="page-header__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Browse Warehouses
          </motion.h1>
          <motion.p
            className="page-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {warehouses.length} premium industrial spaces available across Ghaziabad and Hapur
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="filters-bar">
        <div className="filters-bar__container">
          <div className="filters-bar__search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filters-bar__input"
            />
          </div>

          <div className="filters-bar__controls">
            <select
              className="filters-bar__sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="warehouses-grid-section">
        <div className="warehouses-grid-section__container">
          {filtered.length === 0 ? (
            <div className="warehouses-empty">
              <div className="warehouses-empty__icon">🔍</div>
              <h3>No warehouses found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <p className="warehouses-count">
                Showing <strong>{filtered.length}</strong> warehouse{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="warehouses-grid">
                {filtered.map((w, i) => (
                  <WarehouseCard key={w.id} warehouse={w} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
