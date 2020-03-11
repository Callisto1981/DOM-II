// Your code goes here

homeLink.addEventListener("dblclick", () => {
  homeLink.classList.toggle("large");
});

document.querySelector("nav").addEventListener(
  "mouseover",
  () => {
    event.target.style.color = "red";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  },
  false
);

blogLink.addEventListener("mouseover", () => {
  blogLink.cla;
});
