let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = true
const runnerAge = 21

if (runnerAge >= 18 && earlyRegistration === true) {
    raceNumber + 1000
}
if(runnerAge >= 18 & earlyRegistration === true) {
    console.log(`Runner number ${raceNumber + 1000} will race at 9:30 am.`)
}
else if(runnerAge >=18 && earlyRegistration === false) {
    console.log(`Runner number ${raceNumber} will race at 11 am.`)
}
else if(runnerAge < 18) {
    console.log(`Runner number ${raceNumber} will race at 12:30 pm.`)
}
