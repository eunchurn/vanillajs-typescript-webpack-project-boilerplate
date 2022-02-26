import { $$ } from "./selector";

interface Content {
  className: string;
  title: string;
  content: string;
}
export function init(content: Content[]) {
  // First content
  const [first] = content;
  const headingArr = $$(first.className, document);
  const heading = document.querySelectorAll(first.className);
  console.log("Selector Array:", headingArr, "Selector NodeList", heading);
  // Second content
  const [, second] = content;
  const section1 = document.querySelector(second.className);
  if (heading) {
    heading[0].innerHTML = first.title;
  }
  if (section1) {
    const parag = document.createElement("p");
    parag.innerHTML = second.content;
    section1.appendChild(parag);
  }
  // Canvas
  const [, , third] = content;
  const canvas = document.createElement("canvas") as HTMLCanvasElement;
  Object.assign(canvas, { width: 450, height: 600 });
  if (section1) {
    section1.appendChild(canvas);
  }
  const img = new Image();
  img.src = third.content;
  const context = canvas.getContext("2d");
  if (context) {
    img.onload = function () {
      context.drawImage(img, 0, 0, 450, 600);
      console.log("drawn");
    };
  }
}
