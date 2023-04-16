import React from 'react';
import "./About.css"

export default function About() {
  return (
    <section className="about">
      <div className="about__content">
        <p>
          Our Drone Weather Forecaster project is a website that provides
          real-time weather information for drone enthusiasts. With this
          information, drone pilots can make informed decisions about when and
          where to fly their drones, ensuring safe and successful drone flight.
          Users can access up-to-date information on temperature, wind speed and
          direction, visibility, humidity, and more. The website also features a
          search bar, allowing users to quickly search for weather data for any
          location they are interested in
        </p>
        <h3>FAA Rules</h3>
        <ul>
          <li>
            Register your drone, mark it on the outside with the registration
            number (PDF), and carry proof of registration with you.
          </li>
          <li>Fly only for recreational purposes.</li>
          <li>
            Follow the safety guidelines of a community-based organization.
          </li>
          <li>
            Fly your drone at or below 400 feet when in uncontrolled or "Class
            G" airspace. This is airspace where the FAA is not controlling
            manned air traffic. To determine what type of airspace you are in,
            refer to the mobile application that operates your drone (if so
            equipped) and/or use other drone-related mobile applications.
            Knowing your location and what airspace you're in will also help you
            avoid interfering with other aircraft.
          </li>
          <li>
            Do NOT fly in controlled airspace (around and above many airports)
            unless:
            <ul>
              <li>
                You receive an airspace authorization for operations in
                controlled airspace through LAANC (Low Altitude Authorization
                and Notification Capability), before you fly. Learn more about
                approved LAANC UAS Service Suppliers for recreational flyers.
              </li>
              <li>
                You are flying at a recreational flyer fixed site that has a
                written agreement with the FAA. The FAA has posted a list of
                approved sites (MS Excel) and has depicted them as blue dots on
                a map. Each fixed site is limited to the altitude shown on this
                map, which varies by location.
              </li>
              <li>
                NOTE: If your organization is interested in establishing a
                letter of agreement for a fixed flying site, please contact us
                at 9-AJT-UAS-Integration@faa.gov.
              </li>
              <li>
                The FAA is experiencing a high volume of requests for fixed
                sites. At this time, the FAA is reviewing requests based on
                available resources.
              </li>
            </ul>
          </li>
          <li>
            Keep your drone within your line of sight, or within the visual
            line-of-sight of a visual observer who is co-located and in direct
            communication with you.
          </li>
          <li>
            Do NOT fly in airspace where flight is prohibited. Airspace
            restrictions can be found on our interactive map, and temporary
            flight restrictions can be found here. Drone operators are
            responsible for ensuring they comply with all airspace restrictions.
          </li>
          <li>Never fly near other aircraft, especially near airports.</li>
          <li>
            Never fly over groups of people, public events, or stadiums full of
            people.
          </li>
          <li>
            Never fly near emergencies such as any type of accident response,
            law enforcement activities, firefighting, or hurricane recovery
            efforts.
          </li>
          <li>Never fly under the influence of drugs or alcohol.</li>
        </ul>
      </div>
    </section>
  );
  }
