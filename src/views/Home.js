import {connect} from 'react-redux';
import {fetchNewTime, login, logout} from '../redux/actionCreators';

const Content = ( props ) => {
    return(
        <div>
            <h1>Welcome</h1>
            <p>current time: {props.currentTime}</p>
            <button onClick={props.updateTime} >Update Time</button>
            <button onClick={ props.loggedIn ? props.login : props.logout } >{ props.loggedIn ? "logout" : "login" }</button>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        currentTime: state.time.currentTime
    };
};

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => {
        dispatch(fetchNewTime());
    },
    login: () => {
        dispatch(login())
    },
    logout: () => {
        dispatch(logout())
    }
});

export const Home =  connect(mapStateToProps, mapDispatchToProps)(Content);



export default Home;