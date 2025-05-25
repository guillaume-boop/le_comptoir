const GoogleMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271529239236!2d4.834277315697397!3d45.76434997910572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2s15%20Rue%20de%20la%20R%C3%A9publique%2C%2069001%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1635123456789!5m2!1sen!2sfr";

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-96 relative rounded-md overflow-hidden shadow-lg shadow-neon-pink/10">
      <iframe
        title="Google Map - Le Comptoir des Saisons"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-md"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
