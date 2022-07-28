export const Categories = [
  { text: "All Categories", url: "all-categories" },
  { text: "Electronics & Accessories", url: "electronics-accessories" },
  { text: "Tools & Equipment", url: "tools-equipment" },
  { text: "Home Furniture & Appliances", url: "home-furniture-appliances" },
  { text: "Party & Event Items", url: "party-event-items" },
  { text: "Toys & Sports", url: "toys-sports" },
  { text: "Books & Hobbies", url: "books-hobbies" },
];

export function getCategories() {
  return Categories;
}

export function getCategory(url) {
  return Categories.find((category) => category.url === url);
}
