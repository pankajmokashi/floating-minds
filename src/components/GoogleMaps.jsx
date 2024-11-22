// const url = "https://maps.app.goo.gl/Wp7mVKezMktHo5ek6";

function GoogleMaps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDv15hiE1yEtvahl6HFPLhBZzRN9Zdbc7U&q=Floating+Minds+Infotech"
        width="200"
        height="200"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
