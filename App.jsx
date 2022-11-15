import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { blueTheme } from './stylesSheet';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {

  const [userData, setUserData] = useState({
    userName: '',
    password: '1234'
  })
  
  return (

      <View style={styles.appContainer}>
        <StatusBar style='light' animated={false}/>
        <View style={styles.header}>
          <Image source={require('./imgs/header.png')} style={styles.headerImage}/>
          <Text style={styles.headerText}>Oceanida</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <Text>Oceanida</Text>
          </View>
          <View style={styles.box}>
            <Text>Oceanida</Text>
          </View>
          <View style={styles.box}>
            <Text>Oceanida</Text>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    alignContent: 'center',
    backgroundColor: blueTheme.main_backgroundColor,
    flex: 1
  },
  header: {
    alignSelf: 'center',
    backgroundColor: blueTheme.secondary_backgroundColor,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  headerImage: {
    alignSelf: 'center',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  headerText: {
    color: '#FFF',
    fontSize: 35,
    textAlign: 'center'
  },
  body: {
    flex: 9
  },
  box: {
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    margin: 20
  }
});
