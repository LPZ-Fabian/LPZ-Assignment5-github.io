// Initialize buttons based on ID values
const bigger = document.getElementById("Bigger");
const fancy = document.getElementById("Fancy");
const boring = document.getElementById("Boring");
const moo = document.getElementById("Moo");

// Retrieve Text Area ID for DOM manipulation
const txtArea = document.getElementById("TextArea");

bigger.addEventListener("click", () => {
  txtArea.style.fontSize = "24pt";
});

fancy.addEventListener("change", () => {
  txtArea.style.color = "blue";
  txtArea.style.textDecoration = "underline";
  txtArea.style.fontWeight = "bold";
});

boring.addEventListener("change", () => {
  txtArea.style.fontWeight = "normal";
  txtArea.style.color = "black";
  txtArea.style.textDecoration = "none";
});

moo.addEventListener("click", () => {
  // Convert text to upper Case
  txtArea.value = txtArea.value.toUpperCase();
  // Add Moo suffix
  let textArr = txtArea.value.split(".");
  txtArea.value = textArr.join("-Moo.");
});
