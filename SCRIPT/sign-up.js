import {navbar,date,footer} from "../EXPORT_HUB/navbar.js";
     
// console.log(navbar);
// console.log(date)
// document.getElementById("loginfullbody").innerHTML = navbar()
// document.getElementById("date").innerHTML=date()
document.getElementById("footersection").innerHTML=footer()




    class user {
        constructor(n, e, p) {
            this.name = n
            this.email = e
            this.password = p
        }
    }

    let userdata = JSON.parse(localStorage.getItem("userinfo")) || []
          
    document.querySelector("#btn").addEventListener("click",signup)
    

    function signup() {
      console.log("hi")
        let form = document.querySelector("form")
         

        let name = form.name.value
        let email = form.email.value
        let password = form.password.value

        let data = new user(name, email, password)
        if (checkemail(data.email) === true)
         {
            userdata.push(data)
            localStorage.setItem("userinfo", JSON.stringify(userdata))
            window.location.href = "login.html"
        } 
        else
         {
            alert("Account already exist")
        }
    }
    function checkemail(email) {
        let filtered = userdata.filter((el) => {
            return email === el.email
        })
        if (filtered.length > 0) {
            return false
        }
        else {
            return true
        }
    }