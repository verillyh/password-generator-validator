function toggleHide(element) {
    element.classList.toggle("u-hide")
}

function generatePassword() {
    /* Generate password based on some conditions */
    let passwordLength = document.getElementById("length").value
    let includeUppercase = document.getElementById("caps").checked
    let includeSymbols = document.getElementById("symbols").checked
    let includeNumbers = document.getElementById("number").checked
    let lowercaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
    let possibleCharacters = ""
    let uppercaseAlphabets = ""
    let symbols = ""
    let numbers = ""
    let password = ""

    if (includeUppercase) { uppercaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
    if (includeSymbols) { symbols = "!@#$%^&*()-_=+'\";:.>,<?/[]{}|\\`~"}
    if (includeNumbers) { numbers = "1234567890"}
    possibleCharacters = possibleCharacters.concat("", lowercaseAlphabets, 
                            uppercaseAlphabets, symbols, numbers);
    let possibleCharactersLength = possibleCharacters.length

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * 100)
        if (randomIndex >= possibleCharactersLength) { randomIndex %= possibleCharactersLength}
        password = password.concat("", possibleCharacters[randomIndex])
    }

    let output = document.getElementById("generator__output")
    let outputContainer = document.getElementById("u-container-output")

    toggleHide(outputContainer)
    output.innerHTML = password

}

// When content is fully loaded...
document.addEventListener("DOMContentLoaded", () => {
    generatorButton = document.getElementById("generatorButton")
    generatorMainSection = document.getElementById("generator")
    buttonContainer = document.getElementById("u-container-button")
    submitGenerator = document.getElementById("submitGenerator")

    generatorButton.addEventListener("click", () => {
        toggleHide(buttonContainer);
        toggleHide(generatorMainSection);
    })
    submitGenerator.addEventListener("click", generatePassword)    
})