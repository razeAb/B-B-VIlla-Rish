import React, { useState } from "react";
import { FiArrowUpLeft, FiCompass, FiCoffee, FiShoppingBag, FiPhone } from "react-icons/fi";
import { nearbyPlaces } from "./nearbyPlaces";

const categories = [
  { id: "activities", label: "לטייל ולבלות", Icon: FiCompass },
  { id: "shops", label: "חנויות וקניות", Icon: FiShoppingBag },
  { id: "food", label: "לאכול ולשתות", Icon: FiCoffee },
];

function PlaceCard({ place, Icon }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <article className="nearby-card">
      <div className="nearby-image">
        {imageFailed ? (
          <div className="nearby-image-fallback" role="img" aria-label={place.title}><Icon /></div>
        ) : (
          <img src={place.image} alt={place.title} loading="lazy" onError={() => setImageFailed(true)} />
        )}
        <span className="nearby-category-icon"><Icon /></span>
      </div>
      <div className="nearby-card-body">
        <h3>{place.title}</h3>
        <p>{place.description}</p>
        <div className="nearby-card-links">
          <a href={place.wazeLink} target="_blank" rel="noreferrer" aria-label={`ניווט אל ${place.title} ב-Waze`}>ניווט ב-Waze <FiArrowUpLeft /></a>
          {place.phone && <a href={`tel:${place.phone}`} aria-label={`טלפון אל ${place.title}`}><FiPhone /> להתקשר</a>}
        </div>
      </div>
    </article>
  );
}

export default function NearbyGuide() {
  const [category, setCategory] = useState("activities");
  const selected = categories.find(item => item.id === category);
  const places = nearbyPlaces.filter(place => place.category === category);
  return (
    <section id="nearby" className="nearby-section" aria-labelledby="nearby-title">
      <div className="section-kicker">יוצאים לגלות</div>
      <div className="section-heading">
        <h2 id="nearby-title">גם מסביב, יש הרבה לאהוב.</h2>
        <span>טיולים, טעמים וקניות בירכא ובסביבה</span>
      </div>
      <div className="nearby-filters" role="group" aria-label="סוגי מקומות בסביבה">
        {categories.map(({ id, label, Icon }) => (
          <button key={id} type="button" aria-pressed={category === id} onClick={() => setCategory(id)}>
            <Icon /> {label}<span>{nearbyPlaces.filter(place => place.category === id).length}</span>
          </button>
        ))}
      </div>
      <p className="nearby-count" aria-live="polite">{places.length} מקומות · {selected.label}</p>
      <div className="nearby-grid">
        {places.map(place => <PlaceCard key={place.id} place={place} Icon={selected.Icon} />)}
      </div>
    </section>
  );
}
