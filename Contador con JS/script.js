//Variables

// document.getElementById("count").innerText = 5

// let count = 0

// console.log(count)

// let myAge = 25

// console.log(myAge)

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

// 1. Create two variables, myAge and humanDogRatio
// 2. Multiply the two together and store the result in myDogAge 
// 3. Log myDogAge to the console

// let myAge = 25
// let humanDogRatio = 7

// let count = myAge * humanDogRatio
// console.log(count)

// 1. Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// 2. Decrease it down to 25, and then finally increase it to 70

// let bonusPoints = 50
// console.log(bonusPoints)

// count = bonusPoints + 50
// console.log(count)

// count1 = count - 75
// console.log(count1)

// count2 = count1 + 45
// console.log(count2)


// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// Create a function that increments the lapsCompleted variable with one
// Run it three times

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEL = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
let count = 0

console.log(saveEL)

function increment() {
    count += 1
    countEL.textContent = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEL.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    countEL.textContent = 0
    count = 0
}



// let username = "per"

// 1. Create a variable, message, that stores the string: "You have tree new notifications"

// let message = "You have tree new notifications"

// console.log(message + ", " + username + "!")

// 1. Create a variable, messageToUser, that contains the message we have logged

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// 1. Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// 2. Create a third variable, myGreeting, that contatenates the two strings
// 3. Log myGreeting to the console

// let name = "Mauricio"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name 

// console.log(myGreeting)

