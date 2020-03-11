// Your code goes here

homeLink.addEventListener("dblclick", () => {
  homeLink.classList.toggle("large");
});

aboutLilnk.addEventListener(
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
  blogLink.event.style.color = "blue";
});
