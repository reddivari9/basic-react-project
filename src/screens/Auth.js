import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userTokenRefreshVerify } from '../actions/user';
import { history } from '../store'

class Auth extends PureComponent {

    state = {}

    componentDidMount() {
        const { access, refresh } = this.props;
        this.props.userTokenRefreshVerify({ access, refresh });
    }

    componentDidUpdate(prevProps, prevState) {
        const { loggedIn, access, refresh, error, history, history: { location: { search } } } = this.props;
        console.log(access, refresh)
        if (!access && !refresh) {
            history.push(`/user/login/?next=${history.location.pathname}`);
        }
        // console.log("AUTH.....", this.props)
        // if (loggedIn && loggedIn !== prevProps.loggedIn) {
        //     console.log('access token valid');
        //     localStorage.setItem('access', access);
        //     localStorage.setItem('refresh', refresh);

        //     if (search.length) {
        //         const q = queryString.parse(search);
        //         if (q.next) {
        //             history.push(q.next);
        //         }
        //         else {
        //             history.push('/');
        //         }
        //     }
        //     else {
        //         history.push('/');
        //     }
        // }

        // if (error == prevProps.error) {
        //     console.log(this.props.history);
        //     history.push(`/user/login/?next=${history.location.pathname}`);
        // }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    access: state.user.login.data.access,
    refresh: state.user.login.data.refresh,
    loggedIn: state.user.login.loggedIn,
    error: state.user.login.error,
    history: history,
});


const matchDispatchToProps = (dispatch) => bindActionCreators({
    userTokenRefreshVerify
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Auth);
