import "./Trip.css";
import TripData from "./TripData";
import trip1 from "../assets/trip1.jpg";
import trip2 from "../assets/trip2.jpeg";
import trip3 from "../assets/trip3.jpeg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can Discover Unique Destination Using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Kanniyakumari"
          text="Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean. It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple, dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism."
        />

        <TripData
          image={trip2}
          heading="Trip in Singapore"
          text="Singapore,[e] officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is located about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south along with the Riau Islands in Indonesia,"
        />

        <TripData
          image={trip3}
          heading="Trip in London"
          text="London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city."
        />
      </div>
    </div>
  );
}

export default Trip;
