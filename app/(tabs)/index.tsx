import {StyleSheet} from 'react-native';
import {SearchInput, Text, View} from '../../components/Themed';
import {LinearGradient} from 'expo-linear-gradient';
import {FocusAwareStatusBar} from '../../components/FocusAwareStatusBar';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']} start={{x: 0, y: 0.5}} end={{x: 1, y: 0.5}} style={styles.headerBg}>
        </LinearGradient>
        <Text style={styles.headerTitle}>Jet Market</Text>
        <SearchInput container={{style: styles.inputContainer}} input={{placeholder: 'Search spaceship'}} />
      </View>
      <FocusAwareStatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  header: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
