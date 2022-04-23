import React, { Component } from 'react';
import SkipComponents from './SkipComponents';
import WrapComponents from './WrapComponents';

class AppComponents extends Component{
    render(){
        return(
            <div id='app'>                
                <SkipComponents />
                <WrapComponents />
            </div>
        );

    }

}
export default AppComponents;

