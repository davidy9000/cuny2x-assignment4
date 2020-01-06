/********* Part 1 ****************/
//  sets innerHTML to I'm right
function buttonImRight1(){
    document.getElementById("words").innerHTML = "I'm Right"
}

//  sets innerHTML to No I'm right
function buttonImRight2(){
    document.getElementById("words").innerHTML = "No, I'm Right"
}

/************* Part 2 ***************/
//  sends alert for mouse hover
function dontHover(){
    alert("Hey, I told you not to hover over me!");
}

/************* Part 3 ****************/
function submitInfo( ){
    event.preventDefault()
    console.log(document.getElementsByName("username")[0].value);
    console.log(document.getElementsByName("email1")[0].value);
    console.log(document.getElementsByName("pass1")[0].value);

    let pass = document.getElementsByName("pass1")[0].value
    if(pass === "12345678"){
      document.querySelector("h1").innerHTML = "SUCCESS"
    }else{
      alert("Wrong Password")
    }


}
