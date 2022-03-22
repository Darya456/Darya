menu.onclick = function Myfunction() {
  let topnav = document.getElementById("myTopnav");
  let icon = document.getElementById("menu");

  if (topnav.className === "") {
    topnav.classList.add("active");
    icon.innerHTML = "&#9747;";
  } else {
    topnav.classList.remove("active");
    icon.innerHTML = "&#9776;";
  }
};

const email = document.getElementById("email");
const form = document.forms[0];
form.addEventListener("submit", formSend);

async function formSend(e) {
  e.preventDefault();
  let formData = new FormData(form);

  if (emailTest(email.value)) {
    let response = await fetch("send.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();
    } else {
      alert("Ошибка отправки");
      form.reset();
    }
  } else {
    alert("Некоректный E-mail");
  }
}

function emailTest(email) {
  var re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(email).toLowerCase());
}
