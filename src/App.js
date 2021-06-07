import React from 'react';

let dateTime = new Date;

export default class App extends React.Component {
  render () {
    return (
      <div>
        <p>Voici l'heure, et la date d'aujourd'hui:</p>
        <p>Heure actuelle: {dateTime.getHours()}:{dateTime.getSeconds()}:{dateTime.getMilliseconds()}</p>
        <p>Date actuelle: {dateTime.getDate()} / {dateTime.getMonth()} / {dateTime.getFullYear()}  </p>
      </div>
    )
  }
}