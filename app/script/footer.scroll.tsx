
const footer = document.getElementById("footer") || new HTMLElement();
const trigger = document.getElementById("footer-trigger") || new HTMLElement();

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
  },
  {
    threshold: 1
  }
);

 observer.observe(trigger);
