let courseData = `[
  {"id":1,"name":"Python Basics","category":"Programming","price":3000},
  {"id":2,"name":"Web Design","category":"Design","price":2500},
  {"id":3,"name":"JavaScript","category":"Programming","price":4000},
  {"id":4,"name":"Digital Marketing","category":"Marketing","price":3500}
]`;

let courses = JSON.parse(courseData);

function showCourses(data = courses) {
  let html = "";
  data.forEach(c => {
    html += `
      <div class="card">
        <b>${c.name}</b><br>
        Category: ${c.category}<br>
        Price: ₹${c.price}
      </div>`;
  });
  document.getElementById("output").innerHTML = html;
}

document.getElementById("searchBox").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let result = courses.filter(c => c.name.toLowerCase().includes(value));
  showCourses(result);
});

function filterCourses() {
  let cat = document.getElementById("category").value;
  if(cat === "") showCourses();
  else showCourses(courses.filter(c => c.category === cat));
}

showCourses();