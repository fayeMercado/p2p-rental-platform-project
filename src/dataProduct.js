export const Categories = [
  "All Categories",
  "Electronics",
  "Computer & Accessories",
  "Tools & Equipment",
  "Home Furniture & Appliances",
  "Party & Event Items",
  "Toys & Sports",
  "Books & Hobbies",
];

let products = [
  {
    code: 1658469412709,
    itemName: 'Stanley 1800W 10" Table Saw',
    category: "tools & equipment",
    location: "Metro Manila",
    available: true,
    quantity: 1,
    deposit: 2000,
    rent: { day: 200, week: 1000, month: 3500 },
    method: ["Pick-up", "Delivery"],
    rating: 0,
    images: [
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_1.jpg",
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_2.jpg",
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_3.jpg",
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STST1825_4.jpg",
      "https://cdn.store-assets.com/s/14425/i/23731082.jpg?width=1024",
    ],
    description: [
      "1800W powerful motor offering heavy load working",
      "Self-aligning rip fence",
      "Cutting capacity up to 80mm at 90 degree",
      "Wheels for easy transportation",
    ],
    instructions: ["Return at owner's address"],
    reviews: {},
  },
  {
    code: 1658469424081,
    itemName: "750W 9mm Planer",
    category: "tools & equipment",
    location: "Metro Manila",
    available: true,
    quantity: 2,
    deposit: 750,
    rent: { day: 50, week: 300, month: 1000 },
    method: ["Pick-up", "Delivery"],
    rating: 0,
    images: [
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/STEL630_1.jpg",
      "https://adamimages.sbdinc.com/GEM/Stanley/1000x1000_144r/10-STEL630_A1.jpg",
    ],
    description: [
      "Powerful 750W motor for optimum material removal",
      "3 Different size chamfering grooves machined in planer shoe",
      "0.2mm depth of cut setting for increased accuracy",
      "Adjustable Chip Ejection, Left Or Right Side Ejection",
      "Low weight and perfect balance make this planer ideal for single handed use",
    ],
    instructions: ["Return at owner's address"],
    reviews: {},
  },
];

export function getProducts() {
  return products;
}

export function getItem(code) {
  return products.find((item) => item.code === code);
}
