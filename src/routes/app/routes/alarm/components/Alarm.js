import React from 'react';
import AlarmRouter from './AlarmRouter';
class Alarm extends React.Component {

    render() {
        return <div className="alarm">
            <AlarmRouter {...this.props} />
        </div>;
    }
}

export default Alarm;