"use strict";
const form = document.getElementById("form");

const address = document.getElementById("input");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    console.log(err);
    throw err;
  }

  const url = search(address.value, "https://www.google.com/search?q=%s");

  sessionStorage.setItem("url", __uv$config.prefix + __uv$config.encodeUrl(url))
  location.href = "/go.html"
});
