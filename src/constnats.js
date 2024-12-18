import LanguageIcon from "@mui/icons-material/Language";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import img1 from "./assets/nat-1.jpg";
import img2 from "./assets/nat-6.jpg";
import img3 from "./assets/nat-7.jpg";
import img4 from "./assets/nat-8.jpg";
import img5 from "./assets/nat-9.jpg";

const menuItems = [
  "ABOUT NATOUS",
  "YOUR BENFITS",
  "POPULAR TOURS",
  "STORIES",
  "BOOK NOW",
];
const aboutItems = [
  {
    id: 1,
    title: "You're going to fall in love with nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapien aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  },
  {
    id: 2,
    title: "Live adventures like you never have before",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, officia. ametoli consectetur adipisicing elit. Natus, officia",
  },
];

const cardsItems = [
  {
    title: "Explore the world",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    icon: LanguageIcon,
  },
  {
    title: "Meet nature",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    icon: ExploreOutlinedIcon,
  },
  {
    title: "Find your way",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    icon: MapOutlinedIcon,
  },
  {
    title: "Live a healthy life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    icon: FavoriteBorderOutlinedIcon,
  },
];

const popularTours = [
  {
    img: img1,
    title1: "The Sea",
    title2: "Explorer",
    description: [
      "3 days tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty: easy",
    ],
    styleColor1: "#ffb900",
    styleColor2: "#ff7730",
    price: "$297",
  },
  {
    img: img2,
    title1: "The Forest",
    title2: "Hiker",
    description: [
      "3 days tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty: easy",
    ],
    styleColor1: "#7ed56f",
    styleColor2: "#28b485",
    price: "$497",
  },
  {
    img: img3,
    title1: "The Snow",
    title2: "Adventurer",
    description: [
      "3 days tours",
      "Up to 30 people",
      "2 tour guides",
      "Sleep in cozy hotels",
      "Difficulty: easy",
    ],
    styleColor1: "#2998ff",
    styleColor2: "#5643fa",
    price: "$897",
  },
];
const testimonials = [
  {
    name: "Mary Smith",
    title: "I had the best week ever with my family",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    img: img4
  },
  {
    name: "John Doe",
    title: "WOW! My life is completely different now",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernaLorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
    img: img5,
  },
];

export { menuItems, aboutItems, cardsItems, popularTours, testimonials };
