const MapLocation = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0357171270502!2d44.504915775401756!3d40.18601856964989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd1cd8698cd1%3A0x9db6587a27e7704b!2z1ZXVvdW_INWj1avVttWrINaHINW41oLVv9Wl1azVq9aE!5e0!3m2!1shy!2sam!4v1684848677228!5m2!1shy!2sam"
        style={{ border: "0", width: "100%", height: "350px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;
