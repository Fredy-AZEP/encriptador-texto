function updateText(){
    var inputText = document.getElementById("inputText").value;
    document.getElementById("outputText").textContent = inputText || "Esperando mensaje";
}