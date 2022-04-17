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

class App {
  #map;
  #mapOnClickEventObject;

  constructor() {
    this._getPosition();
    inputType.addEventListener("change", this._toggleElevationField.bind(this));
    form.addEventListener("submit", this._newWorkOut.bind(this));
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function (positionRetrievalError) {
        console.log(
          `Problem with position retrieval: ${positionRetrievalError.message}`
        );
      }
    );
  }

  _loadMap(position) {
    if (position.coords) {
      const { latitude, longitude } = position.coords;
      const cod = [latitude, longitude];
      this.#map = L.map("map").setView(cod, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.#map);
    }
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(eventObject) {
    form.classList.remove("hidden");
    this.#mapOnClickEventObject = eventObject;
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkOut(e) {
    e.preventDefault();

    let { lat, lng } = this.#mapOnClickEventObject.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 50,
          autoClose: false,
          closeButton: false,
          className: "running-popup",
          closeOnClick: false,
        })
      )
      .setPopupContent("Workout")
      .openPopup();
  }
}

const AppObject = new App();
