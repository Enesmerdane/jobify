if(!localStorage.getItem("numberOfCompanies")){
    window.alert("buraya girdi");
    localStorage.setItem("numberOfCompanies", 0);
    localStorage.setItem("namesOfCompanies", JSON.stringify( {table: []} ) );

    window.alert(localStorage.getItem("numberOfCompanies"));
}

//window.alert(localStorage.registeredCompanies.length);

function handleSignUp(){
    let nameInput = document.getElementById("nameInput").value;
    let password1Input = document.getElementById("passwordInput").value;
    let password2Input = document.getElementById("repeatPassword").value;
    let emailInput = document.getElementById("emailInput").value;
    let addressInput = document.getElementById("inputAddress").value;
    let address2Input = document.getElementById("inputAddress2").value;
    let cityInput = document.getElementById("inputCity").value;
    let countryInput = document.getElementById("inputState").value;
    let zipInput = document.getElementById("inputZip").value;
    let agreementCheck = document.getElementById("agreementCheck").checked;

    let tempJSON = {
        nameInput: nameInput,
        password: password1Input,
        email: emailInput,
        address1: addressInput,
        address2: address2Input,
        city: cityInput,
        zip: zipInput
    }

    let namesOfCompanies = JSON.parse( localStorage.getItem("namesOfCompanies") );

    namesOfCompanies.table.push(nameInput);

    localStorage.setItem("namesOfCompanies", JSON.stringify(namesOfCompanies));

    let number = localStorage.getItem("numberOfCompanies");
    number = parseInt(number) + 1;
    localStorage.setItem("numberOfCompanies", number);

    //localStorage.registeredCompanies.push(JSON.stringify(tempJSON))
    localStorage.setItem(nameInput, JSON.stringify(tempJSON))
}


function handleSignUp2(){
    let nameInput = document.getElementById("nameInput").value;
    let password1Input = document.getElementById("passwordInput").value;
    let password2Input = document.getElementById("repeatPassword").value;
    let emailInput = document.getElementById("emailInput").value;
    let addressInput = document.getElementById("inputAddress").value;
    let address2Input = document.getElementById("inputAddress2").value;
    let cityInput = document.getElementById("inputCity").value;
    let countryInput = document.getElementById("inputState").value;
    let zipInput = document.getElementById("inputZip").value;
    let agreementCheck = document.getElementById("agreementCheck").checked;

    let checkList = [
        (nameInput !== ""), 
        checkPassword(password1Input), 
        checkPasswordPair(password1Input, password2Input), 
        checkEmail(emailInput), 
        (addressInput !== ""), 
        (address2Input !== ""),
        (cityInput !== ""),
        (countryInput !== ""),
        (zipInput !== ""),
        agreementCheck]

    if(!checkList[0]){
        window.alert("name field should be filled");
        return;
    }
    if(!checkList[1]){
        window.alert("invalid password");
        return;
    }
    if(!checkList[2]){
        window.alert("passwords doesn't match");
        return;
    }
    if(!checkList[3]){
        window.alert("invalid email");
        return;
    }
    if(!checkList[4]){
        window.alert("address field should be filled");
        return;
    }
    if(!checkList[5]){
        window.alert("address2 field should be filled");
        return;
    }
    if(!checkList[6]){
        window.alert("city field should be filled");
        return;
    }
    if(!checkList[7]){
        window.alert("country should be selected");
        return;
    }
    if(!checkList[8]){
        window.alert("zip field should be filled");
        return;
    }
    if(!agreementCheck){
        window.alert("you should accept the terms and conditions")
        return;
    }

    // Direct to the home page or whatelse

}

function checkPassword(pass){
    if( pass.length < 6 ){
        return false;
    }
    return true;
}

function checkPasswordPair(pass1, pass2){
    if( pass1 !== pass2){
        return false;
    }
    return true;
}

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}