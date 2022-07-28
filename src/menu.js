function loadMenu() {
  const bodyContent = document.getElementById("bodyContent");
  bodyContent.textContent = "";

  console.log("menu clicked");
  bodyContent.appendChild(createMenu());
}

function createMenu() {
  const menuBackground = document.createElement("menuBackground");
  menuBackground.classList = "menuBackground";

  const menuContainer = document.createElement("menuContainer");
  menuContainer.classList = "menuContainer";
  menuBackground.appendChild(menuContainer);

  //name, text, price, image
  const foodRice = menuDescription(
    "Single Grain of Rice",
    "Hand-picked rice from our farmers off the streets!",
    "$5.90",
    "images/rice.jpg"
  );

  const foodEgg = menuDescription(
    "Raw Egg",
    "Cracked freshly open from your fridge to be cooked by your imagination!",
    "One Egg",
    "images/rawEgg.jpg"
  );

  const foodCurry = menuDescription(
    "Japanese-style Curry",
    "Store bought from a competitor restaurant!",
    "$13.99",
    "images/curry.jpg"
  );

  const foodBrownies = menuDescription(
    "Brownies",
    "Don't let the image confuse you! They taste like the real thing!",
    "$2.92",
    "images/brownies.jpeg"
  );

  menuContainer.appendChild(foodRice);
  menuContainer.appendChild(foodEgg);
  menuContainer.appendChild(foodCurry);
  menuContainer.appendChild(foodBrownies);

  return menuBackground;
}

function menuDescription(name, text, price, image) {
  const menuBlock = document.createElement("menuBlock");
  menuBlock.classList = "menuBlock";

  const foodImage = document.createElement("img");
  foodImage.classList = name;
  foodImage.src = image;
  menuBlock.appendChild(foodImage);

  const foodHeader = document.createElement("foodHeader");
  foodHeader.classList = "foodHeader";
  menuBlock.appendChild(foodHeader);

  const foodDescription = document.createElement("foodDescription");
  menuBlock.appendChild(foodDescription);

  const foodName = document.createElement("h3");
  foodName.textContent = name;
  foodHeader.appendChild(foodName);

  const foodPrice = document.createElement("h3");
  foodPrice.textContent = price;
  foodHeader.appendChild(foodPrice);

  const foodText = document.createElement("p");
  foodText.textContent = text;
  foodDescription.appendChild(foodText);

  return menuBlock;
}

export default loadMenu;
