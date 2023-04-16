import "./Map.css";


export default function Map({location}) {
    const coordinates = `${location.latitude},${location.longitude}`;

    return (
      <section className="map">
        <iframe
          width="450"
          height="250"
          className="open_street-map"
          frameBorder="0"
          style={{ border: "1px solid black" }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyACn6p7bAdfYef7LiU7md-5U55A99hMCCc&q=${coordinates}`}
          allowFullScreen
        ></iframe>
      </section>
    );

}

