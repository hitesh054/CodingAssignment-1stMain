function tickets(queue) {
    let currentBal = 0;
    let ticket = 25;
    if (queue[0] > 25 || queue.length == 0) {
        return false;
    }
    let result = queue.every(element => {
        //console.log("element---->", element);
        if (element == ticket) {
            currentBal += element
            return true;
        }
        currentBal -= (element - ticket);
        if (currentBal >= 25 || currentBal == 0) {
            //console.log("currentBal---->", currentBal);
            return true;
        } else {
            return false;
        }
    });
    return result ? "Yes" : "NO"
}

console.log(tickets([25, 25, 50])); // => YES
console.log(tickets([25, 100, 25])); // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])); // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
