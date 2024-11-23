function GoogleMaps() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Floating+Minds+Infotech`;

  return (
    <div>
      <iframe
        src={url}
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
