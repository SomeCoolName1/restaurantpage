function loadContact() {
  const bodyContent = document.getElementById("bodyContent");
  bodyContent.textContent = "";

  bodyContent.appendChild(createContact());
}

function createContact() {
  const container = document.createElement("container");
  container.classList = "container";

  const contactContainer = document.createElement("contactContainer");
  contactContainer.classList = "contactContainer";
  contactContainer.textContent = "Contact Us!";
  container.appendChild(contactContainer);

  /*---------contact Hours---------*/

  const contactHours = document.createElement("contactHours");
  contactHours.classList = "contactHours";
  contactContainer.appendChild(contactHours);

  const hoursList = document.createElement("li");

  contactHours.appendChild(hoursList);
  const monday = createHoursList("Monday: 00:01 ~ 23:59");
  hoursList.appendChild(monday);
  const tuesday = createHoursList("Tuesday: 00:01 ~ 23:59");
  hoursList.appendChild(tuesday);
  const wednesday = createHoursList("Wednesday: Closed");
  hoursList.appendChild(wednesday);
  const thursday = createHoursList("Thursday: 00:01 ~ 23:59");
  hoursList.appendChild(thursday);
  const friday = createHoursList("Friday: 00:01 ~ 23:59");
  hoursList.appendChild(friday);
  const saturday = createHoursList("Saturday: 00:01 ~ 23:59");
  hoursList.appendChild(saturday);
  const sunday = createHoursList("Sunday: 00:01 ~ 23:59");
  hoursList.appendChild(sunday);

  contactHours.appendChild(hoursList);

  /*----------Contact Details--------------*/

  const contactDetails = document.createElement("contactDetails");

  contactDetails.classList = "contactDetails";
  contactContainer.appendChild(contactDetails);

  const manager = createIcons(
    "Manager: Rordon Gamsay",
    "Email: NitchenKightmares@email.com",
    "Phone: 99 9999 9999",
    "images/gordon.jpg"
  );

  const headChef = createIcons(
    "Head Chef: Gurios Ceorge",
    "Email: GuriousCeorge@email.com",
    "Phone: 88 8888 8889",
    "images/George.jpg"
  );

  contactDetails.appendChild(manager);
  contactDetails.appendChild(headChef);

  const contactBackground = document.createElement("contactBackground");
  contactBackground.classList = "contactBackground";
  container.appendChild(contactBackground);
  return container;
}

function createHoursList(hours) {
  const hoursContainer = document.createElement("li");
  const hoursList = document.createElement("p");
  hoursList.textContent = hours;
  hoursContainer.appendChild(hoursList);
  return hoursContainer;
}

function createIcons(name, email, phone, profilePicture) {
  const iconsContainer = document.createElement("iconsContainer");
  iconsContainer.classList = "iconsContainer";
  const image = document.createElement("imageContainer");
  iconsContainer.appendChild(image);
  const details = document.createElement("detailsContainer");
  details.classList = "detailsContainer";
  iconsContainer.appendChild(details);

  const contactImage = document.createElement("img");
  contactImage.classList = "contactImage";
  contactImage.src = profilePicture;
  image.appendChild(contactImage);

  const contactName = document.createElement("h3");
  contactName.textContent = name;
  details.appendChild(contactName);

  const contactEmail = document.createElement("p");
  contactEmail.textContent = email;
  details.appendChild(contactEmail);

  const contactPhone = document.createElement("p");
  contactPhone.textContent = phone;
  details.appendChild(contactPhone);

  return iconsContainer;
}
export default loadContact;
