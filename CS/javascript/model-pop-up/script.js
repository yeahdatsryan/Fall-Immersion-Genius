document.addEventListener ("DOMContentLoaded", () => {
     const form = document.getElementById("myForm");
     form.addEventListener ('submit', function (event) {
          event.preventDefault();
          uname = document.getElementById("name");
          email = document.getElementById("email");
          message = document.getElementById("message");
          if (uname && email && message) {
               alert(`Form submitted successfully!\nName: ${uname.value}\nEmail: ${email.value}\nMessage: ${message.value}`);
          }
          else{
                alert('Fill all the fields!');
          }
     });
});
