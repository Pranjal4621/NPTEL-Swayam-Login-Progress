const pages = {
  home: document.getElementById("homePage"),
  mycourses: document.getElementById("mycoursesPage"),
  course: document.getElementById("coursePage"),
  report: document.getElementById("reportPage")
};

function showPage(name) {
  Object.entries(pages).forEach(([key, node]) => node.classList.toggle("hidden", key !== name));
  document.getElementById("profileMenu").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.getElementById("profileButton").addEventListener("click", () => {
  document.getElementById("profileMenu").classList.toggle("hidden");
});
document.getElementById("closeProfile").addEventListener("click", () => {
  document.getElementById("profileMenu").classList.add("hidden");
});

// Search and filters for the visible demo course card.
function filterCatalog() {
  const q = document.getElementById("search").value.trim().toLowerCase();
  const category = document.getElementById("category").value;
  const duration = document.getElementById("duration").value;
  const status = document.getElementById("status").value;
  const matches = "basic course in biomedical research icmr national institute of epidemiology".includes(q)
    && (category === "all" || category === "Multifaculty")
    && (duration === "all" || duration === "Self Paced")
    && (status === "all" || status === "upcoming");
  document.getElementById("catalogCard").classList.toggle("hidden", !matches);
  document.getElementById("empty").classList.toggle("hidden", matches);
}
["search", "category", "duration", "status"].forEach(id => {
  document.getElementById(id).addEventListener(id === "search" ? "input" : "change", filterCatalog);
});

// Clicking a lesson updates the lesson badge and content, without connecting to NPTEL services.
document.querySelectorAll("[data-lesson]").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-lesson]").forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
    const title = button.dataset.lesson;
    document.getElementById("lessonBadge").textContent = "Reading Material: " + title;
    const link = document.getElementById("lessonLink");
    link.textContent = title;
    link.onclick = event => {
      event.preventDefault();
      alert("Demo content for: " + title);
    };
  });
});

// Example scores inspired by the visual pattern in the screenshot; not actual official results.
const scores = [
  ["Week 01 : Assignment 01", "93"],
  ["Week 02 : Assignment 02", "80"],
  ["Week 03 : Assignment 03", "73"],
  ["Week 04 : Assignment 04", "-"],
  ["Week 05 : Assignment 05", "90"],
  ["Week 06 : Assignment 06", "60"],
  ["Week 07 : Assignment 07", "100"],
  ["Week 08 : Assignment 08", "93"],
  ["Week 09 : Assignment 09", "100"],
  ["Week 10 : Assignment 10", "67"],
  ["Week 11 : Assignment 11", "93"],
  ["Week 12 : Assignment 12", "-"]
];
const tbody = document.getElementById("scoreRows");
scores.forEach(([title, score]) => {
  const row = document.createElement("tr");
  const titleCell = document.createElement("td");
  const scoreCell = document.createElement("td");
  titleCell.textContent = title;
  scoreCell.textContent = score;
  row.append(titleCell, scoreCell);
  tbody.appendChild(row);
});
