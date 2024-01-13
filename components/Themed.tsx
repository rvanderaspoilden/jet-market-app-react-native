/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {Text as DefaultText, TextInputProps, useColorScheme, View as DefaultView, TextInput, StyleProp, ViewStyle, TextStyle} from 'react-native';

import Colors from '../constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme() ?? 'light';
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

export function Text(props: TextProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return <DefaultText style={[{color}, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');

    return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function Icon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    style?: StyleProp<TextStyle>;
    size?: number;
}) {
    return <FontAwesome size={props.size ?? 28} {...props} />;
}

type SearchInputProps = {
    container?: ViewProps;
    input?: TextInputProps;
}

export function SearchInput({container, input}: SearchInputProps) {
    const containerStyle: StyleProp<ViewStyle> = {
        paddingHorizontal: 15,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        gap: 10,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
    };

    return (
        <DefaultView style={[containerStyle, container?.style]}>
            <Icon name='search' color='grey'/>
            <TextInput style={{height: '100%', flex: 1}} {...input} />
        </DefaultView>
    );
}
