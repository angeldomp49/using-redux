
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import Home from '../views/Home';

export const Root = (props) => {
    const store = configureStore();
    return(
        <Provider store={store}>
            <Home />
        </Provider>
    );
};

export default Root;