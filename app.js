let myName = "Will Kirkpatrick"

console.log("Name: " + myName);
console.log("Job: Game Master at Breakout Birmingham");
console.log("Description: I am definitely a human");

console.log("Interests:");
console.log("* Tabletop Games");
console.log("* Video Games");
console.log("* Game Design");
console.log("* Good Stories");

function displayPosition(companyName, jobTitle, description) {
    console.log("* " + jobTitle + ' at ' + companyName + " - " + description);
}

function displaySkill(skill, cool) {
    if (cool == true) {
        console.log("* BAM: " + skill);
    } else {
        console.log("* " + skill)
    }
}
console.log("My Previous Experience:");
displayPosition("Ayres Composite Panels", "Factory Laborer", "Worked in a general factory environment making giant aluminum panels");
displayPosition("University of Montevallo", "Microfridge Technician", "Transported and Repaired university appliances, mainly refrigerators.");
displayPosition("Breakout Brimingham", "Game Master", "Supervised games being played by customers to ensure the experience is as safe and fun as possible");

console.log("My Skills:");
displaySkill("Guitar", true);
displaySkill("Brewing Beer",true);
displaySkill("Technical Writing", false);
displaySkill("Dungeon Mastering", true);
displaySkill("Game Design", true);
displaySkill("TCGs", true);
