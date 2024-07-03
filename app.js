function updateText(){
    var inputText = document.getElementById("inputText").value;

    var replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    var encryptedText = inputText.replace(/[aeiou]/g, function(match){
        return replacements[match.toLowerCase()] || match;
    });

    document.getElementById("outputText").textContent = encryptedText || "Esperando mensaje";
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;

    // Invertir el mapa de reemplazos para desencriptar
    var replacements = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Función para reemplazar cada secuencia encriptada según el mapa
    var decryptedText = inputText.replace(/(ai|enter|imes|ober|ufat)/g, function(match) {
        return replacements[match] || match;
    });

    document.getElementById("outputText").textContent = decryptedText || "Ningún mensaje fue encontrado";
}