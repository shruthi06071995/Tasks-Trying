

let student = [ 
    {id: 1, name: "Arun", course: "Python", fees: 25000, active: true},
    {id: 2, name: "Divya", course: "MERN", fees: 45000, active: true},
    {id: 3, name: "Kiran", course: "Python", fees: 30000, active: false},
    {id: 4, name: "Meena", course: "Java", fees:28000, active: true}
]

//Search and Display student details
console.log("Search and Display student details")
let result = student.filter(student => student.name === "Divya");

if(result.length > 0) {
    console.log("ID:" + result[0].id);
    console.log("Name: " + result[0].name);
    console.log("Course: " + result[0].course);
    console.log("Fees: " + result[0].fees);
    console.log("Active: " + result[0].active);
} else {
    console.log("Student not Found");   
}

//Course search student
console.log("Course search student")
let PythonStudents = student.filter(student => student.course === "Python");

if(PythonStudents.length > 0) {
    PythonStudents.forEach(student => {
        console.log("ID:" + student.id );
        console.log("Name:" + student.name);
        console.log("Course:" + student.course);
        console.log("Fees:" + student.fees);
        console.log("Active:" + student.active);
    });
} else {
    console.log("No Python course student found");
    
}

//student who are currently active
document.writeln("student who are currently active" + "<br>" + "<br>")
let activeStudents = student.filter(student => student.active === true);

if(activeStudents.length > 0) {
    activeStudents.forEach(student => {
        document.writeln("ID:" + student.id + "<br>");
        document.writeln("Name:" + student.name + "<br>");
        document.writeln("Course:" + student.course + "<br>");
        document.writeln("Fees:" + student.fees + "<br>");
        document.writeln("Active:" + student.active + "<br>" + "<br>");
    });
} else {
    console.log("No active Students Found");
    
}

//Sort the fees for students in Ascending order
document.writeln("Sorting in Ascending order" + "<br>" + "<br>")
student.sort((a, b) => a.fees - b.fees);

student.forEach(student => {
    document.writeln("Name:" + student.name + "<br>");
    document.writeln("Course:" + student.course + "<br>");
    document.writeln("Fees:" + student.fees + "<br>" + "<br>");
});

//Sort the fees for students in Decending order
document.writeln("Sorting in Decending order" + "<br>" + "<br>")
student.sort((a, b) => b.fees - a.fees);

student.forEach(student => {document.writeln("Name:" + student.name + "<br>");
    document.writeln("Course:" + student.course + "<br>");
    document.writeln("Fees:" + student.fees + "<br>" + "<br>");
});

//Update course Python to Full stack
document.writeln("Update course Python to Full Stack" + "<br><br>")

let updatedStudent = student.map(student => {
    if (student.id === 1) {
        return { ...student, course: "Full Stack" };
    }
    return student;
});
updatedStudent.forEach( s => {
    document.writeln(
        "ID:" + s.id + "<br>" + "Name:" + s.name + "<br>" + "Course:" + s.course + "<br><br>"
    );
});