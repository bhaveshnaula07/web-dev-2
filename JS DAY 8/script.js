const heading = document.heading = document.getElementById("myheading")
console.log(heading);   

heading.style.color = "blue";
heading.style.backgroundColor = "yellow";

const para = document.getElementsByClassName("para");
console.log(para);

for(let i=0; i<para.length; i++){
    para[i].style.backgroundColor = "green";
}   