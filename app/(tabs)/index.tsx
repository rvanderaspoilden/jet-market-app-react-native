import {FlatList, StyleSheet} from 'react-native';
import {SearchInput, Text, View} from '../../components/Themed';
import {LinearGradient} from 'expo-linear-gradient';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';
import useSpaceships from "../../hooks/spaceship.hook";
import Card from "../../components/Card";
import {FilterButton} from "../../components/FilterButton";
import {useEffect, useState} from "react";
import {Spaceship} from "../../models/spaceship.model";
import {ALL_TYPE} from "../../constants/Common";


export default function HomeScreen() {
    const [filteredItems, setFilteredItems] = useState<Array<Spaceship>>(() => []);
    const [selectedType, setSelectedType] = useState<string>(ALL_TYPE);
    const {spaceships, types} = useSpaceships();

    useEffect(() => {
        let items = spaceships;

        // Filter by types
        if (selectedType != ALL_TYPE) {
            items = items.filter(x => x.type === selectedType);
        }

        // Filter by search input

        setFilteredItems(items);
    }, [spaceships, selectedType]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']} start={{x: 0, y: 0.5}}
                                end={{x: 1, y: 0.5}}
                                style={styles.headerBg}>
                </LinearGradient>
                <Text style={styles.headerTitle}>Jet Market</Text>
                <SearchInput container={{style: styles.inputContainer}} input={{placeholder: 'Search spaceship'}}/>
            </View>
            <View style={styles.body}>
                <FlatList data={types}
                          showsHorizontalScrollIndicator={false}
                          style={{height: 50, maxHeight: 50}}
                          horizontal={true}
                          renderItem={({item: type, index}) => {
                              return (
                                  <View style={{marginLeft: index === 0 ? 20 : 0, marginRight: 20}}>
                                      <FilterButton active={type === selectedType}
                                                    onPress={() => setSelectedType(type)}
                                                    value={type}
                                      />
                                  </View>
                              );
                          }}
                />

                <FlatList data={filteredItems}
                          columnWrapperStyle={{justifyContent: 'space-between', gap: 30}}
                          style={{paddingHorizontal: 20, paddingTop: 10}}
                          numColumns={2}
                          renderItem={({item: spaceship}) => <Card spaceship={spaceship}/>}
                          keyExtractor={item => item.name}
                />
            </View>
            <FocusAwareStatusBar style='light'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    body: {
        position: 'relative',
        flex: 1,
        paddingTop: 45,
    },
    header: {
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
    },
    headerBg: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    headerTitle: {
        color: 'white',
        fontSize: 32,
        paddingTop: 20,
    },
    inputContainer: {
        width: '80%',
        position: 'absolute',
        bottom: -25,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
