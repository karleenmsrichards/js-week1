const amtOfTrainees = "Number of trainees: ";
const numberOfTrainees = 36;

console.log (amtOfTrainees + numberOfTrainees);

const amtOfMentors = "Number of mentors: ";
const numberOfMentors = 10;

console.log (amtOfMentors + numberOfMentors);

const sum = 36 + 10;
console.log ("Total number of trainees and mentors: " + sum);

// of 46 is 36

const percentTrainees = (numberOfTrainees / sum * 100);
const roughTrainPercentage = Math.round(percentTrainees)
console.log ("Percentage of Trainees: " + roughTrainPercentage + "%");

const percentMentors = (numberOfMentors / sum * 100);
const roughMenPercentage = Math.round(percentMentors)

console.log ("Percentage of Mentors: " + roughMenPercentage + "%");

