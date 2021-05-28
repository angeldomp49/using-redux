
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import Home from '../views/Home';
import Label from '../views/Label';

export const Root = (props) => {
    const store = configureStore();
    return(
        <Provider store={store}>
            <Home />
            <Label />
        </Provider>
    );
};

export default Root;