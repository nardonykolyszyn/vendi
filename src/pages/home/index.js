import React, { Component } from 'react';
import {Header, Main, Footer , StikyBar} from './secctions'

export const Home = () => {
    return (
        <React.Fragment>
            <StikyBar />
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
      );
}