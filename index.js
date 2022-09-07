function getDataConnexion() {
  let email = document.getElementById("connexionEmail").value.trim();
  let password = document.getElementById("passwordConnexion").value.trim();

  if (email.length > 0 && password.length > 0) {
    alert("Correct" + email + password);
  } else {
    alert("Empty");
  }
}
function cancel() {
  document.getElementById("connexionEmail").value = "";
  document.getElementById("passwordConnexion").value = "";
  alert("cancel");
}
/*test de git  */
