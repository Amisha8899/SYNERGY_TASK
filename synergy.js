var name = document.getElementById("name")
var email = document.getElementById("email")
var msg = document.getElementById("msg")
var sub = document.getElementById("sub")
function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: name,
        Password: "Enter your password",
        To: 'amishadixit39@gmail.com',
        From: email,
        Subject: sub,
        Body: msg,
      })
        .then(function (message) {
          alert("mail sent successfully")
          setInterval(reload(),2000)
        });
    }
