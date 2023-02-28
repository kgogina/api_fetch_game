// *The event listener
document.getElementById("btn").addEventListener("click", function () {
  // *RandomPerson
  let randomPerson = Math.floor(Math.random() * (83 - 1 + 1) + 1);

  // *The fetch API

  fetch(`https://swapi.dev/api/people/${randomPerson}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("name").value = "name: " + data.name;
      document.getElementById("birth_year").value = "birth year: "+data.birth_year;
      document.getElementById("gender").value = "gender: "+data.gender;
    })
    .catch((error) => console.log(error));
});
