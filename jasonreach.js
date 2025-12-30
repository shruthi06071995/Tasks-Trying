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
    {"id": 1, "Name": "Arun", "Course": "Python", "Fees": 25000, "Active": true },
    {"id": 2, "Name": "Divya", "Course": "MERN", "Fees": 45000, "Active": true },
    {"id": 3, "Name": "Monu", "Course": "Java", "Fees": 20000, "Active": true },
    {"id": 4, "Name": "Hari", "Course": "Python", "Fees": 25000, "Active": false }
]`;
//Convert JSON to object

let students = JSON.parse(studentData);

function searchStudent() {
    let input = document.getElementById("search").value.trim().toLowerCase();
    let output = "";

    if (input === ""){
        document.getElementById("out").innerHTML = "Please Enter a Student name";
        return;
        
    }
    let search = students.filter(student => 
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
    console.log();
        
}

       
        
        
        
        
    

