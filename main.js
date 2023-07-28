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

function copyToClipboard(element) {
    copyText = element.innerHTML;
    navigator.clipboard.writeText(copyText)
    alert("Password copied to clipboard!")
}

function validatePassword() {
    let password = document.getElementById("password").value
    let passwordLength = password.length

    if (passwordLength < 6) { 
        errorMessage("Password is too short!") 
        return
    }
    else if (password.search(/[A-Z]/) == -1) { 
        errorMessage("Password needs to contain uppercase alphabet") 
        return
    }
    else if (password.search(/[0-9]/) == -1) { 
        errorMessage("Password needs to contain numbers") 
        return
    }
    else if (password.search(/[!@#\4%\^&\*\(\)\[\]\{\}\\\|'";:\/\>\<,\.]/) == -1) { 
        errorMessage("Password needs to include symbols") 
        return
    }
    
    alert("Your password is good to go!")
}

function errorMessage(message) { alert(message) }


// When content is fully loaded...
document.addEventListener("DOMContentLoaded", () => {
    buttonContainer = document.getElementById("u-container-button")
    generatorButton = document.getElementById("generatorButton")
    generatorMainSection = document.getElementById("generator")
    generatorOutput = document.getElementById("generator__output")
    submitGenerator = document.getElementById("submitGenerator")
    validatorButton = document.getElementById("validatorButton")
    validatorMainSection = document.getElementById("validator")
    submitValidator = document.getElementById("submitValidator")

    generatorButton.onclick = () => {
        toggleHide(buttonContainer);
        toggleHide(generatorMainSection);
    }
    submitGenerator.onclick = generatePassword
    generatorOutput.onclick = () => { copyToClipboard(generatorOutput) }
    validatorButton.onclick = () => {
        toggleHide(buttonContainer)
        toggleHide(validatorMainSection)
    }
    submitValidator.onclick = validatePassword
})