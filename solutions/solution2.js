// Solution 2: Speed Detector

function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointThreshold = 12;

    // Check if the speed is below the limit
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Points:", demeritPoints);

        // Check if the points exceed the threshold
        if (demeritPoints > demeritPointThreshold) {
            console.log("License suspended");
        }
    }
}

// Example usage
speedDetector(80);  // You can change this value to test different speeds
