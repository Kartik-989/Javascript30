let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let email = document.querySelector("#email")
let tele = document.querySelector("#tele")
let pass = document.querySelector("#pass")
let bio = document.querySelector("#bio")
let pfname = document.querySelector("#fnameVal")
let plname = document.querySelector("#lnameVal")
let pemail =document.querySelector("#mailVal")
let ptele =document.querySelector("#telVal")
let ppass =document.querySelector("#passVal")
let pbio =document.querySelector("#bioVal")


fname.addEventListener("keyup",()=>{
    let reg =/^[a-zA-Z0-9]{4,16}$/
    if(reg.test(fname.value)){
        fname.style.outlineColor="green"
        fname.style.border = "2px solid green"
        pfname.innerHTML= ""
    }
    else{
        pfname.innerHTML= "First name must be alphanumeric and contain 3-16 charcters "
        fname.style.outlineColor="red"
        fname.style.border = "1px solid red"
    }
})

lname.addEventListener("keyup",()=>{
    let reg =/^[a-zA-Z0-9]{4,16}$/
    if(reg.test(lname.value)){
        lname.style.outlineColor="green"
        lname.style.border = "2px solid green"
        plname.innerHTML= ""
    }
    else{
        plname.innerHTML= "Last name must be alphanumeric and contain 3-16 charcters "
        lname.style.outlineColor="red"
        lname.style.border = "1px solid red"
    }
})

email.addEventListener("keyup",()=>{
    let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(reg.test(email.value)){
        email.style.outlineColor="green"
        email.style.border = "2px solid green"
        ptele.innerHTML= ""
    }
    else{
        pemail.innerHTML= "Email must be valid address, e.g - example@example.com"
        email.style.outlineColor="red"
        email.style.border = "1px solid red"
    }
})

pass.addEventListener("keyup",()=>{
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/

    if(reg.test(pass.value)){
        pass.style.outlineColor="green"
        pass.style.border = "2px solid green"
        ppass.innerHTML= ""
    }
    else{
        ppass.innerHTML= "Password must contain alphanumeric (@,_ and - are allowed) and  between 6-20 charcters "
        pass.style.outlineColor="red"
        pass.style.border = "1px solid red"
    }

})
tele.addEventListener("keyup",()=>{
    let reg = /^[0-9]{3,3}-[0-9]{3,3}-[0-9]{4,4}$/

    if(reg.test(tele.value)){
        tele.style.outlineColor="green"
        tele.style.border = "2px solid green"
        ptele.innerHTML= ""
    }
    else{
        ptele.innerHTML= "A valid Telephone number (10 digit and 123-454-3212"
        tele.style.outlineColor="red"
        tele.style.border = "1px solid red"
    }
})

bio.addEventListener("keyup" , ()=>{
    let reg = /^[a-z_-\s]{8,50}$/

    if(reg.test(bio.value)){
        bio.style.outlineColor="green"
        bio.style.border = "2px solid green"
        pbio.innerHTML= ""
    }
    else{
        pbio.innerHTML= "Bio must contain only lowercase letters, underscores,hyphens and be 8-50 characters "
        bio.style.outlineColor="red"
        bio.style.border = "1px solid red"
    }
})


