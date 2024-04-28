import img1 from "./../../../assets/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg";
import img2 from "./../../../assets/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg";
import img3 from "./../../../assets/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg";
import img4 from "./../../../assets/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg";
import img5 from "./../../../assets/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg";
import img6 from "./../../../assets/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg";
import { FaRegStar, FaStar } from "react-icons/fa6";

export const MenuData = [
  {
    id: 1,
    src: img1,
    title: "Morning Fresh",
    price: "$12.50",
    rating: "4.3/5",
    review: "102 Reviews",
    ratingicons: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 2,
    src: img2,
    title: "Tooplate Soup",
    price: "$24.50",
    rating: "3/5",
    review: "50 Reviews",
    ratingicons: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 3,
    src: img3,
    title: "Premium Steak",
    price: "$45",
    rating: "3/5",
    discount: "$150",
    review: "86 Reviews",
    ratingicons: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 4,
    src: img4,
    title: "Seafood Set",
    price: "$86",
    rating: "3/5",
    discount: "$124",
    review: "44 Reviews",
    ratingicons: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 5,
    src: img5,
    title: "Burger Set",
    price: "$20.50",
    rating: "4.3/5",
    review: "102 Reviews",
    ratingicons: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 6,
    src: img6,
    title: "Healthy Soup",
    price: "$34.20",
    rating: "3/5",
    review: "64 Reviews",
    ratingicons: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
];
