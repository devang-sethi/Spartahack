//home_script.js

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  //send fetch request for top x recommended listings
  displayRecListings();
}

function displayRecListings() {
  let listings = getRecListings();
  listings.forEach(displayListing);
}

async function getRecListings() {
  //const response = await fetch("file_path.json");
  //const listings = await response.json();
  //return listings;
  return [1];
}

function displayListing(value, index, array) {
  listing = document.createElement("div");
  //add stuff
  document.getElementById("individual-service").appendChild(listing);
}
