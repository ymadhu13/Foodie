// src/data/restaurants.js
import dominosImg from "../assets/restaurants/dominos.jpg";
import kfcImg from "../assets/restaurants/kfc.jpg";
import bbqImg from "../assets/restaurants/bbq.jpg";
import baskinImg from "../assets/restaurants/baskin.jpg";

const restaurants = [
  {
    id: 1,
    name: "Domino's Pizza",
    cuisine: "Pizza, Fast Food",
    rating: 4.3,
    deliveryTime: "30-40 mins",
    costForTwo: "₹500 for two",
    image: dominosImg,
  },
  {
    id: 2,
    name: "KFC",
    cuisine: "Chicken, Burgers",
    rating: 4.1,
    deliveryTime: "25-35 mins",
    costForTwo: "₹400 for two",
    image: kfcImg,
  },
  {
    id: 3,
    name: "Barbeque Nation",
    cuisine: "BBQ, North Indian",
    rating: 4.5,
    deliveryTime: "40-50 mins",
    costForTwo: "₹800 for two",
    image: bbqImg,
  },
  {
    id: 4,
    name: "Baskin Robbins",
    cuisine: "Ice Cream, Desserts",
    rating: 4.2,
    deliveryTime: "15-25 mins",
    costForTwo: "₹300 for two",
    image: baskinImg,
  },
];

export default restaurants;
