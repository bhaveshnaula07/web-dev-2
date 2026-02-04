//create new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "this is a dynamically created paragraph.";
console.log(newParagraph);

//Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//remove element
//remove the first paragraph of conatainer
//  const rev = document.querySelector("#container p");
//  rev.remove();


//  other way

document.querySelector("#container p").remove();


const image = document.createElement("img");

image.setAttribute("src", "https://th.bing.com/th/id/OIP.vypSbyqrwsQvH5M_uvZ8WgHaFj?w=199&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3");
image.setAttribute("alt", "kr mangalam university");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);

// Date Method

let date = new Date();
console.log(date);


// Set setInterval

setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    let clock = document.getElementById

}