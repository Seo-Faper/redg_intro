import React from "react";
import Section from "../../../HOC/Section";

const mapMarker = () => {
  return (
    <Section id="map">
      <div>
        <iframe
          title="mapMarker"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.1981239197385!2d126.8745072773149!3d37.47965077206122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6137f45bd541%3A0x4d0e18067284f168!2z7ZWc6rWt7KCV67O06riw7Iig7Jew6rWs7JuQIEJvQuyEvO2EsA!5e0!3m2!1sko!2skr!4v1709418303054!5m2!1sko!2skr"
          width="100%"
          height="700"
          frameBorder="0"
          style={{ border: 0, marginBottom: "-7px" }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
