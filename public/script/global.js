document.addEventListener('DOMContentLoaded', () => {
  // links.astro
  const moreButton = document.getElementById("more-button");
  const additionalLinks = document.getElementById("additional-links");
  if (moreButton && additionalLinks) {
    moreButton.addEventListener("click", function() {
      if (additionalLinks.classList.contains("hidden")) {
        additionalLinks.classList.remove("hidden");
        moreButton.innerText = "Show Less"; 
      } else {
        additionalLinks.classList.add("hidden");
        moreButton.innerText = "More"; 
      }
    });
  }
});