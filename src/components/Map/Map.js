import "./Map.css";

import { GoogleAPIkey } from "../../utils/apiKeys";


export default function Map({location}) {
    const coordinates = `${location.latitude},${location.longitude}`;

    return (
      <section className="map">
        <iframe
          title="Google Maps"
          width="450"
          height="250"
          className="map__google"
          frameBorder="0"
          style={{ border: "1px solid black" }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${GoogleAPIkey}&q=${coordinates}`}
          allowFullScreen
        ></iframe>
      </section>
    );

}

