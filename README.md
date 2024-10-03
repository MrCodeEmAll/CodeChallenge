# CodeChallenge
# Student Grade Generator

## Description
This is a simple JavaScript program that prompts the user to input student marks and outputs the corresponding grade based on the marks.

## How to Run
1. Open `index.html` in your web browser.
2. A prompt will appear asking for the student's marks (between 0 and 100).
3. Enter the marks and click OK.
4. The grade will be displayed in the console.

## Grades:
- A: 80 - 100
- B: 60 - 79
- C: 49 - 59
- D: 40 - 48
- E: < 40

## How to Test
- You can test different inputs to see how the program responds to valid and invalid entries.


2

# Speed Detector

## Description
This JavaScript program simulates a speed detector that checks if a car is exceeding the speed limit and assigns demerit points accordingly. If the driver has more than 12 demerit points, their license is suspended.

## How to Run
1. Open the terminal or command prompt.
2. Navigate to the project directory.
3. Run the command `node solution2.js` to see the output for different speed inputs.

## How it Works
- If the speed is less than 70, it prints `"Ok"`.
- For every 5 km/h above 70, it assigns 1 demerit point.
- If the driver has more than 12 demerit points, it prints `"License suspended"`.




3



# Net Salary Calculator

## Overview

The **Net Salary Calculator** is a JavaScript program designed to calculate an individual's net salary after deducting NSSF, NHIF, and PAYE contributions. The user provides inputs for basic salary and benefits, and the calculator returns the gross salary and net salary after deductions. This project uses current tax and deduction values as per Kenyan regulations.

## Features

- **Gross Salary Calculation**: Adds the basic salary and benefits.
- **NSSF Deduction**: 6% of the gross salary, capped at Ksh 1,080.
- **NHIF Deduction**: Calculated based on salary brackets.
- **PAYE Deduction**: Progressive tax calculation based on Kenyan tax bands.
- **Net Salary Calculation**: Gross salary minus NSSF, NHIF, and PAYE deductions.

## Kenyan Tax and Deduction Information

- **NSSF**: Deducted at 6% of gross salary, with a maximum of Ksh 1,080.
- **NHIF**: Deducted according to salary brackets.
- **PAYE**: Calculated based on income brackets:
    - 10% for income up to Ksh 24,000
    - 25% for income between Ksh 24,001 and Ksh 32,333
    - 30% for income above Ksh 32,333

For more information, refer to:
- [KRA PAYE Calculator](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF Deduction Table](https://www.aren.co.ke/payroll/taxrates.htm)

## Project Structure


## How to Set Up and Run the Project

### Prerequisites

- A web browser.
- A text editor, such as **VS Code**.

### Steps to Run

1. **Clone the Repository** (if working with GitHub):

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Open the Project in VS Code** (or any other text editor):

    ```bash
    code .
    ```

3. **Add an HTML File** to test the JavaScript code:

    Create an HTML file with the following content:

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Net Salary Calculator</title>
        <script src="solution3.js"></script>
    </head>
    <body>
        <h1>Net Salary Calculator</h1>
    </body>
    </html>
    ```

4. **Run the Program**:

    Open the HTML file in a web browser. The browser will prompt you to enter the basic salary and benefits, and the results (gross salary, deductions, and net salary) will be printed in the console.

### Example

#### Input:
- Basic Salary: Ksh 50,000
- Benefits: Ksh 10,000

#### Output:


## Assumptions

- The user inputs valid numerical values for both basic salary and benefits.
- The calculator uses the latest Kenyan tax rates and deduction rules.

## Contribution

Feel free to fork this repository, make changes, and submit a pull request. Contributions and suggestions are welcome.

## License

This project is licensed under the **MIT License**.

## Contact

If you have any questions or feedback, you can reach me at [your-email@example.com].

Thank you for downloading. Have fun!