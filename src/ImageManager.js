import React, { useEffect, useMemo, useState } from "react";
import Header from "./Header";

const STORAGE_KEY = "villa_rish_uploaded_images";

const readStoredImages = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const ImageManager = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(readStoredImages());
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  }, [images]);

  const totalCount = useMemo(() => images.length, [images.length]);

  const handleUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;

    const uploads = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>
              resolve({
                id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                name: file.name,
                dataUrl: reader.result,
              });
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
      )
    );

    setImages((prev) => [...uploads, ...prev]);
    event.target.value = "";
  };

  const handleDelete = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Image Manager</h1>
            <p className="text-gray-600 mt-1">Upload, view, and delete images.</p>
          </div>
          <label className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition">
            <span>Upload Images</span>
            <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
          </label>
        </div>

        <div className="mt-6 text-sm text-gray-600">
          Total images: <span className="font-semibold">{totalCount}</span>
        </div>

        {images.length === 0 ? (
          <div className="mt-8 border border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
            No images yet. Use the upload button to add some.
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => (
              <div key={image.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-gray-50">
                  <img src={image.dataUrl} alt={image.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <div className="text-sm text-gray-700 truncate">{image.name}</div>
                  <button
                    type="button"
                    onClick={() => handleDelete(image.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ImageManager;
