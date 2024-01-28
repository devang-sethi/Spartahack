//profile_script.js

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  //function for populating html fields
  populateFields();
}

function populateFields() {
  let user = getUser();
  //populate fields with info
}

async function getUser() {
  let urlString = window.location.href;
  let url = new URL(urlString);
  let username = url.searchParams.get('username')
  //const response = await fetch("file_path.json"); using username as a parameter
  //const listing = await response.json();
  //return username;
  return [1];
}
