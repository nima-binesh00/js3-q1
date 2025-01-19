function listOfColours(colours) {
  // Write your code here...
  const contentDiv = document.getElementById("content");
  const select = document.createElement("select");
  const p = document.createElement("p");
  const co = colours[0];
  p.textContent = `You have selected: ${co}`;
  p.style.color = co;

  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;
    option.textContent = colour;
    select.appendChild(option);
  });

  select.addEventListener("change", (event) => {
    const selectedColour = event.target.value;
    p.textContent = `You have selected: ${selectedColour}`;
    p.style.color = selectedColour;
  });

  contentDiv.appendChild(select);
  contentDiv.appendChild(p);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];
listOfColours(colours);
