// wanna know what we use to encode the text? find out yourself, thats why it takes forever.
function first(str, shift = 3) {
    return str.replace(/[a-zA-Z]/g, (char) => {
        const base = char >= 'a' ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    });
}
function second(str, shift = 5) {
    return str
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt(0) + shift))
        .join("");
}
function third(str) {
    return btoa(str);
}
function fourth(str) {
    return str
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
}
function encode() {
    const inputText = document.getElementById("encode").value;
    let result = first(inputText);
    result = second(result);
    result = third(result);
    result = fourth(result);
    document.querySelector(".encodedmessage").textContent = result;
}
// encode when you click the button, text field enter didnt work
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("encodemessage").addEventListener("click", encodeText);
