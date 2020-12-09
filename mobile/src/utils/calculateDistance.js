import { getDistance, convertDistance } from 'geolib';

const calculateDistance = (startPoint, endPoint) => {
    const distance = getDistance(startPoint, endPoint);

    return distance < 1 
        ? `${convertDistance(distance, 'm')} m`
        : `${Math.round(convertDistance(distance, 'km'))} km`;
};

export default calculateDistance;
