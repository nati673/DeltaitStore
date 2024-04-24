function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Validate inputs
  if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
    alert("Please fill out all fields.");
    return; // Stop execution if any field is empty
  }
  const serviceID = "service_e2vwvy9";

  const templateID = "template_nn5hh49";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      alert("Your message sent successfully!");
    })
    .catch((err) => console.log(err));
}
