import FRANKENSTEIN from "../assets/Frankenstein";
import PRIDE_PREJUDICE from "../assets/PridePrejudice";

const defaultText = [
  {
    title: "Custom Texts",
    author: "User",
    src: "",
  },
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ipsa.",
  },
];

!localStorage.getItem("UserTexts") &&
  localStorage.setItem("UserTexts", JSON.stringify(defaultText));

const USER_TEXTS =
  localStorage.getItem("UserTexts") &&
  JSON.parse(localStorage.getItem("UserTexts"));

const COLLECTIONS = [FRANKENSTEIN, PRIDE_PREJUDICE, USER_TEXTS];

export default COLLECTIONS;
