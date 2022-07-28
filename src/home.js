function createBodyContent() {
  const bodyContent = document.createElement("bodyContent");
  bodyContent.id = "bodyContent";
  bodyContent.classList = "bodyContent";

  const homeContainer = document.createElement("homeContainer");
  homeContainer.classList = "homeContainer";
  bodyContent.appendChild(homeContainer);

  //Cover + logo
  const cover = document.createElement("cover");
  cover.classList = "cover";
  const logo = document.createElement("logo");
  logo.classList = "logo";
  const h1 = document.createElement("h1");
  h1.textContent = "A Delicious Restaurant";

  cover.appendChild(logo);
  cover.appendChild(h1);
  homeContainer.appendChild(cover);

  //Text Content
  const textContent = document.createElement("textContent");
  textContent.classList = "textContent";
  homeContainer.appendChild(textContent);

  ////Review
  const review = document.createElement("review");
  review.classList = "review";
  const h2 = document.createElement("h2");
  h2.textContent = "Welcome to A Delicious Restaurant";
  const reviewText = document.createElement("p");
  reviewText.textContent =
    "We strive to make food that you can eat. We make sure it is edible and have achieved a 50% mortality rate at our restaurant. We won some awards that we gave ourselves so you know our restaurant is legitimate. Our staff are people that work here. They are beyond tired due to our opening hours and we do nothing about it because we love our customers more than our workers.";
  const reviewText2 = document.createElement("p");
  reviewText2.textContent =
    "We specialise in nothing. You can drink our water. Most importantly, we make an attempt at our job and that is what matters in life.";

  review.appendChild(h2);
  review.appendChild(reviewText);
  review.appendChild(reviewText2);
  textContent.appendChild(review);

  //Image Cycling
  const imageContainer = document.createElement("imageContainer");
  imageContainer.classList = "imageContainer";
  const crocs = createReviewImages("Crocs", "images/crocks.jpg");
  imageContainer.appendChild(crocs);
  // const sonicImage = createReviewImages("Sonic", "images/sonic.jpg");
  // imageContainer.appendChild(sonicImage);
  textContent.appendChild(imageContainer);

  return bodyContent;
}

function createReviewImages(id, src) {
  const image = document.createElement("img");
  image.classList = "img";
  image.id = id;
  image.src = src;
  return image;
}

function loadHome() {
  const bodyContent = document.getElementById("bodyContent");
  bodyContent.textContent = "";

  bodyContent.appendChild(createBodyContent());
}
export default loadHome;
