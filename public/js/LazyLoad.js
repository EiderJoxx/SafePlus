document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.removeAttribute("data-src");
          img.classList.add("opacity-100");
          observer.unobserve(img);
        }
      });
    },
    {
      rootMargin: "100px",
    }
  );

  images.forEach((img) => observer.observe(img));
});
