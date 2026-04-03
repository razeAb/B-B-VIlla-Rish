export const ADDED_IMAGES_KEY = "villa_rish_uploaded_images";
export const DELETED_IMAGES_KEY = "villa_rish_deleted_images";
export const IMAGES_UPDATED_EVENT = "villa_rish_images_updated";

export const readAddedImages = () => {
  try {
    const raw = localStorage.getItem(ADDED_IMAGES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const readDeletedImages = () => {
  try {
    const raw = localStorage.getItem(DELETED_IMAGES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const saveAddedImages = (images) => {
  localStorage.setItem(ADDED_IMAGES_KEY, JSON.stringify(images));
};

export const saveDeletedImages = (images) => {
  localStorage.setItem(DELETED_IMAGES_KEY, JSON.stringify(images));
};

export const notifyImagesUpdated = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(IMAGES_UPDATED_EVENT));
  }
};

export const buildCarouselSlides = (baseSlides, addedImages, deletedImages) => {
  const deletedSet = new Set(deletedImages);
  const base = baseSlides.filter((slide) => !deletedSet.has(slide.src));
  const added = addedImages.map((image) => ({
    src: image.dataUrl,
    name: image.name,
    id: image.id,
    uploaded: true,
  }));
  return [...added, ...base];
};
