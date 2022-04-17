"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map;
let mapOnClickEventObject;

//Workouts Array
const workOuts = [];

const _getPosition = function () {
  navigator.geolocation.getCurrentPosition(
    function (currentPosition) {
      if (currentPosition.coords) {
        const { latitude, longitude } = currentPosition.coords;
        const cod = [latitude, longitude];
        _loadMap(cod);
      }
    },

    function (positionRetrievalError) {
      console.log(
        `The current position value is ${positionRetrievalError.message}`
      );
    }
  );
};

const _loadMap = function (position) {
  map = L.map("map").setView(position, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};

const _showForm = function () {
  map.on("click", function (eventObject) {
    form.classList.remove("hidden");

    mapOnClickEventObject = eventObject;
  });
};

const _toggleElevationField = function () {
  inputType.addEventListener("change", function () {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  });
};

const _newWorkout = function () {

    

};
