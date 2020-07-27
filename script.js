

function getDogImage() {
  let dogBreed = $('#dogBreed').val().toLowerCase()

  fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  let dogBreed = $('#dogBreed').val().toLowerCase()
 if(dogBreed.length == 0) {
  alert("Error: Form is empty. Enter breed name");
} else {
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
  $('.message').removeClass('hidden');
}
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});