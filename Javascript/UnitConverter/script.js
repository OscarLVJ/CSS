/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = document.getElementById("unitInput");
let converLength = document.getElementById("lengthConversion");
let converVolume = document.getElementById("volumeConversion");
let converMass = document.getElementById("massConversion");
let actionConversion = document.getElementById("actionConversion");

const feet = 3.28084;
const gallon = 0.264;
const pound = 2.204;
function converMeterToFeet(unit) {
  return feet * unit;
}
function converFeetToMeter(unit) {
  return unit / feet;
}
function converLiterstoGallons(unit) {
  return unit * gallon;
}
function converGallonsToLiters(unit) {
  return unit / gallon;
}
function converKilosToPounds(unit) {
  return unit * pound;
}
function converPoundsToKilos(unit) {
  return unit / pound;
}
function flashButton(msg, ms = 1200) {
  const oldText = actionConversion.textContent;
  actionConversion.textContent = msg;
  actionConversion.disabled = true;
  setTimeout(() => {
    actionConversion.textContent = oldText;
    actionConversion.disabled = false;
  }, ms);
}
actionConversion.addEventListener("click", function () {
  if (!userInput.value) {
    flashButton("Enter a value");
    return;
  }
  const inpValue = userInput.value;
  converLength.textContent = `${inpValue} meters = ${converMeterToFeet(inpValue)} feet | ${inpValue} feet = ${converFeetToMeter(inpValue)} meters`;
  converVolume.textContent = `${inpValue} liters = ${converLiterstoGallons(inpValue)} gallons| ${inpValue} gallons = ${converGallonsToLiters(inpValue)} liters`;
  converMass.textContent = `${inpValue} kilos = ${converKilosToPounds(inpValue)} pounds| ${inpValue} pounds = ${converPoundsToKilos(inpValue)} kilos`;
  userInput.value = "";
});
