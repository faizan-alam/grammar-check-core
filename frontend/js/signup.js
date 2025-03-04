document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupBtn = document.getElementById("signupBtn");

  fullNameInput.addEventListener("change", () => {
    clearErrors(fullNameInput);
    validateFullName();
  });

  emailInput.addEventListener("change", () => {
    clearErrors(emailInput);
    validateEmail();
  });

  passwordInput.addEventListener("change", () => {
    clearErrors(passwordInput);
    validatePassword();
  });

  signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    clearAllErrors();
    if (!validateFullName() || !validateEmail() || !validatePassword()) return;

    showLoader(signupBtn);

    try {
      const response = await fetch("https://open-ai-grammer-checker-core.vercel.app/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fullNameInput.value,
          email: emailInput.value.trim(),
          password: passwordInput.value,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        showToast("Registered Successful");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
      } else {
        showToast(result.message || "Email already in use.", false);
      }
    } catch (error) {
      showToast("Something went wrong. Try again later.", false);
    } finally {
      hideLoader(signupBtn, "Signup");
    }
  });
});
