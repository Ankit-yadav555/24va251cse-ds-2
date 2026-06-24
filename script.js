function checkNumber() {

    let number = document.getElementById("num").value;

    if(number === ""){
        document.getElementById("result").innerHTML = "Please Enter a Number";
        return;
    }

    if(number % 2 == 0){
        document.getElementById("result").innerHTML =
        number + " is an Even Number";
    }
    else{
        document.getElementById("result").innerHTML =
        number + " is an Odd Number";
    }

}