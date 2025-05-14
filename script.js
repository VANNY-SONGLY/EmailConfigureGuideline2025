function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const toggleBtn = document.querySelector(".toggle-btn");

  sidebar.classList.toggle("hidden");
  mainContent.classList.toggle("full");
  toggleBtn.classList.toggle("shifted");
}

document.querySelectorAll(".sidebar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});
