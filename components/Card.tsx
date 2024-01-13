import {Spaceship} from "../models/spaceship.model";
import React from "react";
import {Icon, Text, View} from "./Themed";
import {Image, StyleSheet} from "react-native";

type Props = {
    spaceship: Spaceship
}

export default function Card({spaceship}: Props): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: spaceship.photo_link}} />
            <View style={{paddingHorizontal: 10, paddingTop: 15}}>
                <Text style={styles.title}>{spaceship.name}</Text>
                <Text style={styles.subtitle}>{spaceship.type}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                    <Text style={styles.price}>${spaceship.price.toLocaleString()}</Text>
                    <View style={{backgroundColor: '#c67c4e', borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: 30, height: 30}}>
                        <Icon name='plus' size={12} color='white' />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        marginBottom: 40,
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

