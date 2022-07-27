function loadContact() {
  const bodyContent = document.getElementById("bodyContent");
  bodyContent.textContent = "";

  bodyContent.appendChild(createContact());
}

function createContact() {
  const contactBackground = document.createElement("contactBackground");
  contactBackground.classList = "contactBackground";

  const contactContainer = document.createElement("contactContainer");
  contactContainer.classList = "contactContainer";
  contactBackground.appendChild(contactContainer);

  const contactHours = document.createElement("contactHours");
  contactHours.classList = "contactHours";
  contactBackground.appendChild(contactHours);

  contactHoursText = document.createElement("p");
  contaact.hours;

  const contactDetails = document.createElement("contactDetails");
  contactDetails.classList = "contactDetails";
  contactBackground.appendChild(contactDetails);

  return contactBackground;
}

export default loadContact;
