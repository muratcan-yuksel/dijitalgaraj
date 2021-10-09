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
//hash your own email address
// window.addEventListener("load", function () {
//   var strHash = md5("muratcanyukselpro@gmail.com");
//   alert("The MD5 hash of the tutsplus string is:" + strHash);
// });
var passhash = CryptoJS.MD5("muratcanyukselpro@gmail.com").toString();
console.log(passhash);

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
  console.log(arr);
}
getChar();
