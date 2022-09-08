const openNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.querySelector(".openbtn").style.display = "none";
};

const closeNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.querySelector(".openbtn").style.display = "block";
};

$(document).ready(function () {
  $(".submit").click(function (event) {
    console.log("clicked button");

    var email = $(".email").val();
    var subject = $(".subject").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Email is not valid</div>");
    }

    if (subject.length >= 2) {
      statusElm.append("<div>Subject is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Subject is not valid</div>");
    }

    if (message.length > 10) {
      statusElm.append("<div>Message is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Message is not valid</div>");
    }
  });
});
