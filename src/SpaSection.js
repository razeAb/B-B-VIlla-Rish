import React from "react";
import { FiArrowUpLeft, FiInstagram } from "react-icons/fi";

const SPA_URL = "https://sparish.netlify.app/";
const photos = [["/images/spa/spa1.jpg", "החמאם הטורקי של ספא ריש, עם קשתות אריחים כחולים"], ["/images/spa/spa2.jpg", "טקס מים בחמאם"], ["/images/spa/spa3.jpg", "ג׳קוזי וסאונה יבשה"], ["/images/spa/spa4.jpg", "עיסוי בחדר הטיפולים"], ["/images/spa/spa5.jpg", "פינת מנוחה עם כיבוד, בחלוקי ספא"]];
const packages = [["ענני קצף", "חבילה זוגית · שעתיים", "חמאם, סאונה, ג׳קוזי ועיסוי זוגי של 45 דקות", "₪1,180", "לזוג"], ["מגע המשי", "חבילה זוגית · 3 שעות", "מתחם פרטי לגמרי, עיסוי של 50 דקות וכיבוד עשיר", "₪1,550", "לזוג"], ["רגעי BFF", "ספא פרטי לחברות · מ־3 משתתפות", "חמאם, סאונה, ג׳קוזי ועיסוי של 45 דקות", "₪400", "למשתתפת"]];

export default function SpaSection() {
  return <section id="spa" className="spa-section" aria-labelledby="spa-title">
    <div className="spa-intro">
      <div>
        <div className="section-kicker">ספא ריש · צמוד לווילה</div>
        <h2 id="spa-title">חמאם טורקי, רק בשבילכם.</h2>
      </div>
      <p>אבן חמה, אדים ואריחים כחולים. מתחם ספא פרטי עם חמאם, סאונה, ג׳קוזי ועיסויים, ממש כמה צעדים מהחדר שלכם.</p>
    </div>
    <div className="spa-mosaic">{photos.map(([src, alt], i) => <figure className={`spa-tile spa-tile-${i}`} key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}</div>
    <div className="spa-packages">{packages.map(([name, type, desc, price, unit]) => <article className="spa-package" key={name}>
      <span className="spa-package-type">{type}</span>
      <h3>{name}</h3>
      <p>{desc}</p>
      <div className="spa-price"><strong>{price}</strong> {unit}</div>
    </article>)}</div>
    <div className="spa-cta">
      <div className="spa-perk"><strong>10%</strong><span>הנחה לאורחי הווילה<small>תוספת סוף שבוע וחג ₪50 · מגיל 18</small></span></div>
      <div className="spa-cta-links">
        <a className="spa-button" href={SPA_URL} target="_blank" rel="noreferrer">להזמנת ספא <FiArrowUpLeft /></a>
        <a className="spa-secondary" href="https://www.instagram.com/sparish__" target="_blank" rel="noreferrer"><FiInstagram /> <bdi dir="ltr">@sparish__</bdi></a>
      </div>
    </div>
  </section>;
}
