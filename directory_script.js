//directory_script.js

import { jsonPath } from './jsonpath-0.8.0.js';

let filter_tag = ""; //may need to initialize this to a different value or not initialize it

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  addClickEvents();
  displayListings();
}

function addClickEvents() {
  let buttons = document.getElementById("services-filter");
  buttons.forEach(addClickEvent);
}

function addClickEvent(obj, index, array) {
  obj.childNodes[0].addEventListener("click", setFilterTag);
}

function setFilterTag() {
  filter_tag = this.textContent;
}

function displayListings() {
  let listings = JSON.parse(getListings());
  listings.forEach(displayListing);
}

async function getListings() {
  //const response = await fetch("file_path.json?tag=${filter_tag}");  need parameter for button clicked - ?tag=${filter_tag} sends filter_tag as tag
  //const listings = await response.json();
  //return listings;

  const response = await fetch("listing.json");
  const listings = await response.json();
  listings = jsonPath(listings, "$.Listing[?@service=={filter_tag}]").toJSONString();
  return listings;
}

function displayListing(obj, index, array) {
  //create div for listing
  let listing = document.createElement("div");

  //create h3 for service title
  let service_title = document.createElement("h3");
  service_title.textContent = obj.service_title; //set text content of service title

  //create img for image
  let image = document.createElement("img");
  image.src = obj.image_src; //set image src
  image.alt = obj.image_alt; //set image alt

  //create p for service description
  let service_description = document.createElement("p");
  service_description.textContent = obj.service_description; //set text content of service description

  //append elements to listing
  listing.appendChild(service_title);
  listing.appendChild(image);
  listing.appendChild(service_description);

  //append listing to unordered list of reccomended services
  document.getElementById("individual-service").appendChild(listing);
}
