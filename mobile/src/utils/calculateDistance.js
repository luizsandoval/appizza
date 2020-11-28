import { getDistance, convertDistance } from 'geolib';

const calculateDistance = (startPoint, endPoint, unit = 'km') => {
    const distance = getDistance(startPoint, endPoint);

    return Math.round(convertDistance(distance, unit));
};

export default calculateDistance;
