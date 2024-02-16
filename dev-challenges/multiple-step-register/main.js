import "./style.css";

const button = document.getElementById("button");
const cards = document.querySelectorAll(".card-item");
const stepIndicator = document.querySelectorAll(".step-indicator");
const summaryName = document.querySelector(".summary-name");
const summaryEmail = document.querySelector(".summary-email");
const topicList = document.querySelector(".topic-list");

const topics = document.querySelectorAll(".topic");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

button.addEventListener("click", moveToNext);

let activeCardIndex = 0;
let activeStepIndicatorIndex = 0;
let selectedTopics;

function moveToNext() {
  if (activeCardIndex >= 2) return;

  selectedTopics = Array.from(topics)
    .map((item) => {
      if (item.checked) return item.value;
    })
    .filter((item) => item !== undefined);

  if (nameInput.value === "" || emailInput.value === "") return;

  if (activeCardIndex === 1 && selectedTopics.length === 0) return;

  const activeCard = cards[activeCardIndex];
  const activeStepIndicator = stepIndicator[activeStepIndicatorIndex];
  const nextCard = cards[++activeCardIndex];
  const nextIndicator = stepIndicator[++activeStepIndicatorIndex];

  activeCard.classList.add("hidden");
  nextCard.classList.remove("hidden");
  nextCard.classList.add("block");
  activeStepIndicator.classList.remove("active-circle");
  nextIndicator.classList.add("active-circle");

  if (activeCardIndex === 2) {
    const name = nameInput.value;
    const email = emailInput.value;

    const nameEl = document.createElement("p");
    nameEl.textContent = name;
    const emailEl = document.createElement("p");
    emailEl.textContent = email;

    summaryName.appendChild(nameEl);
    summaryEmail.appendChild(emailEl);

    const fragment = new DocumentFragment();
    for (let item of selectedTopics) {
      const li = document.createElement("li");
      li.textContent = item;
      fragment.appendChild(li);
    }

    topicList.appendChild(fragment);

    button.innerText = "Confirm";
  }
}
