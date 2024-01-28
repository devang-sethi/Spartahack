//profile_script.js

document.addEventListener("DOMContentLoaded", onload_func);

function onload_func() {
  //function for populating html fields
  populateFields();
}

function populateFields() {
  let user = getUser();
  
  //create img for profile picture
  let profile_picture = document.createElement("img");
  profile_picture.src = user.profile_picture; //set image src
  //potential alt text from user object

  document.getElementById("name").textContent = "Name: " + user.name; //set text content of name

  //potential description text - would need id for p element
  
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
