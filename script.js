function test() {
    let x = document.forms["validation"]["adress"].value;
    if (x == "") {
      alert("L'adresse est vide :(");
      return false;
    }
  }