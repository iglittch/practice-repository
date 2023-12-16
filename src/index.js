function orderButton() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?💬");
  let tea = prompt("What tea would you like to order? 🍵");
  alert("Almost done!");
  let answer = prompt("Would you like to join our newsletter? yes/no");

  answer.toLowerCase();
  if (answer === "yes") {
    alert(
      `Hi ${name} ,Further details of your order have been emailed to you. Thank you for your order as well for signing up for the newsletter. Have a wonderful day😊`
    );
  } else {
    if (answer === "no") {
      alert(
        `Hi ${name} ,Further details of your order have been emailed to you. Thank you for your order and have a wonderful day😊`
      );
    }
  }
}

let application = document.querySelector("button");
application.addEventListener("click", orderButton);
