const container = document.querySelector(".container");
const big = document.querySelector(".big");
const keyItem = document.querySelector(".key");
const codeItem = document.querySelector(".code");
const keyCodeItem = document.querySelector(".key-code");

document.addEventListener("keydown", function (e) {
  big.classList.add("hidden");
  container.classList.remove("hidden");

  const key = e.key === " " ? "Space" : e.key;
  const code = e.code;
  const keyCode = e.keyCode;

  keyItem.querySelector("p").innerText = key;
  codeItem.querySelector("p").innerText = code;
  keyCodeItem.querySelector("p").innerText = keyCode;
});
