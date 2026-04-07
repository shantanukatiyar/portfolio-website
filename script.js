/* ================= JS ================= */
// Fade animation
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// Typing animation
const text = ["Web Developer", "DSA Enthusiast", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;

  if (j === current.length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}

type();
