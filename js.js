function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
  if(user == "damian" && pass == "1234"){
    alert("bienvenido Damian")
  }else{
    alert("no registrado")
  }
  
}