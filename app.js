//   "https://sheltered-scrubland-49038.herokuapp.com/http://career.dijitalgaraj.com/hash/murat-can-yuksel-14382",
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
    console.log(data)
  );
