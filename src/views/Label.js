import {connect} from 'react-redux';
import {printName} from '../redux/actionCreators';

const Content = (props) => {
    return(
        <div>
            <label>{props.name.name}</label>
            <input onChange={(event) => { props.printName(event.target.value) }} type="text"  id="userName" />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return{
        printName: (name) => {
            dispatch(printName(name));
        }
    };
};

export const Label = connect(mapStateToProps, mapDispatchToProps)(Content);

export default Label;