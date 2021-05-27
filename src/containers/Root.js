import App from './App';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import {Home} from '../views/Home';

export const Root = (props) => {
    const store = configureStore();
    return(
        <Provider store={store}>
            <App/>
            <Home />
        </Provider>
    );
};

export default Root;