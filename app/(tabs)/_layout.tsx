import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
import {useColorScheme} from 'react-native';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginTop: 10}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({color}) => <TabBarIcon name="shopping-cart" color={color}/>,
                }}
            />
        </Tabs>
    );
}
