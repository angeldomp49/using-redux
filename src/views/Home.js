import {connect} from 'react-redux';
import {fetchNewTime, login, logout} from '../redux/actionCreators';

const Content = ( props ) => {
    return(
        <div>
            <h1>Welcome</h1>
            <p>current time: {props.currentTime.currentTime}</p>
            <button onClick={props.updateTime} >Update Time</button>
            <button onClick={ props.currentUser.loggedIn ? props.logout : props.login } >{ props.currentUser.loggedIn ? "logout" : "login" }</button>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        currentTime: state.currentTime,
        currentUser: state.currentUser
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