import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FiArrowUpLeft, FiMapPin, FiGrid, FiShare2, FiUsers, FiHome, FiWifi, FiSun, FiCoffee, FiZap, FiCheck, FiPhone, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { TbPool, TbBath, TbBed, TbMassage } from "react-icons/tb";
import ImageManager from "./ImageManager";
import PhotoBrowser from "./PhotoBrowser";
import NearbyGuide from "./NearbyGuide";
import Reviews from "./Reviews";
import baseSlides from "./slidesData";
import { buildCarouselSlides, IMAGES_UPDATED_EVENT, readAddedImages, readDeletedImages } from "./imageStorage";
import "./App.css";
const amenities = [[TbPool, "בריכה פרטית מחוממת"], [TbBath, "ג׳קוזי וחמאם טורקי"], [TbBed, "4 חדרי שינה זוגיים"], [FiCoffee, "מטבח מאובזר"], [FiWifi, "Wi-Fi חופשי"], [FiZap, "טעינה לרכב חשמלי"], [FiSun, "גינה ופינת מנגל"], [FiHome, "ממ״ד צמוד"]];
const featured = ["/images/DSC_6815.jpg", "/images/img43.jpg", "/images/img22.jpg", "/images/DSC_6821.jpg", "/images/img1.jpg"];
function Home() {
  const [slides, setSlides] = useState(baseSlides);
  const [photo, setPhoto] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [guests, setGuests] = useState("2");
  const dialog = useRef(null);
  const today = new Date().toLocaleDateString("en-CA");
  useEffect(() => {
    const sync = () => setSlides(buildCarouselSlides(baseSlides, readAddedImages(), readDeletedImages()));
    sync();
    window.addEventListener(IMAGES_UPDATED_EVENT, sync);
    return () => window.removeEventListener(IMAGES_UPDATED_EVENT, sync);
  }, []);
  const photos = [...featured.map(src => slides.find(s => s.src === src)).filter(Boolean), ...slides.filter(s => !featured.includes(s.src))];
  const openGallery = (index = 0) => {
    setPhoto(index);
    dialog.current.showModal();
  };
  const shareUrl = window.location.origin + window.location.pathname;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setNotice("הקישור הועתק — אפשר לשלוח למי שבא איתכם");
    } catch {
      setNotice("בחרו את הקישור והעתיקו אותו כדי לשתף");
    }
  };
  const nativeShare = async () => {
    try {
      await navigator.share({ title: "וילה ריש & ספא", url: shareUrl });
    } catch (error) {
      if (error.name !== "AbortError") setNotice("אפשר לשתף בוואטסאפ או להעתיק את הקישור כאן");
    }
  };
  return <div className="villa-site" dir="rtl">
    <a className="skip-link" href="#about">דלגו לתוכן</a>
    <header className="site-header"><div className="nav-inner">
      <a className="wordmark" href="/" aria-label="Villa Rish — עמוד הבית"><img className="villa-mark" src="/images/logo-mark.png" alt="" /><span className="wordmark-text">VILLA RISH<small>אירוח מלכים</small></span></a>
      <nav aria-label="ניווט ראשי"><a className="active" href="#about">הווילה</a><a href="#amenities">מה מחכה לכם</a><a href="#experience">החוויה</a><a href="#nearby">בסביבה</a></nav>
    </div></header>
    <main className="page-shell">
      <section className="listing-heading"><div><h1>קצת רחוק מהשגרה.<br className="mobile-break" /> הכי קרוב לשלווה.</h1><div className="location-line"><FiMapPin /><span>וילה ריש & ספא · ירכא, הגליל המערבי</span><span className="location-divider">|</span><span className="private-label">כל המקום, רק שלכם</span></div></div>
        <div className="listing-actions"><button onClick={() => { setShareOpen(!shareOpen); setNotice(""); }} aria-expanded={shareOpen} aria-controls="share-panel"><FiShare2 /> שיתוף</button></div>
      </section>
      {shareOpen && <section id="share-panel" className="share-panel" aria-label="שיתוף הווילה">
        <div className="share-panel-heading"><strong>חופשות טובות מתחילות ביחד</strong><button type="button" onClick={() => setShareOpen(false)} aria-label="סגירת אפשרויות השיתוף"><FiX /></button></div>
        <label htmlFor="share-url">הקישור לווילה</label>
        <input id="share-url" readOnly value={shareUrl} dir="ltr" onFocus={e => e.target.select()} />
        <div className="share-options">
          <button type="button" onClick={copyLink}>העתקת קישור</button>
          <a href={`https://wa.me/?text=${encodeURIComponent("וילה ריש & ספא " + shareUrl)}`} target="_blank" rel="noreferrer">שיתוף בוואטסאפ <FiArrowUpLeft /></a>
          {typeof navigator.share === "function" && <button type="button" onClick={nativeShare}>אפשרויות נוספות</button>}
        </div>
      </section>}
      <p className="share-notice" role="status">{notice}</p>
      <section className="photo-hero" aria-label="תמונות הווילה">
        <div className="photo-grid">{photos.slice(0, 5).map((item, i) => <button className={`photo-tile tile-${i}`} key={item.src} onClick={() => openGallery(i)} aria-label={`פתיחת תמונה ${i + 1} בגלריה`}><img src={item.src} alt={["הבריכה הפרטית והמרפסת של וילה ריש", "סלון הווילה", "חדר שינה בווילה", "הג׳קוזי", "חזית הווילה"][i]} loading={i ? "lazy" : "eager"} fetchpriority={i ? undefined : "high"} /></button>)}</div>
        <div className="photo-tag"><span /> פינה פרטית בגליל</div>
        {photos.length > 0 && <button className="all-photos" onClick={() => openGallery()}><FiGrid /> לכל התמונות <span>({photos.length})</span></button>}
      </section>
      <div className="content-layout">
        <div className="property-content">
          <section id="about" className="intro-section"><div className="section-kicker">ברוכים הבאים לווילה ריש</div><h2>בית לחופשות שהופכות לזיכרונות.</h2><div className="property-facts"><span><FiUsers /> עד 18 אורחים</span><span><TbBed /> 4 חדרי שינה</span><span><TbPool /> בריכה פרטית</span></div><p>יש מקומות שמזמינים אתכם פשוט להוריד הילוך. בלב הגליל, בין נוף ירוק לאוויר צלול, מחכה לכם הווילה המשפחתית שלנו — עם אירוח דרוזי מכל הלב וכל מה שצריך כדי להרגיש בבית.</p><p>בוקר איטי ליד הבריכה, זמן לעצמכם בספא וערב ארוך עם האנשים שאתם אוהבים. כל הווילה לרשותכם, וכל רגע בקצב שלכם.</p>
          <div className="host-note"><div className="host-monogram">R</div><div><strong>אירוח משפחתי, עם מחשבה על כל פרט</strong><span>אנחנו כאן בשבילכם, לפני החופשה ובמהלכה · שירות אישי 24/7</span></div></div></section>
          <section id="amenities" className="amenities-section"><div className="section-kicker">נוחות בלי פשרות</div><h2>כל מה שצריך. ועוד קצת.</h2><div className="amenities-grid">{amenities.map(([Icon, label]) => <div key={label}><Icon /><span>{label}</span></div>)}</div></section>
        </div>
        <aside id="booking" className="booking-card"><div className="booking-kicker"><span className="status-dot" /> החופשה הבאה שלכם מתחילה כאן</div><h2>נפגשים בגליל?</h2><p>בחרו תאריכים, ואת השאר נשמח לתכנן יחד.</p><form action="https://wa.me/972506290202" method="get" target="_blank" onSubmit={e => {
            if (departure <= arrival) {
              e.preventDefault();
              setNotice("בחרו תאריך עזיבה מאוחר מתאריך ההגעה");
            }
          }}>
          <div className="date-fields"><label>תאריך הגעה<input aria-label="תאריך הגעה" type="date" min={today} required value={arrival} onChange={e => {
                  setArrival(e.target.value);
                  if (departure <= e.target.value) setDeparture("");
                }} /></label><label>תאריך עזיבה<input aria-label="תאריך עזיבה" type="date" required min={arrival ? new Date(new Date(arrival).getTime() + 86400000).toISOString().slice(0, 10) : today} value={departure} onChange={e => setDeparture(e.target.value)} /></label></div>
          <label className="guest-field">אורחים<select value={guests} onChange={e => setGuests(e.target.value)} aria-label="מספר אורחים">{Array.from({
                  length: 18
                }, (_, i) => <option value={i + 1} key={i}>{i + 1} {i === 0 ? "אורח" : "אורחים"}</option>)}</select></label>
          <input type="hidden" name="text" value={`שלום, נשמח לבדוק זמינות בווילה ריש מתאריך ${arrival} עד ${departure}, עבור ${guests} אורחים.`} />
          <button className="primary-button" type="submit">בואו נתכנן חופשה <FiArrowUpLeft /></button>
        </form><span className="booking-help">בדיקת זמינות בוואטסאפ · ללא התחייבות</span><div className="booking-divider" /><a className="phone-link" href="tel:+972506290202"><FiPhone /> <bdi>050-629-0202</bdi><span>נדבר?</span></a><div className="booking-bottom"><FiCheck /> הווילה כולה לרשותכם, בפרטיות מלאה</div></aside>
      </div>
      <section id="experience" className="experience-section"><div className="section-kicker">פשוט להיות כאן</div><div className="section-heading"><h2>לכל רגע, המקום שלו.</h2><span>פחות תוכניות. יותר רגעים יחד.</span></div><div className="experience-grid">{[["/images/DSC_6810.jpg", TbPool, "להתחיל את היום במים", "בריכה פרטית ומחוממת, בכל עונות השנה."], ["/images/DSC_6823.jpg", TbMassage, "לתת לשגרה לחכות", "חמאם טורקי, ג׳קוזי ותפריט עיסויים אישי."], ["/images/img42.jpg", FiSun, "להישאר עוד קצת בחוץ", "קפה בגינה, ארוחה יחד והאוויר של הגליל."]].map(([src, Icon, title, desc]) => <article className="experience-card" key={src}><div className="experience-image"><img src={src} alt={title} loading="lazy" /><span><Icon /></span></div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>
      <Reviews />
      <NearbyGuide />
      <section id="location" className="location-section"><div className="location-map"><iframe title="מפה — וילה ריש, ירכא" src="https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s32.960784,35.218707!6i14!3m1!1siw!5m1!1siw" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div><div><div className="section-kicker">המקום שבו נפגשים</div><h2>הלב של הגליל. הקצב שלכם.</h2><p>בכפר ירכא מחכים לכם אירוח דרוזי חם, טעמים מקומיים ונקודת מוצא לטיולים בגליל המערבי.</p><a href="https://www.google.com/maps/dir/?api=1&destination=32.960784,35.218707" target="_blank" rel="noreferrer">איך מגיעים אלינו <FiArrowUpLeft /></a></div></section>
    </main>
    <footer className="site-footer"><div><a href="/" className="wordmark"><img className="villa-logo" src="/images/logo-on-dark.png" alt="Villa Rish — וילה ריש" /></a><p>מקום להאט. מקום להיות יחד.</p></div><div className="footer-links"><a href="https://www.booking.com/hotel/il/villa-rish.he.html" target="_blank" rel="noreferrer">Booking.com</a><a href="https://my.weekend.co.il/villa_rish/" target="_blank" rel="noreferrer">Weekend</a><a href="https://www.instagram.com/villarish" target="_blank" rel="noreferrer">Instagram</a><a href="tel:+972506223153">050-622-3153</a></div><small>© {new Date().getFullYear()} Villa Rish & Spa · ירכא, הגליל המערבי</small></footer>
    <div className="mobile-book"><span>החופשה שלכם בגליל<small>וילה פרטית · עד 18 אורחים</small></span><a href="#booking">בדיקת זמינות <FiArrowUpLeft /></a></div>
    <dialog ref={dialog} className="gallery-dialog" onClick={e => {
      if (e.target === dialog.current) dialog.current.close();
    }} onKeyDown={e => {
      if (e.key === "ArrowLeft") setPhoto((photo + 1) % photos.length);
      if (e.key === "ArrowRight") setPhoto((photo - 1 + photos.length) % photos.length);
    }}><div className="gallery-toolbar"><span>וילה ריש · {photo + 1} / {photos.length}</span><button aria-label="סגירת הגלריה" onClick={() => dialog.current.close()}><FiX /></button></div>{photos.length > 0 && <img src={photos[photo % photos.length].src} alt={`וילה ריש — תמונה ${photo + 1}`} />}<div className="gallery-controls"><button aria-label="התמונה הקודמת" onClick={() => setPhoto((photo - 1 + photos.length) % photos.length)}><FiChevronRight /></button><button aria-label="התמונה הבאה" onClick={() => setPhoto((photo + 1) % photos.length)}><FiChevronLeft /></button></div></dialog>
  </div>;
}
function App() {
  return <Router><Routes><Route path="/" element={<Home />} /><Route path="/manage-images" element={<ImageManager />} /><Route path="/photo-browser" element={<PhotoBrowser />} /></Routes></Router>;
}
export default App;
