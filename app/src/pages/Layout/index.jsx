import React from 'react';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Layout = ({ children }) => (
    <Container>
        <Header />
        {
            children
        }
        <Footer />
    </Container>
);

export default Layout;
