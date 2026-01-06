// //var -> variable
// var chocolate = 'dairy milk'
// var $chocolate = 'five star'
// var _chocolate = 'milkybar'
// var chocolate$ = 'lolipop'
// document.writeln(chocolate," ", $chocolate," ", _chocolate," " , chocolate$ )

// let json1 = "Dave"
// let json2 = 4
// let json3 = true
// let json4 = [4, 5, 6]
// let json5 = {
//     "stock": "TTL",
//     "Price": 3500
// }
// let json6 = `[
//     {
//         "Stock": "TTL",
//         "Price": 2500
//     },
//     {
//        "Stock": "SSB",
//        "Price": 5500
//     }

// ]`

// let parsed = JSON.parse(json6)
// document.writeln(json6)
// console.log(parsed);
// console.log(parsed[1].Price);
// console.log(JSON.stringify(parsed));

//Task on Sample Student Date
//JSON DATA
let studentData = `[
    {"id": 1, "name": "Arun", "course": "Python", "fees": 25000, "active": true },
    {"id": 2, "name": "Divya", "course": "MERN", "fees": 45000, "active": false },
    {"id": 3, "name": "Meena", "course": "Java", "fees": 20000, "active": true },
    {"id": 4, "name": "Hari", "course": "Python", "fees": 25000, "active": false }
]`;
//Convert JSON to object

let students1 = JSON.parse(studentData);

function searchStudent() {
    let input = document.getElementById("search").value.trim().toLowerCase();
    let output = "";

    if (input === "") {
        document.getElementById("out").innerHTML = "Please Enter a Student name";
    }
    
    let search = students1.filter(student =>
        student.name.toLowerCase() === input
    );

    if (search.length > 0) {
        search.forEach(s => {
            output +=
                "ID:" + s.id + "<br>" +
                "Name:" + s.name + "<br>" +
                "Course:" + s.course + "<br>" +
                "FEES:" + s.fees + "<br>" +
                "ACTIVE:" + s.active + "<br><br>";
        });
    } else {
        output = "Student not found";
    }
    document.getElementById("out").innerHTML = output;
}

// Show Python Students

let students2 = JSON.parse(studentData);

function showPythonStudents() {
    let studentsOfPython = "";

    let pythonStudents = students2.filter(student =>
        student.course && student.course.toLowerCase() === "python"
    );

    if (pythonStudents.length > 0) {
        pythonStudents.forEach(s => {
            studentsOfPython +=
                "ID: " + s.id + "<br>" +
                "Name: " + s.name + "<br>" +
                "Course: " + s.course + "<br>" +
                "Fees: " + s.fees + "<br>" +
                "Active: " + s.active + "<br><br>";
        });
    } else {
        studentsOfPython = "No Python students found";
    }

    document.getElementById("python").innerHTML = studentsOfPython;
}

//Active Students

let students3 = JSON.parse(studentData);

function showActiveStudents() {
    let activeStudents = "";

    let studentsAreActive = students3.filter(student => student.active === true);

    if (studentsAreActive.length > 0) {
        studentsAreActive.forEach(s => {
            activeStudents +=
                "ID: " + s.id + "<br>" +
                "Name: " + s.name + "<br>" +
                "Course: " + s.course + "<br>" +
                "Fees: " + s.fees + "<br>" +
                "Active: " + s.active + "<br><br>";
        });
    } else {
        activeStudents = "No active Students Found";
    }
    document.getElementById("active").innerHTML = activeStudents;
}

//Sort the Fees in Ascending Order
let students4 = JSON.parse(studentData);

// load JSON File 
function sortByFees() {

    if (students4.length === 0) {
        document.getElementById("ascendFees").innerHTML = "Data still loading...";
        return;
    }

    let sorted = [...students4].sort((a, b) => a.fees - b.fees);
    let ascending = "";

    sorted.forEach(s => {
        ascending +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("ascendFees").innerHTML = ascending;
}

//Student Fees in Descending Order 

let students5 = JSON.parse(studentData);

// load JSON File 
function sortByFeesdes() {

    if (students5.length === 0) {
        document.getElementById("ascendFees").innerHTML = "Data still loading...";
        return;
    }

    let sorted = [...students5].sort((a, b) => b.fees - a.fees);
    let ascending = "";

    sorted.forEach(s => {
        ascending +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("descendFees").innerHTML = ascending;
}

//Update MERN Student
let students6 = JSON.parse(studentData);

function updateMERNStudents() {

    students6 = students6.map(student => {
        if (student.course === "MERN") {
            return { ...student, active: true };
        }
        return student;
    });

    let MernStudent = "";
    students6.forEach(s => {
        MernStudent +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("MERNS").innerHTML = MernStudent;
}

// Delete Student Detail From StudentData

let students7 = JSON.parse(studentData);

function deleteStudent() {

    students7 = students7.filter(student => student.id !== 3);

    let studentdel = "";

    students7.forEach(s => {
        studentdel +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("delete").innerHTML = studentdel;
}

//Increase Student fees in search of name

let students8 = JSON.parse(studentData);

function increaseFees() {


    //map() -> go through every item in an array and update only the ones we want
    // without damaging the original structure.
    students8 = students8.map(student => {
        if (student.name.toLowerCase() === "meena") {
            return { ...student, fees: student.fees + 5000 }; //... is used for all data to execute
        }   //...(meaning: Take everything from this student and then change only)
        return student;
    });

    let incFees = "";
    students8.forEach(s => {
        incFees +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("feesInc").innerHTML = incFees;
}

//Filter and Sort MERN student by Name

let students9 = JSON.parse(studentData);

function showMERN() {

    let mernstudents = students9
        .filter(student => student.course === "MERN")
        .sort((a, b) => a.name.localeCompare(b.name));

    let studentMern = "";
    mernstudents.forEach(s => {
        studentMern +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("show").innerHTML = studentMern;
}

//All Students in Alphabetical Order

let students10 = JSON.parse(studentData);

function alpabetOrder() {

    let sortedStudents = [...students10].sort((a, b) =>
        a.name.localeCompare(b.name) //localeCompare -> compare two strings
    );

    let orderAlp = "";

    sortedStudents.forEach(s => {
        orderAlp +=
            "ID: " + s.id + "<br>" +
            "Name: " + s.name + "<br>" +
            "Course: " + s.course + "<br>" +
            "Fees: " + s.fees + "<br>" +
            "Active: " + s.active + "<br><br>";
    });
    document.getElementById("order").innerHTML = orderAlp;
}


