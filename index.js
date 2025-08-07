//template_ohvd1rz
//service_d4yl72h
//nwTlc16KI6XF3c1V-
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
function moveBackground(event) {
  let mouseX = event.clientX
  let mouseY = event.clientY
  
  let number = 0
  let shapes = document.querySelectorAll(`.shape`)
  for (let i = 0; i < shapes.length; ++i) { 
   if (number < 8){
     number += 1
   }
   else{
    number = 0
   }
    let shape = document.querySelector(`.shape-${number}`)
    let rect = shape.getBoundingClientRect()
  
    let shapePos = [rect.x, rect.y]
    let mousePos = [mouseX, mouseY]
    let vectorX = mousePos[0] - shapePos[0]
    let vectorY = mousePos[1] - shapePos[1]

    let rotation = Math.atan2(vectorX, vectorY)
    shape.style.transform = `rotate(${-rotation + 3.14159}rad)`
     

    
  }

  // const shapes = document.querySelectorAll(".shape");
  // const x = event.clientX * scaleFactor;
  // const y = event.clientY * scaleFactor;
  
  // for (let i = 0; i < shapes.length; ++i) {
  //   const isOdd = i % 2 !== 0;
  //   const boolInt = isOdd ? -1 : 1
  //   shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`;
  
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_d4yl72h",
      "template_ohvd1rz",
      event.target,
      "nwTlc16KI6XF3c1V-"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly at jeremiahhaugan@gmail.com."
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;

  document.body.classList += " modal--open";
}
