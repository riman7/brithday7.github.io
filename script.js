let input=document.getElementById("input");
var audio = new Audio('song.mp3');

function clicked(){
    if(input.value.toLowerCase() == "wingardium leviosa"){
        let container = document.getElementById("container");
        container.style.display = "block";
        document.getElementById("code").style.display = "none";
        audio.play();
    }
    else{
    alert("Incorrect!! Note: no extra space, no symbols");
    }
}
