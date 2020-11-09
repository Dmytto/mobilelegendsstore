const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Moving anim. event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) `;
});
//Items
const title = document.querySelector('.title');
const model = document.querySelector('.model img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = 'translateZ(150px)';
    model.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(125px)';
    description.style.transform = 'translateZ(100px)';
    sizes.style.transform = 'translateZ(75px)';
})

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)"
    model.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
});