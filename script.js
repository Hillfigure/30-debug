const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    // { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    // { name: "A. Curry", profession: "kikvorsman", age: 32 },
    // { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    // { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    // { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  const date = new Date();
  let currentYear = date.getFullYear();
  console.log(currentYear);

  for (let person of array) {
      // 1. Log all objecten in de loop
      console.log("Dit is de gehele persoon:", person)
      // 2. Alleen de naam
      console.log("Deze persoon heet: ", person.name)
      // 3. geboortejaar
      console.log("Geboortejaar: ", (currentYear - person.age))
      // 4. namen + beroep
      console.log(person.name + " is een " + person.profession)
      // 5. if statement person > 50
      if (person.age > 50) {
          console.log("Ouder dan 50")
      }
    }
