const names = ["Musa", "Sasha", "Alim", "Beka"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  console.log(el);
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);
console.log(result);

//-----------------------------------------

function greeting(firstName) {
  return function (lastName) {
    return `Hello, ${firstName} ${lastName}`;
  };
}
const testGreeting = greeting("Mustafa");
const fullName = testGreeting("Kozhaisakov");
const fullName2 = greeting("Mustafa")("Kozhaisakov!");
console.log(fullName);
console.log(fullName2);

//-----------------------------------------

function question(job) {
  jobDictionary = {
    developer: "что такое JavaScript?",
    teacher: "какой предмет вы ведете?",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}`;
  };
}
const developerQuestion = question("developer");
console.log(developerQuestion("Mustafa"));
