//   function handleClick(){
//      document.getElementById("btn").
// textContext ("clicked");
//}

function handleClick(){
   const heading = document.querySelector("h1");
    heading.style.color = "tomato";
    heading.textContent = "new heading";
  

const spanEle = document.createElement("span").textContent = "This is a new span element";

const image = document.createElement("img");
image.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.EXCPz8V24vD0Tof_x8tRQwAAAA?pid=Api&P=0&h=180");

image.setAttribute("alt", "KR MANGALAM");

document.getElementById("content").append(spanEle);
document.getElementById("content").append(image);

}