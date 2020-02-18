function App() {
  
  this.currImg = '';        // Url to the current background image
  this.schedule = [];       // info about what to show when. The data ...
  
}


/////////////////
App.prototype = {


  ////////////////////////////////
  init: function() {
    console.log("App is initiated");
    this.renderImage('hep');

    // setup schedule
    this.initSchedule();
    console.log("this.schedule:", this.schedule);

    // check time freq
    let self=this;
    setInterval( e => {
      self.checkTime();
    }, 2000);

  },


  ////////////////////////////////
  // get the time - hours and minutes
  checkTime: function() {

    let now = this.getNow();
    console.log("now:", now);


    // go through time here
    for(let i=0; i < this.schedule.length; i++) {
      console.log("sched[i]", this.schedule[i]);
    }

  },


  ////////////////////////////////
  // this function should produce a timer, that goes through the program very quickly.
  // ..for testing purposes
  testTimer: function() {


  },


  ////////////////////////////////
  // this function returns current time as object { hours, mins }
  getNow: function() {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    return { hours: hours, mins: mins }
  },


  ////////////////////////////////
  // put the backgournd img on screen
  renderImage: function(imgPath) {

    let test = 'url(images/Program.jpg)';

    // find elm
    let elm = document.getElementById('imgWrapper').style.backgroundImage = test;
  },


  ////////////////////////////////
  // sets up when to show what
  initSchedule: function() {

    this.schedule = [
      // Workshop #1 - Frederik og Rolf
      {
        "hours": 10,
        "mins": 15,
        "imgUrl": "",
        "desc": "Workshop #1: Live Coding with Sonic Pi  Frederik la Cour & Rolf Holm"
      },
      // BREAK
      {
        "hours": 11,
        "mins": 30,
        "imgUrl": "",
        "desc": "BREAK"
      },
      // Introduction
      {
        "hours": 11,
        "mins": 45,
        "imgUrl": "",
        "desc": "Introduction by PCD organizers"
      },
      // Open and Close - Gabriel
      {
        "hours": 11,
        "mins": 55,
        "imgUrl": "",
        "desc": "Open and Close — Creating Other Archives  Gabriel Pereira"
      },
      // Juicy Blockchain - Anna
      {
        "hours": 12,
        "mins": 15,
        "imgUrl": "",
        "desc": "A Juicy Blockchain Story about Governance  Anna Brynskov"
      },
      // LUNCH
      {
        "hours": 12,
        "mins": 30,
        "imgUrl": "",
        "desc": "LUNCH"
      },
      // Sonic Surveys - Alex
      {
        "hours": 13,
        "mins": 00,
        "imgUrl": "",
        "desc": "Sonic Surveys and Disruptions of Denmark  Alex Mørch"
      },
      // Utopia + - Mogens
      {
        "hours": 13,
        "mins": 20,
        "imgUrl": "",
        "desc": "Utopia +  Mogens Jacobsen"
      },
      // Fermenting Data -Magda
      {
        "hours": 13,
        "mins": 40,
        "imgUrl": "",
        "desc": "Fermenting Data: Sampling and Other Experiments with Microbes, Plants, People and Culture Machines  Magda Tyżlik-Carver"
      },
      // BREAK
      {
        "hours": 14,
        "mins": 05,
        "imgUrl": "",
        "desc": "BREAK"
      },
      // Workshop #2 - Lasse og Niels
      {
        "hours": 14,
        "mins": 15,
        "imgUrl": "",
        "desc": "Workshop #2: Machine Learning with P5.js  Lasse Korsgaard & Niels Konrad"
      },
      // Social time!
      /*
      {
        "hours": 11,
        "mins": 30,
        "imgUrl": "",
        "desc": "BREAK"
      }, 
      */                                                                
    ];

    return;
  }

}