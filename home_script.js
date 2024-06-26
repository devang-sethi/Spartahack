//home_script.js

import { jsonPath } from 'jsonpath-0.8.0.js';

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  displayRecListings();
}

function displayRecListings() {
  let listings = JSON.parse(getRecListings());
  listings.forEach(displayListing);
}

async function getRecListings() {
  //const response = await fetch("filter_for_recommended.js");
  //const listings = await response.json();
  //return listings;
  const response = await fetch("listing.json");
  const listing_list = await response.json();
  listing_recs = jsonPath(listing_list, "$.Listing[:3]").toJSONString();
  return listing_recs;
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
