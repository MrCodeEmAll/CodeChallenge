// Solution 1: Student Grade Generator

function gradeGenerator() {
    // Prompt the user to enter marks
    let marks = prompt("Enter the student's marks (between 0 and 100):");

    // Convert the input to a number
    marks = Number(marks);

    // Validate the input
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please enter a valid number between 0 and 100.");
        return;
    }

    // Determine the grade based on marks
    if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 49) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

// Run the grade generator function
gradeGenerator();
