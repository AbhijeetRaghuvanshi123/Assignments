let students = ["Abhijeet", "Nitin", "Kartik", "Sachin", "Mayank"];

function Display(students){
    console.log("Student List: ");
    for(let i = 0; i < students.length; i++){
        console.log((i+1)+". "+students[i]);
    }
    console.log("");
}

function Search(students, student){
    console.log(`Searching for: ${student}.`)
    for(let i = 0; i < students.length; i++){
        if(student === students[i]){
            console.log("Student Found.");
            return;
        }
    }
    console.log("Student Not Found.");
}

Display(students);
Search(students, "Abhijeet");
Search(students, "Christanio");