/*
 * @Author: harry.lang 
 * @Date: 2018-04-17 23:31:59 
 * @Last Modified by:   harry.lang 
 * @Last Modified time: 2018-04-17 23:31:59 
 */
import React from 'react';

class Title extends React.Component {
    render() {
        return <h1>{this.props.children}</h1>;
    }
}

export default Title;