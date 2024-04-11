import React from "react";
import "../components/Destination.css";
import DestinationData from "./DestinationData";
import marina from "../assets/dubai.jpg";
import twintower from "../assets/twintower.jpg";
import tamil1 from "../assets/thanjaur.jpeg";
import tamil2 from "../assets/thanjaur2.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives us memorable things</p>

      <DestinationData
        className="first-des"
        heading="Burj Al Arab"
        text=" The Burj Al Arab (Arabic: برج العرب, lit.'Arab Tower') is a luxury
    hotel in Dubai, United Arab Emirates.[8] Developed and managed by
    Jumeirah, it is one of the tallest hotels in the world, although 39%
    of its total height is made up of non-occupiable space.[9][10][11]
    Burj Al Arab stands on an artificial island that is 280 m (920 ft)
    from Jumeirah Beach and is connected to the mainland by a private
    curving bridge."
        img1={marina}
        img2={twintower}
      />

      <DestinationData
        className="first-des-reverse"
        heading="THANJAVUR"
        text=" Thanjavur is a city in the south Indian state of Tamil Nadu. Its many temples include the 11th-century Brihadeeswarar Temple, a vast Chola dynasty–era complex with a frescoed interior. Thanjavur Maratha Palace is home to the centuries-old Saraswathi Mahal Library, with palm-leaf manuscripts, and Thanjavur Art Gallery, with bronze statues."
        img1={tamil1}
        img2={tamil2}
      />
    </div>
  );
};

export default Destination;
