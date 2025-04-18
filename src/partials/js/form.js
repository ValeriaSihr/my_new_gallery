const STORAGE_KEY = "feedback-form-data";

let formData = {
  email: "",
  message: "",
}

const form = document.querySelector(".feedback-form")
const emailInput = document.querySelector("[name = 'email']");
const messageInput = document.querySelector("[name = 'message']");

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData)
  emailInput.value = formData.email || "";
  messageInput.value = formData.message || "";

}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  };
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Plese, fill all fields!");
    return;
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: "",
    message: "",
  };
  form.reset();
})
