// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits) {
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
    console.log(`Gross Salary: Ksh ${grossSalary}`);
    
    // Calculate deductions
    const nssf = calculateNSSF(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const paye = calculatePAYE(grossSalary);
    
    // Calculate net salary
    const netSalary = grossSalary - (nssf + nhif + paye);
    console.log(`Net Salary: Ksh ${netSalary}`);
    
    return netSalary;
}

// Function to calculate NSSF deduction
function calculateNSSF(grossSalary) {
    // NSSF contribution is 6% of gross salary, capped at Ksh 1,080
    const nssf = Math.min(grossSalary * 0.06, 1080);
    console.log(`NSSF Deduction: Ksh ${nssf}`);
    return nssf;
}

// Function to calculate NHIF deduction based on salary brackets
function calculateNHIF(grossSalary) {
    let nhif = 0;

    // NHIF bracket deductions
    if (grossSalary <= 5999) nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500;
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else nhif = 1000; // Salaries above 40,000 have a fixed NHIF of 1,000

    console.log(`NHIF Deduction: Ksh ${nhif}`);
    return nhif;
}

// Function to calculate PAYE based on salary brackets
function calculatePAYE(grossSalary) {
    let paye = 0;

    // PAYE tax rates in Kenya
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1; // 10% for the first 24,000
    } else if (grossSalary <= 32333) {
        paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25; // 25% on amount between 24,001 and 32,333
    } else {
        paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3; // 30% on amounts above 32,333
    }

    console.log(`PAYE Deduction: Ksh ${paye}`);
    return paye;
}

// Test the calculator with example input
const basicSalary = parseFloat(prompt("Enter the basic salary: "));
const benefits = parseFloat(prompt("Enter the benefits: "));
calculateNetSalary(basicSalary, benefits);
