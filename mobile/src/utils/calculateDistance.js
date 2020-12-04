import { getDistance, convertDistance } from 'geolib';

const calculateDistance = (startPoint, endPoint) => {
    const distance = getDistance(startPoint, endPoint);

    return distance < 1 
        ? convertDistance(distance)
        : Math.round(convertDistance(distance, 'km'));
};

export default calculateDistance;
