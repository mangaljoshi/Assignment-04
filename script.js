$(document).ready(function () {

  $("#toggle").click(function () {
    let pass = $("#password");
    if (pass.attr("type") === "password") {
      pass.attr("type", "text");
      $(this).text("Hide");
    } else {
      pass.attr("type", "password");
      $(this).text("Show");
    }
  });

  $("#myForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let password = $("#password").val();
    let confirm = $("#confirm").val();

    $("#message").html("");

    if (name === "") {
      showError("Name is required");
    } 
    else if (email === "") {
      showError("Email is required");
    }
    else if (!email.includes("@")) {
      showError("Invalid email format");
    }
    else if (phone.length !== 10 || isNaN(phone)) {
      showError("Phone must be 10 digits");
    }
    else if (password.length < 8) {
      showError("Password must be at least 8 characters");
    }
    else if (password !== confirm) {
      showError("Passwords do not match");
    }
    else {
      $("#message").html("<div id='success'>Form Submitted Successfully!</div>");
      $("#myForm")[0].reset();
    }
  });

  function showError(msg) {
    $("#message").html("<div id='error'>" + msg + "</div>");
  }

});
