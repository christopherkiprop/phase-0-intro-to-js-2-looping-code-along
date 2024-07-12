// Code your solutions in this file
function writeCards(names, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  function countDown(num) {
    let i = num;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  