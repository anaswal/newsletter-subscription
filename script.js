const email = document.getElementById("email");
const form = document.getElementById("form");
const thanks = document.getElementById("thanks");
const card = document.querySelector(".card");
const cardSuccess = document.querySelector(".card-success");

form.onsubmit = (e) => {
  e.preventDefault();
  card.classList.add("hide");
  cardSuccess.classList.remove("hide");
  thanks.innerHTML = `A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscribtion.`;
};
