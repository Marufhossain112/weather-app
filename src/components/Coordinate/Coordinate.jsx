import React, { useState } from "react";

const CoordinateConverter = () => {
  const convertToDMS = (decimalDegrees) => {
    const degrees = Math.floor(decimalDegrees);
    const minutesDecimal = (decimalDegrees - degrees) * 60;
    const minutes = Math.floor(minutesDecimal);
    const seconds = (minutesDecimal - minutes) * 60;

    return `${degrees}° ${minutes}' ${seconds.toFixed(2)}"`;
  };

  const [latitude] = useState(48.8534);
  const [longitude] = useState(2.3488);

  const latitudeDMS = convertToDMS(latitude);
  const longitudeDMS = convertToDMS(longitude);

  return (
    <div>
      <p>Latitude: {latitudeDMS} N</p>
      <p>Longitude: {longitudeDMS} E</p>
    </div>
  );
};

export default CoordinateConverter;
