document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.getElementById("loginBtn");
  emailInput.addEventListener("change", () => {
    clearErrors(emailInput);
    validateEmail();
  });
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    clearAllErrors();

    if (!validateEmail()) return;
    showLoader(loginBtn);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.value.trim(),
          password: passwordInput.value,
        }),
      });

      const result = await response.json();
      console.log("🚀 ~ result:", result);

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result.user));
        showToast("Login Successful");

        setTimeout(() => {
          window.location.href = "/index.html";
        }, 1000);
      } else {
        showToast(result.message || "Invalid email or password.", false);
      }
    } catch (error) {
      showToast("Something went wrong. Try again later.", false);
    } finally {
      hideLoader(loginBtn, "Login");
    }
  });
});
