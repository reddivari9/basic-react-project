import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Loader from './Loader';


class FullscreenLoading extends PureComponent {

    static propTypes = {
        show: PropTypes.bool,
    };

    render() {

        const { show } = this.props;

        if (show)
            return (
                <div className='fullscreen-loading'>
                    <p className='fullscreen-loading-logo'>Loading...</p>
                    <Loader show={show} />
                </div>
            );
        else
            return null;
    }
}

export default FullscreenLoading;
