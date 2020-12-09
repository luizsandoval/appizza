import React from 'react';

import styled from 'styled-components/native';

import ReactNativeMap, 
{ 
    Marker, 
    UrlTile, 
    PROVIDER_GOOGLE,
} from 'react-native-maps';

import { MAPBOX_TOKEN } from '@env';

const StyledMap = styled(ReactNativeMap)`
    flex: 1;
    width: ${({ width }) => width}px;
    max-width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    margin: ${({ noMargin }) => noMargin ? '0' : '16px 0'};
`;

const INITIAL_REGION = {
    latitude: -23.533773,
    longitude: -46.625290,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014,
};

const Map = (
    { 
        width, 
        height, 
        liteMode = false,
        noMargin = false,
        onMarkerDrag = null,
        region = INITIAL_REGION,
        initialRegion = INITIAL_REGION, 
        ...rest 
    }
) => (
    <StyledMap
        loadingEnabled
        showsUserLocation
        width={width}
        height={height}
        region={region}
        liteMode={liteMode}
        noMargin={noMargin}
        zoomEnabled={!liteMode}
        rotateEnabled={!liteMode}
        scrollEnabled={!liteMode}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
        zoomControlEnabled={!liteMode}
        {...rest}
    >
        <UrlTile
            urlTemplate={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`}
        />
        <Marker
            draggable
            onDragEnd={(e) => onMarkerDrag && onMarkerDrag(e.nativeEvent.coordinate)}
            coordinate={
                {
                    latitude: region.latitude,
                    longitude: region.longitude,
                }
            }
        />
    </StyledMap>
);

export default Map;
