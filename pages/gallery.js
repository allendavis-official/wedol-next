import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAllMedia, categories, videos } from "../data/media"; // Updated import

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const [videoPlayer, setVideoPlayer] = useState(null);

  // Get all media items
  const allMedia = getAllMedia();

  // Filter by type (all/photos/videos)
  let filteredItems = allMedia.filter((item) => {
    if (filter === "all") return true;
    if (filter === "photos") return item.type === "photo";
    if (filter === "videos") return item.type === "video";
    return true;
  });

  // Filter by category
  if (categoryFilter !== "all") {
    filteredItems = filteredItems.filter(
      (item) => item.category === categories[categoryFilter]
    );
  }

  // Close lightbox on escape key
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setLightbox(null);
      setVideoPlayer(null);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-emerald-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
              Media Gallery
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Our Stories in Pictures & Videos
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl">
              Explore moments from our programs, events, and the lives we touch
              across Liberia. {allMedia.length} items in total.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Type Filter */}
            <div className="flex gap-6 py-4 border-b border-gray-100">
              <button
                onClick={() => setFilter("all")}
                className={`pb-2 font-semibold border-b-2 transition-colors ${
                  filter === "all"
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                All Media ({allMedia.length})
              </button>
              <button
                onClick={() => setFilter("photos")}
                className={`pb-2 font-semibold border-b-2 transition-colors ${
                  filter === "photos"
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Photos ({allMedia.filter((m) => m.type === "photo").length})
              </button>
              <button
                onClick={() => setFilter("videos")}
                className={`pb-2 font-semibold border-b-2 transition-colors ${
                  filter === "videos"
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                Videos ({videos.length})
              </button>
            </div>

            {/* Category Filter - Only show for photos */}
            {filter !== "videos" && (
              <div className="flex gap-3 py-3 overflow-x-auto">
                <button
                  onClick={() => setCategoryFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    categoryFilter === "all"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All Categories
                </button>
                {Object.keys(categories).map((key) => (
                  <button
                    key={key}
                    onClick={() => setCategoryFilter(key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                      categoryFilter === key
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {categories[key]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-lg overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-square"
                onClick={() => {
                  if (item.type === "photo") {
                    setLightbox(item);
                  } else {
                    setVideoPlayer(item);
                  }
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />

                  {/* Video Play Button Overlay */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="h-6 w-6 text-emerald-600 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Category */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-xs font-semibold text-white">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600">
                No media items found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Photo Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={lightbox.src}
                alt={lightbox.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-sm text-emerald-400">{lightbox.category}</p>
              <h3 className="text-xl font-semibold mt-1">{lightbox.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {videoPlayer && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setVideoPlayer(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={() => setVideoPlayer(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              controls
              autoPlay
              className="w-full rounded-lg"
              src={videoPlayer.src}
            >
              Your browser does not support the video tag.
            </video>
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold">{videoPlayer.title}</h3>
              <p className="mt-2 text-gray-300">{videoPlayer.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
