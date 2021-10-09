//   "https://sheltered-scrubland-49038.herokuapp.com/http://career.dijitalgaraj.com/hash/murat-can-yuksel-14382",
//get the hash with PUT method
fetch(
  "https://sheltered-scrubland-49038.herokuapp.com/http://career.dijitalgaraj.com/hash/murat-can-yuksel-14382",
  {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ GUID: "6936bd53-d56e-4562-a53d-7df36beaa2d5" }),
  }
)
  .then((response) => {
    return response.json();
  })
  .then((data) =>
    // this is the data we get after putting our data,
    // console.log(data.hash.length / 32) results in 17
    //which means I have 17 substrings at hand
    //each one of them being 32 characters of length

    console.log(data.hash)
  );

//I have the data.hash in string.
let strHash =
  "b5579054ddb51ddd4b65cd7b493c68d3eff30993c8adf5b833499d151a405ca55f44f3cb35b82f67cfe97d860ac2952466b2d48d25c24c73fd2b37fe557f5a073ee104aab508875b6e2e3be065202c45c28922cc7e47a12bbf3e2c4634bdcc9a785572349b75e25af200a03a266f43c76bca4ab6e88e167a0c23a4f9f2972b3b1e0beb12d00c71216b30ee69ca7433972f02f16b463cfcd0752e7c9a6a5a15f22c918d8f361fad7b01771a65fc1e7f91c15f15ac3ab7c9a117af984ae5b080763f6a95467b7f1a61e097df09dd35b0895cf7092facd3f145f1f5a159354af76cbb78204b112ec99024a3cdd1360a722e0fe8e10fc8cf9f59f4b6a6cd4f2bdd8be14917363736085e6adf1940b5005e9f";
// Let's turn it into an array
let arrHash = strHash.split("");
console.log("this is array " + arrHash);
//hash your own email address
// window.addEventListener("load", function () {
//   var strHash = md5("muratcanyukselpro@gmail.com");
//   alert("The MD5 hash of the tutsplus string is:" + strHash);
// });
var hashedEmail = CryptoJS.MD5("muratcanyukselpro@gmail.com").toString();
console.log(hashedEmail);

/*
now I need to write a function that takes 2 parameters a and b
I need to specify that these parameters can contain numbers, all english letters and special characters: + - . _ @
then, define an x variable that is equal to "a" + "b" (matbe use stringify to make sure of they are strings and not numbers etc)

*/
//create an array of all characters needed
function getChar() {
  let arr = [];
  for (let i = 32; i < 255; i++) {
    arr.push(String.fromCharCode(i));
  }
  //   console.log(arr);
  sessionStorage.setItem("characters", arr);
}
getChar();
let charArray = sessionStorage.getItem("characters");
//remove commas
let charArrayPlusComma = charArray.replace(/,/g, "").split("");
//add comma as a string as they've all been removed by the previous line
charArrayPlusComma.push(",");
console.log(charArrayPlusComma);

//remember we already saved the hash into an array named arrHash
// function split array into chunks
function splitToChunks(array, parts) {
  let chunkedArr = [];
  for (let i = parts; i > 0; i--) {
    chunkedArr.push(array.splice(0, Math.ceil(array.length / i)));
  }
  //   console.log(chunkedArr);
  return chunkedArr;
}
// split the array by calling the function splittochunks
let hashChunks = splitToChunks(arrHash, 17);
//this is how I decide to get the stringified version of a particular sub array
console.log(hashChunks[0].join(""));

function getElements() {
  for (let i = 0; i <= charArrayPlusComma.length; i++) {
    let a = charArrayPlusComma[i];
    for (let j = 0; j <= charArrayPlusComma.length; j++) {
      let b = charArrayPlusComma[j];
      let x = a + b;
      if (
        CryptoJS.MD5(
          CryptoJS.MD5("muratcanyukselpro@gmail.com").toString() +
            `job+132118120-2943@dijitalgaraj.${x}`.toString() +
            CryptoJS.MD5(`job+132118120-2943@dijitalgaraj.${x}`).toString()
        ).toString() === hashChunks[16].join("")
      ) {
        console.log("x ==> " + x); //x=== "jo"
        // sessionStorage.setItem("hashLines", x);
      }
    }
  }
}

getElements();

// second hash==> eff30993c8adf5b833499d151a405ca5
//second hash = "job+"
// console.log(sessionStorage.getItem("originalArr"));
// let originalArray = sessionStorage.getItem("originalArr");
// function foo5() {
//   console.log("arr " + originalArray);
// }
// foo5();
