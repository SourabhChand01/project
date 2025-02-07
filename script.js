let count1 = 0;
function slidebar() {
    let rightbox = document.getElementById("right1");
    let leftbox = document.getElementById("left1");

    let box=document.getElementById("threelines");
    if (count1 == 0) {
        console.log("Sliding right1 left");
        rightbox.style.transition = "transform 1.5s ease";
        rightbox.style.transform = "translateX(-200px)";
        // rightbox.style.display="inline";
        leftbox.style.transition = "transform 1.5s ease";
        leftbox.style.transform = "translateX(-150px)";
        // leftbox.style.display="none";
        // rightbox.style.opacity=(rightbox.style.opacity == 0) ? 1 : 0;
        // box.style.transform="rotate(2deg)";
        box.style.backgroundColor="grey";
        count1++;
    } else if (count1 == 1) {
        console.log("Sliding right1 right");
        rightbox.style.transition = "transform 1s ease";
        rightbox.style.transform = "translateX(230px)";
        // rightbox.style.opacity=(rightbox.style.opacity == 1) ? 0 : 1;
        leftbox.style.transition = "transform 1s ease";
        leftbox.style.transform = "translateX(180px)";
        leftbox.style.display="block";

        box.style.transform="rotate(0deg)";
        box.style.backgroundColor="white";
        count1--;
    } else {
        console.log("Error: Invalid count1 value");
    }
}

document.getElementById("threelines").addEventListener('click', slidebar);
