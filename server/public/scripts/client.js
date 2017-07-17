console.log('js sourced');

var myApp = angular.module('myApp', []);

myApp.controller('displayController', function(){

var display = this;
  console.log(this);
  display.message = "On the console, yo.";

  display.images = [{url: "images/image1.jpg", description: "Our girls", likes: 0, visible: true},
                    {url: "images/image2.jpg", description: "Fun in a box", likes: 0, visible: true},
                    {url: "images/image3.jpg", description: "Cora", likes: 0, visible: true},
                    {url: "images/image4.jpg", description: "Beata", likes: 0, visible: true},
                    {url: "images/image5.jpg", description: "Happy family", likes: 0, visible: true},
                    {url: "images/image6.jpg", description: "Dancin'", likes: 0, visible: true}];

  display.toggle = function(image) {
    console.log(image);
    image.visible = !image.visible;
  };
  display.likes = function(image) {
    image.likes += 1;
  };


});
