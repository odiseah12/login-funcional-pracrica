function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if(user == "prueba" && pass == "1234"){
    alert("Correcto")
  }else{
    alert("los datos ingresado son invalido")
  }
  
}
