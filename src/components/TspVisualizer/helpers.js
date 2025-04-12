/* eslint-disable import/prefer-default-export */

export function getDistanceFromCoords(pointACoords, pointBCoords) {
  const lat1 = (pointACoords[1] * Math.PI) / 180;
  const lon1 = (pointACoords[0] * Math.PI) / 180;
  const lat2 = (pointBCoords[1] * Math.PI) / 180;
  const lon2 = (pointBCoords[0] * Math.PI) / 180;

  const R = 3959; // Radius of Earth in miles

  const angle = Math.sin(lat1) * Math.sin(lat2)
    + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);

  const clamped = Math.min(1, Math.max(-1, angle)); // prevent NaN from rounding errors

  const distance = R * Math.acos(clamped);

  return distance;
}
