import { Platform } from 'react-native';
import { REACT_APP_API_KEY, ANDROID_KEY, IOS_KEY } from '@env';

export default {
    REACT_APP_API_KEY,
    MAP_KEY: Platform.select({
        android: ANDROID_KEY,
        ios: IOS_KEY
    })
}