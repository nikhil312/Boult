// code written by @webdev_guru
document.getElementById("send__btn").addEventListener("click", function (e) {
  var userValue = document.getElementById("user_value").value;
  var userMessage = document.getElementById("user_message").value;

  var send_message =
    "https://api.whatsapp.com/send?phone=+91" +
    userValue +
    "&text=" +
    userMessage;
  window.open(send_message);
  e.preventDefault();
  return false;
});
