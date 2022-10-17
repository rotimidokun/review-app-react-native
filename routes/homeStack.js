import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Screens = createNativeStackNavigator({
    Home: {
      screen: Home,
    },
    ReviewDetails: {
      screen: ReviewDetails,
    },
  }) 

export default NavigationContainer(Screens);

