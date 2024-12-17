document.addEventListener ("DOMContentLoaded", () => {
     const form = document.getElementById("myForm")
     form.addEventListener ('submit', function (event) ){
          event.preventDefault)
          name = document.getElementById("name")
          email = document.getElementById("email")
          message = document.getElementById("message")
          if (name && email && message) {
               alert('Form submitted successfully!\nName: ${name)\nEmail: ${email)\nMessage: ${message)');
          }
          else{
                alert('Fill all the fields!');
          }
     });
});
