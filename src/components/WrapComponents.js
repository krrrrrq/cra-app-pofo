import React, { Component } from 'react';
import HeaderComponents from './wrap/HeaderComponents.js'
import MainComponents from './wrap/MainComponents.js'
import FooterComponents from './wrap/FooterComponents.js'

class WrapComponents extends Component{
    render(){
        return(
            <div id="wrap">
                <HeaderComponents />
                <MainComponents />
                <FooterComponents />
            </div>
        );

    }

}

export default WrapComponents;

