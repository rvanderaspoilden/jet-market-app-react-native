import {Pressable, StyleSheet, Text, useColorScheme} from "react-native";
import React from "react";
import Colors from "../constants/Colors";

type Props = {
    value: string;
    active: boolean;
    onPress: VoidFunction;
}

export function FilterButton({value, active, onPress}: Props): React.JSX.Element {
    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        button: {
            backgroundColor: 'transparent',
            borderRadius: 10,
            paddingHorizontal: 15,
        },
        buttonActive: {
            backgroundColor: Colors[colorScheme ?? 'light'].tint
        },
        text: {
            color: 'grey',
            marginVertical: 10,
        },
        textActive: {
            color: 'white',
            fontWeight: 'bold',
        }
    });

    return (
        <Pressable style={[style.button, (active ? style.buttonActive : undefined)]} onPress={onPress}>
            <Text style={[style.text, (active ? style.textActive : undefined)]}>{value}</Text>
        </Pressable>
    );
}
