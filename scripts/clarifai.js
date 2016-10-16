var clarifai = require('clarifai');

var app = new Clarifai.App(
	'{iH-VTRGFey_Zw7L9sQElvKbg0f6Ww5zaS4z6sWAu}', // client id
	'{QDm3lSH0tD-PviIt_kDUyhIjuuYdwPGuPMFYbyHN}'  // client secret
);

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
  function(response) {
    console.log(response);
  },
  function(err) {
    console.error(err);
  }
);

// add some inputs
app.inputs.create('https://samples.clarifai.com/puppy.jpeg').then(
  searchForDog,
  function(err) {
    console.error(err);
  }
);

// search for concepts
function searchForDog(response) {
  app.inputs.search([{
    name: 'dog'
  }]).then(
    function(response) {
      console.log(response);
    },
    function(response) {
      console.error(response);
    }
  );
}
