function App() {
  
  this.currImg = '';
  
}


/////////////////
App.prototype = {

  ////////////////////////////////
  init: function() {
    console.log("App is initiated");
    this.renderImage('hep')

  },


  renderImage: function(imgPath) {

    let test = 'url(images/Program.jpg)';

    // find elm
    let elm = document.getElementById('imgWrapper').style.backgroundImage = test;
  }

}