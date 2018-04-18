/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:22:44 
 * @Last Modified by: harry.lang
 * @Last Modified time: 2018-04-17 23:30:47
 */
import React from 'react';

import './assets/style.css';
import img from './assets/images/hehe.png';

class NoMatch extends React.Component {
    render() {
        return <div className="no-match">
            <h1>404</h1>
            <img className="img" src={img} alt="404" />
        </div>;
    }
}

export default NoMatch;
