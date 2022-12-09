function test() {
    
    if (document.forms["validation"]["adress"].value == "") {
      alert("L'adresse est vide :(");
      return false;
    }
    else
    {
        alert("Données envoyées");
        window.location.reload();
        return true;   
    }
  }