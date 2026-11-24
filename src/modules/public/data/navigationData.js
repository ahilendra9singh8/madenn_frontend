
const navigationData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
    children: [
      { title: "Company Profile", path: "/about/company-profile" },
      { title: "Our Journey", path: "/about/our-journey" },
      { title: "Promoters", path: "/about/promoters" },
      { title: "Achievements", path: "/about/achievements" },
      { title: "Future Strategy", path: "/about/future-strategy" },
    ],
  },
  {
    title: "Businesses",
    path: "/businesses",
    children: [
      { title: "Roads & Highways", path: "/businesses/roads-highways" },
      { title: "Power & Electricity", path: "/businesses/power-electricity" },
      { title: "Water Infrastructure", path: "/businesses/water-infrastructure" },
      { title: "Sewerage & Wastewater", path: "/businesses/sewerage" },
      { title: "Storm Drainage", path: "/businesses/storm-drainage" },
      { title: "Waste Management", path: "/businesses/waste-management" },
      { title: "Smart Infrastructure", path: "/businesses/smart-infrastructure" },
    ],
  },
  {
    title: "Projects",
    path: "/projects",
    children: [
      { title: "Completed Projects", path: "/projects/completed" },
      { title: "Ongoing Projects", path: "/projects/ongoing" },
      { title: "Recent Projects", path: "/projects/recent" },
    ],
  },
  {
    title: "Clients",
    path: "/clientele",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Careers",
    path: "/careers",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

export default navigationData;