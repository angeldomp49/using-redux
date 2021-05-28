import {connect} from 'react-redux';
import {fetchNewTime, login, logout} from '../redux/actionCreators';

const Content = ( props ) => {
    return(
        <div>
            <h1>Welcome</h1>
            <p>current time: {props.currentTime}</p>
            <button onClick={props.updateTime} >Update Time</button>
            <button onClick={ props.loggedIn ? props.logout : props.login } >{ props.loggedIn ? "logout" : "login" }</button>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        currentTime: state.time.currentTime,
        loggedIn: state.user.loggedIn
    };
};

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => {
        dispatch(fetchNewTime());
    },
    login: () => {
        dispatch(login('angel'));
    },
    logout: () => {
        dispatch(logout());
    }
});

export const Home =  connect(mapStateToProps, mapDispatchToProps)(Content);



export default Home;