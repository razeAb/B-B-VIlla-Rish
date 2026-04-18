import React, { useMemo, useState } from "react";
import Header from "./Header";
import imageManifest from "./imageManifest";

const formatBytes = (bytes) => {
  if (!Number.isFinite(bytes)) return "";
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
};

const PhotoBrowser = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return imageManifest;
    return imageManifest.filter((item) => item.fileName.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-6 py-10">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Photo Browser</h1>
            <p className="text-gray-600 mt-1">View each photo with its exact file name.</p>
          </div>
          <div className="w-full md:w-96">
            <label className="block text-sm text-gray-700 mb-1" htmlFor="photo-search">
              Search by filename
            </label>
            <input
              id="photo-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. img8 or DSC_6810"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Showing <span className="font-semibold">{filtered.length}</span> of{" "}
          <span className="font-semibold">{imageManifest.length}</span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div key={item.fileName} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-gray-50">
                <img src={item.src} alt={item.fileName} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="px-4 py-3">
                <div className="text-sm font-medium text-gray-900 break-all">{item.fileName}</div>
                <div className="mt-1 text-xs text-gray-600">{formatBytes(item.bytes)}</div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(item.fileName)}
                    className="text-xs bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition"
                  >
                    Copy name
                  </button>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(item.src)}
                    className="text-xs border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50 transition"
                  >
                    Copy path
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PhotoBrowser;

