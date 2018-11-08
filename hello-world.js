function HelloConsole() {
  console.log("Hello, World!");
}
function HelloPopup() {
  window.alert("Hello, World!");
}
function HelloBrowser() {
  document.getElementById('Hello_Browser').innerHTML = 'Hello, World!';
}
function HelloStranger() {
  var retVal = prompt("Enter Your Name Please : ", "Your Name");
  document.write("Welcome, " + retVal);
}
