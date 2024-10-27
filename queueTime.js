// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input:
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output:
// The function should return an integer, the total time required.
function queueTime(customers, n) {
  if (n == 1) {
    //when there is 1 till
    //return sum of customers
    return customers.reduce((a, b) => a + b, 0);
  } else if (n > customers.length) {
    //when there are more tills than customers
    //return max customer time
    return Math.max(...customers);
  } else {
    //initialize the tills array with n zeros
    let tills = new Array(n);
    tills.fill(0);
    for (i in customers) {
      //find the index of the till with the minimum time
      let minTillIndex = tills.indexOf(Math.min(...tills));
      //assign the customer to this till
      tills[minTillIndex] += customers[i];
    }
    //the total time is the maximum time in tills array
    return Math.max(...tills);
  }
}

//Improved solution
function queueTime(customers, n) {
  let tills = new Array(n);
  tills.fill(0);
  for (i in customers) {
    let index = tills.indexOf(Math.min(...tills));
    tills[index] += customers[i];
  }
  return Math.max(...tills);
}
