import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';


class Loading extends PureComponent {

    static propTypes = {
        show: PropTypes.bool,
    };

    render() {

        const { show } = this.props;

        if (show)
            return (
                <div className="spinner">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            );
        else
            return null;
    }
}

export default Loading;
