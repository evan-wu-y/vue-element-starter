export const images = {
  'mountain-lake': {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    title: 'Mountain Lake',
    description: 'Beautiful mountain lake at sunset',
  },
  'forest-path': {
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Forest Path',
    description: 'Sunlight through the forest trees',
  },
  'ocean-waves': {
    url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0',
    title: 'Ocean Waves',
    description: 'Peaceful ocean waves at sunrise',
  },
  'desert-dunes': {
    url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    title: 'Desert Dunes',
    description: 'Golden sand dunes in the desert',
  },
  'autumn-forest': {
    url: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97',
    title: 'Autumn Forest',
    description: 'Colorful autumn forest landscape',
  },
  'snowy-peaks': {
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    title: 'Snowy Peaks',
    description: 'Snow-covered mountain peaks',
  },
  waterfall: {
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d',
    title: 'Tropical Waterfall',
    description: 'Majestic waterfall in tropical rainforest',
  },
  'lavender-field': {
    url: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec',
    title: 'Lavender Field',
    description: 'Purple lavender fields at sunset',
  },
  'northern-lights': {
    url: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73',
    title: 'Northern Lights',
    description: 'Aurora Borealis dancing in the night sky',
  },
  'cherry-blossoms': {
    url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951',
    title: 'Cherry Blossoms',
    description: 'Spring cherry blossoms in full bloom',
  },
  'coral-reef': {
    url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b',
    title: 'Coral Reef',
    description: 'Vibrant coral reef underwater ecosystem',
  },
  'canyon-vista': {
    url: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722',
    title: 'Canyon Vista',
    description: 'Stunning view of a deep canyon at sunrise',
  },
} as const

export type ImageKey = keyof typeof images
