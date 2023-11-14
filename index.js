// Code your solution in this file
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    let distanceInBlocks = distanceFromHqInBlocks(pickupLocation);

    let feetPerBlock = 264;
    let distanceInFeet = distanceInBlocks * feetPerBlock;

    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
    const blockLength = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * blockLength;
    
    let price;
    if (distanceInFeet <= 400) {
        price = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        price = 0.02 * (distanceInFeet - 400);
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        price = 25;
    } else if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }

    return price;
}