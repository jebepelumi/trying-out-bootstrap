const loginBtn = 
document.getElementById("btnlogid");

loginBtn.addEventListener("click", function(){
    let usertxt = document.getElementById("userid").value;
    let passtxt = document.getElementById("passid").value;
    const alertDiv = document.getElementById("alertid")


    if(usertxt === ""|| passtxt === ""){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `Please fill all fields`   
    }
    else if(usertxt.length < 5){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `Username should be 5 charcters and above`   
    }
    else if(passtxt.length < 8){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `password
         should be 8 charcters and above`   
    }
    else{
        alertDiv.classList.add("d-none")
    }
    
});


const loginBtn1 = 
document.getElementById("fbbtnlogin");

loginBtn1.addEventListener("click", function(){
    let usertxt = document.getElementById("userfa").value;
    let passtxt = document.getElementById("passfa").value;
    const alertDiv = document.getElementById("fbalertid")


    if(usertxt === ""|| passtxt === ""){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `Please fill all fields`   
    }
    else if(usertxt.length < 5){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `Username should be 5 charcters and above`   
    }
    else if(passtxt.length < 8){
        alertDiv.classList.remove("d-none");
        alertDiv.classList.replace("alert-success", "alert-danger")
        alertDiv.innerHTML = `password
         should be 8 charcters and above`   
    }
    else{
        alertDiv.classList.add("d-none")
    }
    
});


// const loginBtn1 = 
// document.getElementById("fbbtnlogin");

// loginBtn1.addEventListener("click", function(){
//     let usertxt = document.getElementById("userfa").value;
//     let passtxt = document.getElementById("passfa").value;
//     const alertDiv = document.getElementById("fbalertid")


//     if(usertxt === ""|| passtxt === ""){
//         alertDiv.classList.remove("d-none");
//         alertDiv.classList.replace("alert-success", "alert-danger")
//         alertDiv.innerHTML = `Please fill all fields`   
//     }
//     else if(usertxt.length < 5){
//         alertDiv.classList.remove("d-none");
//         alertDiv.classList.replace("alert-success", "alert-danger")
//         alertDiv.innerHTML = `Username should be 5 charcters and above`   
//     }
//     else if(passtxt.length < 8){
//         alertDiv.classList.remove("d-none");
//         alertDiv.classList.replace("alert-success", "alert-danger")
//         alertDiv.innerHTML = `password
//          should be 8 charcters and above`   
//     }
//     else{
//         alertDiv.classList.add("d-none")
//     }
    
// });



