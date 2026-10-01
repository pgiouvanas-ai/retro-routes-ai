export type TourImage = { src: string; alt: string };

export type Tour = {
  key: string;
  tag: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  includes: string[];
  meetingPoint: string;
  whatToBring: string[];
  freeCancellation: string;
  images: TourImage[];
};

export const tours: Tour[] = [
  {
    key: "tour1",
    tag: "Walking Tour · Daytime",
    title: "The Retro Routes Experience: Dublin's Vintage Shopping Tour",
    shortDescription: "Discover Dublin's hidden vintage gems with Irish bites and drinks along the way.",
    description: "Dublin's only vintage shopping tour. Discover the city's best vintage gems with tasty treats along the way. A guided shopping tour through Dublin's top handpicked vintage stores, with exclusive discounts and local insights.",
    duration: "3-4 hours",
    price: "From €80 per adult",
    includes: [
      "Irish coffee demo and sweet treat to start",
      "Guided walk through Dublin's top handpicked vintage stores",
      "Exclusive discounts and local insights at every stop",
      "Fresh bakery lunch mid-tour",
      "Complimentary glass of wine or beer with cheese selection to finish",
      "Stories about Dublin's fashion history",
      "Meet passionate local shop owners",
    ],
    meetingPoint: "Meet us beneath the iconic clock at Independent House, once the heartbeat of Irish news, now the perfect spot to start our Retro Routes Experience.",
    whatToBring: ["Comfortable shoes", "Camera", "Water"],
    freeCancellation: "Free cancellation up to 24 hours in advance for a full refund.",
    images: [
      { src: "/images/vintage.jpg", alt: "Dublin vintage clothing rails and retro finds" },
      { src: "/images/stories1.jpg", alt: "Inside a moody Dublin vintage boutique" },
      { src: "/images/about.jpg", alt: "Vintage jewellery and antiques display in a Dublin shop" },
    ],
  },
  {
    key: "tour2",
    tag: "Walking Tour · Evening Time · Seasonal",
    title: "An Irish Halloween",
    shortDescription: "Step into the shadows of Dublin and uncover the ancient Celtic origins of Samhain, the true Irish origins of modern day Halloween.",
    description: "Few realise that Halloween began here in Ireland. Uncover the ancient Celtic origins of Samhain, a night when the veil between our world and the spirit world was at its thinnest, and wander through Dublin after dark as centuries of folklore come to life.",
    duration: "3 hours",
    price: "From €80 per adult",
    includes: [
      "Guided evening walk through Dublin's most haunted streets and hidden spots",
      "Irish folklore, banshees, and ghost stories brought to life",
      "The tale of Stingy Jack and the true origins of Halloween",
      "Traditional Silent Supper with freshly baked barmbrack and seasonal treats",
      "Complimentary glass of wine or beer to finish",
      "Meet a passionate local guide who keeps Dublin's oldest tales alive",
    ],
    meetingPoint: "Meet us beneath the iconic clock at Independent House, once the heartbeat of Irish news, now the perfect spot to start our Retro Routes Experience.",
    whatToBring: ["Comfortable shoes", "Camera", "Water"],
    freeCancellation: "Free cancellation up to 24 hours in advance for a full refund.",
    images: [
      { src: "/images/halloween1.jpg", alt: "An Irish Halloween tour in Dublin" },
      { src: "/images/halloween2.jpg", alt: "Dublin haunted streets at night" },
      { src: "/images/halloween3.jpg", alt: "Irish Halloween folklore and history" },
    ],
  },
  {
    key: "tour3",
    tag: "Walking Tour · Evening Time · Seasonal",
    title: "Dublin's Winter Walks",
    shortDescription: "Experience Dublin at its most magical as the city sparkles with Christmas lights and discover the Irish tradition and festive story with a true local guide.",
    description: "Experience Dublin at its most magical as the city sparkles with festive lights. A guided evening walk through Irish Christmas traditions and stories, concluding with cheese, wine and a mince pie.",
    duration: "3 hours",
    price: "From €80 per adult",
    includes: [
      "Guided evening walk through Dublin's festive Christmas lights and landmarks",
      "Irish Christmas traditions and stories from a passionate local guide",
      "The magic of Moore Street market and historic illuminated buildings",
      "Cosy cheese and wine reception with a traditional Irish mince pie to finish",
      "Family-friendly experience for all ages",
    ],
    meetingPoint: "Meet us at the Spire of Dublin on O'Connell Street, Ireland's most iconic landmark and the perfect starting point for our festive winter walk.",
    whatToBring: ["Comfortable shoes", "Camera", "Water"],
    freeCancellation: "Free cancellation up to 24 hours in advance for a full refund.",
    images: [
      { src: "/images/christmas1.jpg", alt: "Dublin Christmas lights and festive streets" },
      { src: "/images/christmas2.jpg", alt: "Dublin Winter Walks festive experience" },
      { src: "/images/christmas3.jpg", alt: "Irish Christmas traditions in Dublin" },
    ],
  },
];