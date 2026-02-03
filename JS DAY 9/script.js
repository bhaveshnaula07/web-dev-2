const task1 = document.getElementById("profile")
task1.style.backgroundColor="tomato";
task1.style.padding="15px";
task1.textAlign="center";

const task2 = document.getElementsByClassName("para");
console.log(task2);

for(let i=0; i<task2.length; i++){
    task2[i].style.color = "red";
    task2[i].style.fontSize="40px"
}   