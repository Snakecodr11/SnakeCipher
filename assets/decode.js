function first(str, shift = 3) {
    return str.replace(/[a-zA-Z]/g, (char) => {
        const base = char >= 'a' ? 97 : 65;
        return String.fromCharCode(((char.charCodeAt(0) - base - shift + 26) % 26) + base);
    });
}

function second(str, shift = 5) {
    return str
        .split("")
        .map((char) => String.fromCharCode(char.charCodeAt(0) - shift))
        .join("");
}

function third(str) {
    return btoa(str);
}

function fourth(str) {
    return str
        .split(" ")
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
}

function decodeText() {
    const inputText = document.getElementById("decode").value;
    let result = fourth(inputText);
    result = third(result);
    result = second(result);r
    result = first(result);
    document.querySelector(".decodedmessage").textContent = result;
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("decodemessage").addEventListener("click", decodeText);
