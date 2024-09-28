//A student is taking a test on n different subjects. For each i th subject they have already answered answered[i] questions and have time to answer a total of q more questions overall. For each i th subject, the number of questions answered has to be at least needed{i] in order to pass. Determine the maximum number of subjects the student can pass if the q additional answered questions are optimally distributed among the subjects.
function maxSubjectsNumber(answered, needed, q) {
  let subjects = [];

  // Step 1: Calculate how many more questions are needed to pass each subject
  for (let i = 0; i < answered.length; i++) {
    let required = Math.max(needed[i] - answered[i], 0); // Only consider subjects where more questions are needed
    subjects.push(required);
  }

  // Step 2: Sort the subjects by the number of required questions in ascending order
  subjects.sort((a, b) => a - b);

  let passedSubjects = 0;

  // Step 3: Distribute the additional questions q optimally
  for (let i = 0; i < subjects.length; i++) {
    if (q >= subjects[i]) {
      q -= subjects[i]; // Use the needed questions to pass this subject
      passedSubjects++; // Increment the number of subjects passed
    } else {
      break; // If we don't have enough questions left, stop
    }
  }

  return passedSubjects;
}

// Example usage:
let answered = [2, 4];
let needed = [4, 5];
let q = 1;

console.log(maxSubjectsNumber(answered, needed, q)); // Output: 1
