"use strict";
const input = document.getElementsByTagName("input")[0].value;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

var app = new Vue({
  el: "#app",
  data: {
    message: "",
    breeds: {},
    randomBreed: {},
    randomBreedList: [],
    subbreedColor: "red",
    newlist: [],
    showWithSubbreeds: function(object) {
      let objectWithSubbreeds = {};
      for (let key in object) {
        if (object[key].length > 0) {
          objectWithSubbreeds[key] = object[key];
        }
      }
      return objectWithSubbreeds;
    },
    show: true,

    add: true
  },
  methods: {
    setRandomBreed: function() {
      this.randomBreed = this.generateRandomBreed();
    },
    addRandomBreedToList: function() {
      const randomBreed = this.generateRandomBreed();
      console.log(randomBreed);
      this.randomBreedList.push(randomBreed);
    },
    removeRandomBreedFromList: function() {
      const randomIndex = Math.floor(
        Math.random() * this.randomBreedList.length
      );
      this.randomBreedList.splice(randomIndex, 1);
    },
    shuffleRandomBreedList: function() {
      const newRandomBreeds = [...this.randomBreedList];
      shuffle(newRandomBreeds);
      this.randomBreedList = newRandomBreeds;
    },
    generateRandomBreed: function() {
      const rand = Math.floor(Math.random() * Object.keys(this.breeds).length);
      const key = Object.keys(this.breeds)[rand];
      return { [key]: this.breeds[key] };
    },
    showRandom: function(object) {
      let randObject = {};
      const rand = Math.floor(Math.random() * Object.keys(object).length);
      const key = Object.keys(object)[rand];
      randObject[key] = object[key];
      console.log(randObject);
      return randObject;
    },
    getRandomFromArray: function() {
      let array = Object.keys(breeds);
      const rand = Math.floor(Math.random() * array.length);
      return array[rand];
    },
  }
});

fetch("https://dog.ceo/api/breeds/list/all")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    app._data.breeds = data.message;
  })
  .catch(alert);
