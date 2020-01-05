let miniswep = data => {
  let getCode = data.split(" ");
  let temp = 0;
  let count = 0;
  for (let a = 0; a <= getCode.length - 1; a++) {
    if (getCode[a] == 0 || temp == 2 || getCode[a] == temp) {
      temp = 0;
    } else {
      temp = getCode[a];
      count++;
    }
  }
  return count;
};

console.log(miniswep("0 1 1 0 0 0 0")); // 1
console.log(miniswep("1 0 0 0 0 0 1 2 1 0")); // 3
console.log(miniswep("0 0 0 0 0 0 0 0 0 0")); // 0
