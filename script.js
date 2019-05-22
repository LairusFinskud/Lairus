window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Denne siden har JavaScript!');



  var toggleAboutUsButton = document.getElementById("about-us");
  var togglePrivacyPolicyButton = document.getElementById("privacy-policy");
  var toggleContactUs = document.getElementById("contact-us");

  toggleAboutUsButton.style.display = "none";
  togglePrivacyPolicyButton.style.display = "none";
  toggleContactUs.style.display = "none";

});


function toggelAboutUs() {
  var x = document.getElementById("about-us");
  console.log(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log(x);
}

function toggelPrivacyPolicy() {
  var x = document.getElementById("privacy-policy");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggelContactUs() {
  var x = document.getElementById("contact-us");
  console.log(x);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  console.log(x);
}
