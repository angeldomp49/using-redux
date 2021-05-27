import {connect} from 'react-redux';
import {fetchNewTime} from '../redux/actionCreators';
import configureStore from '../redux/configureStore';

const mapStateToProps = ( state ) => {
    return {
        currentTime: state.currentTime
    };
};

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => {
        let store = configureStore();
        console.log(store.getState());
        store.dispatch(fetchNewTime());
    }
});

export const Home = ( props ) => {
    return(
        <div>
            <h1>Welcome</h1>
            <p>current time: {props.currentTime}</p>
            <button onClick={props.updateTime} >Update Time</button>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);