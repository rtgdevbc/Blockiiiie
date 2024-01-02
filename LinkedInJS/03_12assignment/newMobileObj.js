import Mobile from "./mobile.js";

const onePlus = new Mobile(
    "Samsung",
    "Andriod 14",
    "8 Gen-2",
    "Q-OLED",
    7
);
onePlus.highProcessor("Snapdragon 8");
onePlus.changeDisplay("Curved Display");

console.log("My new mobile is : ", onePlus);
console.log("My mobile screen dimension is : ", onePlus.screenDim);
