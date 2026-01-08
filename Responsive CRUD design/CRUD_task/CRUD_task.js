let studentData = `[
    {"id": 1, "name": "Arun", "course": "Python", "fees": 25000, "active": true },
    {"id": 2, "name": "Divya", "course": "MERN", "fees": 45000, "active": true },
    {"id": 3, "name": "Monu", "course": "Java", "fees": 20000, "active": true },
    {"id": 4, "name": "Hari", "course": "Python", "fees": 25000, "active": false },
    {"id": 5, "name": "Meena", "course": "Python", "fees": 25000, "active": true },
    {"id": 6, "name": "Priya", "course": "MERN", "fees": 45000, "active": true },
    {"id": 7, "name": "Somu", "course": "Java", "fees": 20000, "active": true },
    {"id": 8, "name": "Pari", "course": "Python", "fees": 25000, "active": false },
    {"id": 9, "name": "Tharun", "course": "Python", "fees": 25000, "active": true },
    {"id": 10, "name": "Haripriya", "course": "MERN", "fees": 45000, "active": true }
]`;

let students = JSON.parse(studentData);

function render(data = students) {
    let body = "";
    data.forEach(s => {
        body +=`
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.course}</td>
            <td>${s.fees}</td>
            <td>
                <button onclick="editStudent(${s.id})">Edit</button>
                <button onclick="deleteStudent(${s.id})">Delete</button>
            </td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = body;
}

function addStudent() {
    let id = Number(id.value);
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let fees = Number(document.getElementById("fees").value);

    let exist = students.find(s => s.id === id);
    
    if (exist) {
        exist.name = name;
        exist.course = course;
        exist.fees = fees;
    } else {
        students.push({id, name, course, fees });
    }
    render();
}

function editStudent(id) {
    let s = students.find(stu => stu.id === id);
    document.getElementById("id").value = s.id;
    document.getElementById("name").value = s.name;
    document.getElementById("course").value = s.course;
    document.getElementById("fees").value = s.fees;
}

function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    render();
}

function sortByName() {
    students.sort((a, b) => a.name.localeCompare(b.name));
    render();
}

function sortByFees() {
    students.sort((a, b) => a.fees - b.fees);
    render();
}

function filterStudents() {
    let course =  document.getElementById("filterCourse").value;
    if (course === "") render();
    else render(students.filter(s => s.course === course));
}

render();