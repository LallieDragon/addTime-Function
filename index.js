const addTime = (time, integer) => {
  let splitTime = time.split(":");
  //Parses hour value from string and converts to integer
  let parsedHours = parseInt(splitTime[0])
  //Same for minutes here
  let parsedMinutes = parseInt(splitTime[1])

  //Test to make sure the values are correct
  // console.log("Parsed Hour: \t\t" + parsedHours)
  // console.log("Parsed Minutes: \t" + parsedMinutes)

  //First check the integer (minutes to add) to ensure that the number used is not to exceed 1440 (24 hours)
  let adjustedInt = checkNumberToAdd(integer)

  //Prints adjustedInteger which represents remainder of integer divided by 1440 minutes and will represent
  //the integer value passed in as a minute value under 1440 minutes / 24 hours
  // console.log("Adjusted Integer: \t" + adjustedInt)

  //finalHour variable equal to the integer value of the hours passed in times minutes in an hour plus
  //the adjusted integer value from line 21 and the parsed minutes value
  let finalHour
  if (time.includes("PM")) {
    finalHour = Math.floor(((parsedHours*60) + adjustedInt + parsedMinutes + 720)/60)
  } else {
    finalHour = Math.floor(((parsedHours*60) + adjustedInt + parsedMinutes)/60)
  }

  let finalMinutes = ((parsedHours*60) + adjustedInt + parsedMinutes) % 60

  let minuteStr

  // console.log("Final hour: " + finalHour)

  if (finalMinutes < 10) {
    minuteStr = "0" + finalMinutes
  } else {
    minuteStr = finalMinutes
  }

  if ((finalHour === 24) || (finalHour === 13) || (finalHour < 12)) {
    let result

    if (finalHour === 24 || finalHour === 13) {
      result = (finalHour - 12) + ":" + minuteStr + " AM"
    } else {
      result = finalHour + ":" + minuteStr + " AM"
    }

    console.log("Resulting Time from Functions: " + result)
  } else if (finalHour === 12) {
    let result = finalHour + ":" + minuteStr + " PM"
    console.log("Resulting Time from Functions: " + result)
  }  else {
    let result = (finalHour - 12) + ":" + minuteStr + " PM"
    console.log("Resulting Time from Functions: " + result)
  }
}

//If the integer passed into addTime is greater than 1440 (the number of minutes in a day)
//we remove the number of hours in excess of 24 in order to remain within the 24 hour limit
const checkNumberToAdd = (integer) => adjustedInt = (integer % 1440)

const main = () => {
  let testData = require('./test-data.json')
  let times = testData.times
  let numbersToAdd = testData.numbers
  let expectedResults = testData.expected_results

  for (let i = 0; i < times.length; i++) {
    console.log(i + ") ")
    console.log("Expected Result:\t\t" + expectedResults[i])
    addTime(times[i], numbersToAdd[i])
  }
}

main();
