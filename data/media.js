// data/media.js

// Define your categories and their display names
export const categories = {
  "economic-empowerment": "Economic Empowerment",
  "peace-security": "Peace & Security",
  agriculture: "Agriculture & Food Security",
  peacebuilding: "Peacebuilding",
  events: "Events & Celebrations",
  community: "Community Stories",
};

// Video testimonials (only a few, so we keep them manual)
export const videos = [
  {
    id: "video-1",
    type: "video",
    title: "Beneficiary Testimonial - Economic Empowerment",
    category: "Testimonials",
    src: "/videos/testimonial-1.mp4",
    thumbnail: "/images/gallery/video-thumbnails/thumb-1.jpg",
    description: "A beneficiary shares how WEDOL changed her life",
    duration: "2:30",
  },
  {
    id: "video-2",
    type: "video",
    title: "Peace & Security Program Impact",
    category: "Testimonials",
    src: "/videos/testimonial-2.mp4",
    thumbnail: "/images/gallery/video-thumbnails/thumb-2.jpg",
    description: "Community leader on peacebuilding initiatives",
    duration: "3:15",
  },
  {
    id: "video-3",
    type: "video",
    title: "Women Farmers Success Story",
    category: "Testimonials",
    src: "/videos/testimonial-3.mp4",
    thumbnail: "/images/gallery/video-thumbnails/thumb-3.jpg",
    description: "Farmer testimonial on smart agriculture training",
    duration: "2:45",
  },
];

// Auto-generate photo gallery items from folder structure
export function generatePhotoGallery() {
  const photos = [];

  // For each category, generate image paths
  Object.keys(categories).forEach((categoryKey) => {
    const categoryName = categories[categoryKey];

    // You'll need to manually count images per folder initially
    // Or use the script below to auto-detect
    const imageCounts = {
      "economic-empowerment": 41,
      "peace-security": 22,
      agriculture: 28,
      peacebuilding: 15,
      events: 30,
      community: 4,
    };

    const count = imageCounts[categoryKey] || 0;

    for (let i = 1; i <= count; i++) {
      photos.push({
        id: `${categoryKey}-${i}`,
        type: "photo",
        title: `${categoryName} - Image ${i}`,
        category: categoryName,
        src: `/images/gallery/${categoryKey}/image${i}.jpg`,
        thumbnail: `/images/gallery/${categoryKey}/image${i}.jpg`,
      });
    }
  });

  return photos;
}

// Combine all media
export function getAllMedia() {
  const photos = generatePhotoGallery();
  return [...photos, ...videos];
}
