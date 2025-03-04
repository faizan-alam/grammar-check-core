function redirectIfAuthenticated() {
  const user = localStorage.getItem("user");

  if (user) {
    if (
      window.location.pathname === "/login.html" ||
      window.location.pathname === "/signup.html"
    ) {
      window.location.href = "/index.html";
    }
  } else {
    if (
      window.location.pathname !== "/login.html" &&
      window.location.pathname !== "/signup.html"
    ) {
      window.location.href = "/login.html";
    }
  }
}

redirectIfAuthenticated();

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "/login.html";
});
