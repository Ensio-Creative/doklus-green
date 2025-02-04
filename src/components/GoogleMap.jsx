const GoogleMapEmbed = () => {
  return (
    <div
    className="lg:px-20 px-4"
      style={{
        textDecoration: "none",
        overflow: "hidden",
        maxWidth: "100%",
        width: "100%",
        height: "500px",
      }}
    >
      <div
        id="google-maps-display"
        style={{ height: "100%", width: "100%", maxWidth: "100%" }}
      >
        <iframe
          style={{ height: "100%", width: "100%", border: "0" }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=10+Ekwulumili+Crescent,+Independence+Layout,++++++++++++Enugu,+Enugu+State,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
        ></iframe>
      </div>
      <a
        className="googlemaps-made"
        href="https://www.bootstrapskins.com/themes"
        id="auth-map-data"
      ></a>
    </div>
  );
};

export default GoogleMapEmbed;
