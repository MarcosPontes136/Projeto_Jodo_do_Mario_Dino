const mario = document.getElementById("mario");
const mushroom = document.getElementById("mushroom");

function jump(){
    mario.classList.add("jump");

    setTimeout(function (){
        mario.classList.remove("jump");
    }, 300);
}

let isAlive = setInterval(function (){
    //busca posição Y do mario    
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));

       //busca posição X do cogumelo
       let mushroomLeft = parseInt(window.getComputedStyle(mushroom).getPropertyValue("left"));
       console.log(mushroom);


       //detectar colisão
       if(mushroomLeft <50 && mushroomLeft > 0 && marioTop >= 140){
           //colisão
           alert("Game Over")
       }
}, 10);

document.addEventListener("keydown", function (event){
    jump();
})