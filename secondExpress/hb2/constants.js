// Define an array of menu items
export const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
  { label: "Random", url: "/random" },
  { label: "Generator", url: "/band" },
];

export function printURL(req, res, next) {
  console.log(req.url); // show url
  next();
}
