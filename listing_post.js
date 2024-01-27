//listing_post.js

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  //function for populating html fields
  populateFields();
}

function populateFields() {
  let listing = getListing();
  //populate fields with info
}

async function getListing() {
  let urlString = window.location.href;
  let url = new URL(urlString);
  let listing_id = url.searchParams.get('listing_id')
  //const response = await fetch("file_path.json"); using listing_id as a parameter
  //const listing = await response.json();
  //return listing;
  return [1];
}
