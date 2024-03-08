document.getElementById("date").innerHTML = Date();

function responseText(event) {
  event.preventDefault();
  let response = "Hoitsma on the Puter welcomes you, "
                + document.getElementById("name").value
                + "!!  We're glad you are doing "
                + document.getElementById("feeling").value + "!!";
  document.getElementById("response").innerHTML = response;
}

function polygon(event) {
    event.preventDefault();
    let number = document.getElementById("number").value, polygonName = "";
    number = Math.round(Math.abs(number));
    if (number == 0) {
        polygonName = "There is no polygon with 0 sides, silly!!";
    } else if (number == 1) {
        polygonName = "Henagon";
    } else if (number == 2) {
        polygonName = "Digon";
    } else if (number == 3) {
        polygonName = "Trigon";
    } else if (number == 4) {
        polygonName = "Tetragon";
    } else if (number == 5) {
        polygonName = "Pentagon";
    } else if (number == 6) {
        polygonName = "Hexagon";
    } else if (number == 7) {
        polygonName = "Heptagon";
    } else if (number == 8) {
        polygonName = "Octogon";
    } else if (number == 9) {
        polygonName = "Enneagon";
    } else if (number == 10) {
        polygonName = "Decagon";
    } else {
        polygonName = "You didn't follow my instructions :(";
    }
    alert(polygonName);
}

function randomHamsterName(event) {
    event.preventDefault();
    const hamsterNames = ["Hammy", "Nibbles", "Cookie", "Oreo", "Gizmo", "Peanut", "Nugget", "Biscuit", "Fluffy", "Hammond"];
    alert(hamsterNames[Math.floor(Math.random() * 10)]);
}

function randomHamsterBreed(event) {
    event.preventDefault();
    const hamsterBreeds = ["Syrian", "Dwarf Campbell Russian", "Siberian", "Roborovski Dwarf", "Chinese", "European"];
    alert(hamsterBreeds[Math.floor(Math.random() * 6)]);
}

function randomHamsterToy(event) {
    event.preventDefault();
    const hamsterToys = ["Exercise Ball", "Wooden Chew Toy", "Tunnel/Hidey Hole", "Wheel", "Climbing Toy", "Hanging Toy", "Digging Box"];
    alert(hamsterToys[Math.floor(Math.random() * 7)]);
}

function rodents(event) {
    event.preventDefault();
    const rodents = ["Capybara", "Chinchilla", "Rat", "Mouse", "Guinea Pig", "Beaver", "Pika", "Skwovet"];
    const rodentNum = Math.floor(Math.random() * 8);
    if (rodentNum == 2 || rodentNum == 3) {
        alert(rodents[rodentNum] + "- cheesed to meet you");
    } else if (rodentNum == 6) {
        alert(rodents[rodentNum] + "- EEP");
    }
    else if (rodentNum == 7) {
        alert(rodents[rodentNum] + "- a crime against nature");
    } else {
        alert(rodents[rodentNum]);
    }
}

function lucky(event) {
    event.preventDefault();
    const randomNum = Math.random();
    if (randomNum == 42) {
        alert("You are lucky");
    } else {
        alert("You are not lucky");
    }
}