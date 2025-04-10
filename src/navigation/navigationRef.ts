import { createNavigationContainerRef } from '@react-navigation/native';
import { RootStackParamList } from './types';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// export function navigate<RouteName extends keyof RootStackParamList>(
//   name: RouteName,
//   params?: RootStackParamList[RouteName],
// ) {
//   if (navigationRef.isReady()) {
//     navigationRef.navigate(name, params);
//   }
// }

export function navigate<RouteName extends keyof RootStackParamList>(
    ...args: undefined extends RootStackParamList[RouteName]
        ? [RouteName] | [RouteName, RootStackParamList[RouteName]]
        : [RouteName, RootStackParamList[RouteName]]
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(...args);
    }
}




export function goBack() {
    if (navigationRef.isReady()) {
        navigationRef.goBack();
    }
}

export function reset(routeName: keyof RootStackParamList) {
    if (navigationRef.isReady()) {
        navigationRef.reset({
            index: 0,
            routes: [{ name: routeName }],
        });
    }
}
