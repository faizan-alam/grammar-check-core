function showToast(message, success = true) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hide"); 
    toast.classList.add("show");
    toast.style.background = success ? "#28a745" : "#dc3545";
  
    setTimeout(() => {
      toast.classList.remove("show");
      toast.classList.add("hide");
    }, 3000);
  }

function validateFullName() {
  const fullName = document.getElementById("fullName");
  const value = fullName.value.trim();

  if (value.length < 3) {
    showError(fullName, "Full Name must be at least 3 characters");
    return false;
  }
  if (/\d/.test(value)) {
    showError(fullName, "Name Contains Letters Only.");
    return false;
  }
  return true;
}

function validateEmail() {
  const email = document.getElementById("email");
  const value = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(value)) {
    showError(email, "Enter a valid email");
    return false;
  }
  return true;
}

function validatePassword() {
  const password = document.getElementById("password");
  if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters long");
    return false;
  }
  return true;
}

function showError(input, message) {
  clearErrors(input);
  input.style.border = "1px solid red";

  const errorDiv = document.createElement("div");
  errorDiv.className = "error";
  errorDiv.style.color = "red";
  errorDiv.style.fontSize = "12px";
  errorDiv.innerText = message;

  input.parentNode.insertBefore(errorDiv, input.nextSibling);
}

function clearErrors(input) {
  input.style.border = "";
  let nextElement = input.nextElementSibling;
  if (
    nextElement &&
    nextElement.classList &&
    nextElement.classList.contains("error")
  ) {
    nextElement.remove();
  }
}

function clearAllErrors() {
  document.querySelectorAll(".error").forEach((e) => e.remove());
  document
    .querySelectorAll("input")
    .forEach((input) => (input.style.border = ""));
}

function showLoader(button) {
  button.disabled = true;
  button.innerHTML = `<span class="loader"></span>`;
  button.style.backgroundColor = "gray";
}

function hideLoader(button, originalText) {
  button.disabled = false;
  button.style.backgroundColor = "#007bff";
  button.innerHTML = originalText;
}
