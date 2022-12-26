let remain = document.querySelector(".remaining");
let textArea = document.querySelector("#textDiv");
let totalCount = document.querySelector(".total");
let spansDiv = document.querySelector(".spansDiv");

textArea.addEventListener("input", () => {
  remain.innerText =
    "Remaining: " +
    (textArea.getAttribute("maxLength") - textArea.value.length);

  remain.style.color = "red";

  totalCount.innerText = "Total Charaters: " + textArea.value.length;
  totalCount.style.color = "green";
});
