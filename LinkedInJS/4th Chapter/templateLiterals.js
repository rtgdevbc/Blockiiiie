function Mobile (name, processor, sResolution, led){
    this.mobileName = name;
    this.processor = processor;
    this.screenType = {
        resolution : sResolution,
        sType : led
    };
}
const onePlus = new Mobile ("onePlus", "SD-8 Gen3", 2160, "Q-O LED");
// console.log(onePlus);

//  const content = `
//  <h1> ${onePlus.mobileName}</h1>
//  <ul>
//      <li>processor: ${onePlus.processor}</li>
//      <li>screen details: </li>
//      <ol>
//          <li>screen resolution: ${onePlus.screenType.resolution}</li>
//          <li>screen type: ${onePlus.screenType.sType}</li>
//      </ol>
//  </ul>
//   `;
// document.body.innerHTML = content;

const year = 1960;
const getCurrentYear = () => new Date().getFullYear();
const cameraAge = (year) => getCurrentYear() - year;

console.log(typeof cameraAge());
console.log(getCurrentYear());
console.log(2024-1960);
const getCurrentYear1 = () => new Date();
console.log(Number (getCurrentYear1().getFullYear()));



