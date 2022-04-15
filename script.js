'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// get the current position of the devices from the browser geolocation api.

navigator.geolocation.getCurrentPosition((currentPosition, retrievalError) => {

        const {latitude} = currentPosition.coords;
        const {longitude} = currentPosition.coords;
        console.log(latitude);
        console.log(longitude);

    // if(currentPosition){
    //     console.log(`The current position value is ${currentPosition.getCurrentPosition}`);
    // }

})
