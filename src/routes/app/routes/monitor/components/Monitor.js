import React from 'react';

class Monitor extends React.Component {
    componentDidMount() {
    }

    render() {
        const { match } = this.props;

        return <div className="monitor">
            <h3 className="monitor-title"></h3>
            hostKey: {match.params.hostKey}
        </div>;
    }
}

export default Monitor;