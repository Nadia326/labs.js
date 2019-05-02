'use strict'
const input = document.getElementsByTagName('input')[0].value;

var app = new Vue({
    el: '#app',
    data: {
      message: '',
      breeds: {},
      randomBreed: {},
      subbreedColor:'red',
      newlist:[],
      showWithSubbreeds: function(object) {
        let objectWithSubbreeds={}
        for(let key in object) {
            if(object[key].length > 0) {
                objectWithSubbreeds[key] = object[key];
            } 
        }  
        return objectWithSubbreeds;
      },
      show:true,
      
      add:true,
      
    },
    methods: {
      generateRandomBreed: function() {
        const rand = Math.floor(Math.random() * Object.keys(this.breeds).length);
        const key = Object.keys(this.breeds)[rand];
        this.randomBreed = {[key]: this.breeds[key]};
      },
      showRandom: function(object) {
        let randObject={};
        const rand = Math.floor(Math.random() * Object.keys(object).length);
        const key = Object.keys(object)[rand];
        randObject[key]=object[key];
        console.log(randObject)
        return randObject;
      },
      getRandomFromArray: function(){
        let array = Object.keys(breeds);
        const rand = Math.floor(Math.random() * array.length);
        return array[rand];
      },
      addf: function() {
        newlist.push(getRandomFromArray());
        console.log(newlist);
        },
        shuffle:function (array) {
          var currentIndex = array.length, temporaryValue, randomIndex;
        
          while (0 !== currentIndex) {
        
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        },
        remove:function(){
  
        }

    }

  });



  fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response) {
    return response.json();
   })
  .then(function(data) {
    app._data.breeds = data.message;
  })
  .catch( alert );  



