function App() {
  
  this.currImg = '';        // Url to the current background image
  this.schedule = [];       // info about what to show when. The data ...
  this.testTime = { hours: 9, mins: 45 };
  
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
    }, 60);

  },


  ////////////////////////////////
  // get the time - hours and minutes
  checkTime: function() {

    const now = this.getNow();
    console.log("now:", now);

    // put time in interface
    let showHours = ''; let showMins = ''; 
    (now.hours < 10) ? showHours = '0'+now.hours : showHours = now.hours;
    (now.mins < 10) ? showMins = "0"+now.mins : showMins = now.mins;
    document.getElementById('txtWrapper').innerHTML = showHours + ":" + showMins;


    // go through time here - backwards
    for(let i = this.schedule.length-1; i >= 0; i--) {
      // console.log("sched[i]", this.schedule[i]);

      // shorten the time vars
      const scTime = parseInt(this.schedule[i].time);

      // compare
      let strNow = now.hours + '' + now.mins;
      // console.log("strNow:", strNow);
      if (parseInt(strNow) >= scTime) {
        this.currImg = this.schedule[i].imgUrl;
        this.renderImage();
        return;
      }

    }

  },

  
  ////////////////////////////////
  // this function returns current time as object { hours, mins }
  getNow: function() {

    // FAKE time moving fast forward
    console.log("testTime:", this.testTime);

    // add to min
    if (this.testTime.mins >= 59) {
      this.testTime.mins = 0;
      this.testTime.hours++;
    } else {
      this.testTime.mins++;
    }

    return this.testTime;

    /*
    // REAL TIME BELOW
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    return { hours: hours, mins: mins }
    */
  },


  ////////////////////////////////
  // put the backgournd img on screen
  renderImage: function(imgPath) {

    // let test = 'url(images/Program.jpg)';
    let test = 'url(images/' + this.currImg + ')'; // imgPath + ')';

    // find elm
    let elm = document.getElementById('imgWrapper').style.backgroundImage = test;
  },


  ////////////////////////////////
  // sets up when to show what
  initSchedule: function() {

    this.schedule = [
      // Program as default
      {
        "hours": 9,
        "mins": 0,
        "time": 900,
        "imgUrl": "Program.jpg",
        "desc": "Processing Community Day @Aarhus 2020"
      },
      // Workshop #1 - Frederik og Rolf
      {
        "hours": 10,
        "mins": 15,
        "time": 1015,
        "imgUrl": "slides2.jpg",
        "desc": "Workshop #1: Live Coding with Sonic Pi, Frederik la Cour & Rolf Holm"
      },
      // BREAK
      {
        "hours": 11,
        "mins": 30,
        "time": 1130,
        "imgUrl": "slides3.jpg",
        "desc": "BREAK"
      },
      // Introduction
      {
        "hours": 11,
        "mins": 45,
        "time": 1145,
        "imgUrl": "slides4.jpg",
        "desc": "Introduction by PCD organizers"
      },
      // Open and Close - Gabriel
      {
        "hours": 11,
        "mins": 55,
        "time": 1155,
        "imgUrl": "slides5.jpg",
        "desc": "Open and Close — Creating Other Archives, Gabriel Pereira"
      },
      // Juicy Blockchain - Anna
      {
        "hours": 12,
        "mins": 15,
        "time": 1215,
        "imgUrl": "slides6.jpg",
        "desc": "A Juicy Blockchain Story about Governance, Anna Brynskov"
      },
      // LUNCH
      {
        "hours": 12,
        "mins": 30,
        "time": 1230,
        "imgUrl": "slides7.jpg",
        "desc": "LUNCH"
      },
      // Sonic Surveys - Alex
      {
        "hours": 13,
        "mins": 00,
        "time": 1300,
        "imgUrl": "slides8.jpg",
        "desc": "Sonic Surveys and Disruptions of Denmark, Alex Mørch"
      },
      // Utopia + - Mogens
      {
        "hours": 13,
        "mins": 20,
        "time": 1320,
        "imgUrl": "slides9.jpg",
        "desc": "Utopia +  Mogens Jacobsen"
      },
      // Fermenting Data -Magda
      {
        "hours": 13,
        "mins": 40,
        "time": 1340,
        "imgUrl": "slides10.jpg",
        "desc": "Fermenting Data: Sampling and Other Experiments with Microbes, Plants, People and Culture Machines, Magda Tyżlik-Carver"
      },
      // BREAK
      {
        "hours": 14,
        "mins": 05,
        "time": 1405,
        "imgUrl": "slides11.jpg",
        "desc": "BREAK"
      },
      // Workshop #2 - Lasse og Niels
      {
        "hours": 14,
        "mins": 15,
        "time": 1450,
        "imgUrl": "slides12.jpg",
        "desc": "Workshop #2: Machine Learning with P5.js, Lasse Korsgaard & Niels Konrad"
      },
      // Social time!
      {
        "hours": 15,
        "mins": 30,
        "time": 1530,
        "imgUrl": "Program.jpg",
        "desc": "PCD 2020 is over"
      }, 
    ];

    return;
  }

}