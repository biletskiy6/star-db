import React from "react";
import "./start-page.scss";
export default function StartPage() {
  return (
    <div className='start-page'>
      <h1>Welcome to starwars app</h1>
      <p>
        Here you can find some information about People, Planets and Starships
        from Star Wars saga
      </p>
      <p>This application based on real API(swapi.co)</p>
    </div>
  );
}
