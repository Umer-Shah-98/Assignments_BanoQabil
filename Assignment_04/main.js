// 1. Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.
console.log("--------------------Task 01--------------------");

const sumOfEvenNumbers=(numbers)=> {
    let evenNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        numbers[index] % 2 === 0 ? evenNumbers.push(numbers[index]) : 0;
    }
    return evenNumbers.reduce((a, b) => a + b, 0)
}
let sum = sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(sum);

// 2. Write a function that takes a string as input and returns the number of vowels in the string.
console.log("--------------------Task 02--------------------");

const numberOfVowels=(myString)=>{
    const reg = /[aeiou]/gi;
    let chars = myString.match(reg);
    return chars.length;
}
let counter = numberOfVowels("My name is Umer Shah, and I am a student of Web Development at Bano Qabil IT centre.");
console.log(counter);


// 3. Write a function that takes an array of strings as input and returns the length of the longest string in the array.

console.log("--------------------Task 03--------------------");

//  const strings =;

 const longestString =(myArray)=>{
    return myArray.reduce((str1,str2)=>{
        return str1.length-str2.length>0? str1:str2;
    })
 }
console.log(longestString(['short','medium','first long string','Bano Qabi','Javascript']));

// 4. Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.

console.log("--------------------Task 04--------------------");

// const numbers=;

const averageOfNumbers=(numbers)=>{
     let res =numbers.reduce((a,b)=>a+b,0);
     return res/numbers.length;
    

}
console.log(averageOfNumbers([1,3,5,7,9,11,13,15,17,19]));

// 5. Write a function that takes an object as input and returns an array of all the keys in the object.

console.log("--------------------Task 05--------------------");

 let myObject = {
    Name: 'Umer Shah',
    Roll_No: 39,
    Batch: '19/F',
    Dept: 'BSCS'
 };

 const objectKeys=(myObject)=>{
    return Object.keys(myObject);
 }

 console.log(objectKeys(myObject));


//  6. Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object. 

console.log("--------------------Task 06--------------------");

const cars = [
    {
        make: "Honda",
        model: "Civic",
        year:2017,
        color: "navy blue"
    },
    {
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "white"

    },
    {
        make: "Suzuki",
        model: "Alto",
        year:2023,
        color: "grey"
    },
    {
        make: "KIA",
        model: "Picanto",
        year:2017,
        color: "pink"
    }
];

const specificKeyOfAllObjects=(cars)=>{
    let arrayOfAllValues = [];
    for (let i=0; i<cars.length; i++){
       if(i>=0){arrayOfAllValues.push(cars[i].model)}
    }
    return arrayOfAllValues;
}
console.log(specificKeyOfAllObjects(cars));


// 7. Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.
console.log("--------------------Task 07--------------------");
const arrayOfUniqueStrings = (myStringArray) => {
  const uniqueStrings = [];
  myStringArray.forEach(element => {
    if (!uniqueStrings.includes(element)) {
      uniqueStrings.push(element);
    }
  });
  return uniqueStrings;
}

let task_7= arrayOfUniqueStrings(['dell', 'hp', 'asus', 'lenovo', 'apple', 'samsung', 'toshiba','acer','dell','hp','lenovo']);
console.log(task_7);

// 8. Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.
console.log("--------------------Task 08--------------------");

const productOfAllNumbers=(numberArray)=>{
    return numberArray.reduce((a,b)=> a*b);
}

let task_8 = productOfAllNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log(task_8);




