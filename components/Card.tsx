import {Spaceship} from "../models/spaceship.model";
import React from "react";
import {Icon, Text, View} from "./Themed";
import {Image, StyleSheet, useColorScheme} from "react-native";
import Colors from "../constants/Colors";

type Props = {
    spaceship: Spaceship
}

export default function Card({spaceship}: Props): React.JSX.Element {
    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            marginBottom: 20,
        },
        addButton: {
            backgroundColor: Colors[colorScheme ?? 'light'].tint,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 30,
            height: 30
        },
        title: {
            fontWeight: 'bold',
            fontSize: 16
        },
        image: {
            width: '100%',
            aspectRatio: 1,
            objectFit: 'contain',
            borderRadius: 10
        },
        subtitle: {
            fontSize: 14,
            color: 'grey',
            marginTop: 5,
        },
        price: {
            fontWeight: 'bold',
            fontSize: 16,
            color: 'grey'
        },
    });

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: spaceship.photo_link}}/>
            <View style={{paddingHorizontal: 10, paddingTop: 15}}>
                <Text style={styles.title}>{spaceship.name}</Text>
                <Text style={styles.subtitle}>{spaceship.type}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 10
                }}>
                    <Text style={styles.price}>${spaceship.price.toLocaleString()}</Text>
                    <View style={styles.addButton}>
                        <Icon name='plus' size={12} color='white'/>
                    </View>
                </View>
            </View>
        </View>
    );
}
