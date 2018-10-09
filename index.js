firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
   document.getElementById("user_div").style.display = "initial";
   document.getElementById("login").style.display = "none";


  } else {

    
   document.getElementById("user_div").style.display = "none";
   document.getElementById("login").style.display = "initial";



  }
});


fuction login(){
	window.alert("Llena el Campo de Registro");

var userEmail= document.getElementById("email_field").value;
var userPassword= document.getElementBy("password_field").value;




firebase.auth().createUserWithEmailAndPassword(userEmail,userPassword ).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...




window.alert("Error:" + errorMessage);

});



}