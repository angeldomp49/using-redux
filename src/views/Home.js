import {connect} from 'react-redux';
import {fetchNewTime} from '../redux/actionCreators';

const Content = ( props ) => {
    return(
        <div>
            <h1>Welcome</h1>
            <p>current time: {props.currentTime}</p>
            <button onClick={props.updateTime} >Update Time</button>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        currentTime: state.currentTime
    };
};

const mapDispatchToProps = ( dispatch ) => ({
    updateTime: () => {
        dispatch(fetchNewTime());
    }
});

export const Home =  connect(mapStateToProps, mapDispatchToProps)(Content);



export default Home;