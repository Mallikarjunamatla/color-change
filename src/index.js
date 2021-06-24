
const body =  document.querySelector("body");
const but = document.querySelector("button");
const p = document.querySelector("p");
if(but)
{
but.addEventListener("click",getRandomColor);
}




function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  body.style.backgroundColor = color;
  
  p.textContent =color;

}

