"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// get the current position of the devices from the browser geolocation api.

let map;
let mapOnClickEventObject;

navigator.geolocation.getCurrentPosition(
  function (currentPosition) {
    if (currentPosition.coords) {
      const { latitude } = currentPosition.coords;
      const { longitude } = currentPosition.coords;

      map = L.map("map").setView([latitude, longitude], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on('click', function(eventObject) {

        form.classList.remove('hidden');

        mapOnClickEventObject = eventObject;


        
            

      });
    }
  },

  function (retrievalError) {
    console.log(`The current position value is ${retrievalError.message}`);
  }
);


// open the popup after entering or clicking the submit button.

form.addEventListener('submit', function(e){
    e.preventDefault();

    let {lat, lng} = mapOnClickEventObject.latlng;
        L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                maxWidth : 300,
                minWidth : 50,
                autoClose : false,
                closeButton : false,
                className : 'running-popup',
                closeOnClick : false
            }
            )).setPopupContent("Workout")
            .openPopup();

})

// also change the form item based on the type(running, cycling)

inputType.addEventListener('change', function(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})


