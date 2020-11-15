import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';

export default Routes = (isSigned = false) => (
    <NavigationContainer>
        {
            isSigned 
                ? <PrivateRoutes />
                : <PublicRoutes />
        }
    </NavigationContainer>
);
