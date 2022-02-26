import "./assets/css/default.css";
import "./assets/css/styles.css";
import { init } from "./app";
import bechhi from "./assets/images/bechhi.jpg";

init([
  { className: ".heading", title: "Heading", content: "Simple VanillaJS Yypescript Gulp Project Boilerplate" },
  {
    className: ".section-1",
    title: "Section",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ex alias tempore recusandae maxime, illo eum cumque reprehenderit minima molestias qui sequi iste consectetur dolores ducimus ab neque, provident possimus.",
  },
  {
    className: ".cat-canvas",
    title: "Beckhi",
    content: bechhi,
  },
]);
