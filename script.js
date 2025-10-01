// ===== SLIDER =====
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let dotsContainer = document.querySelector(".dots");

// Tạo dots
slides.forEach((_, index) => {
  let dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides[currentIndex].classList.remove("active");
  dots[currentIndex].classList.remove("active");
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => showSlide(currentIndex + 1));
document.querySelector(".prev").addEventListener("click", () => showSlide(currentIndex - 1));

// Tự động chạy
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);
// Mở modal khi ấn nút
document.getElementById("bookingBtn").onclick = function() {
  document.getElementById("contactModal").style.display = "flex";
}

// Đóng modal khi bấm dấu X
document.querySelector(".close").onclick = function() {
  document.getElementById("contactModal").style.display = "none";
}

// Đóng modal khi click ra ngoài
window.onclick = function(e) {
  if (e.target == document.getElementById("contactModal")) {
    document.getElementById("contactModal").style.display = "none";
  }
}

