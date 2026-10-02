import React from "react";
import { FiArrowUpLeft, FiStar } from "react-icons/fi";

// Paste real guest quotes here, e.g. { quote: "...", name: "מיכל", source: "Booking.com" }.
// While the list is empty the section shows only the links to the review sites.
const reviews = [];

const sources = [
  ["Booking.com", "https://www.booking.com/hotel/il/villa-rish.he.html#tab-reviews"],
  ["Weekend", "https://my.weekend.co.il/villa_rish/"],
];

export default function Reviews() {
  return (
    <section id="reviews" className="reviews-section" aria-labelledby="reviews-title">
      <div className="section-kicker">מה מספרים האורחים</div>
      <div className="section-heading">
        <h2 id="reviews-title">חוזרים הביתה עם זיכרונות.</h2>
        <span className="reviews-links">
          {sources.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer"><FiStar /> הביקורות ב-{label} <FiArrowUpLeft /></a>)}
        </span>
      </div>
      {reviews.length > 0 && (
        <div className="reviews-grid">
          {reviews.map(({ quote, name, source }) => (
            <figure className="review-card" key={name + quote.slice(0, 20)}>
              <blockquote>“{quote}”</blockquote>
              <figcaption>{name}<span>{source}</span></figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
