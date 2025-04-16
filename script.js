function changeText() {
  const textElement = document.getElementById("dynamic-text");
  textElement.textContent = "The text and style have been updated!";
  textElement.style.color = "crimson";
  textElement.style.fontWeight = "bold";
  textElement.style.backgroundColor = "#f0f0f0";
  textElement.style.padding = "10px";
}

function toggleElement() {
  const container = document.getElementById("extra-container");
  const existing = document.getElementById("extra-para");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newPara = document.createElement("p");
    newPara.id = "extra-para";
    newPara.textContent = "You just added this paragraph dynamically!";
    container.appendChild(newPara);
  }
}
