import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';

const AppContainer = createStackNavigator(
    {
        Login: Login,
        Register: Register
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

export default createAppContainer(AppContainer);