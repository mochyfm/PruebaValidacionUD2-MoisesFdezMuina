import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { blueTheme } from './stylesSheet';
import { useState } from 'react';
import TotalDisplay from './Components/TotalDisplay/TotalDisplay';
import TransactionBlock from './Components/TransactionBlock/TransactionBlock';

export default App = () => {

  const [userData, setUserData] = useState({
    balance: 2230.00,
    income: [240, 300, 49],
    expenses: [-23, -300, -12]
  })

  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  
  return (

      <View style={styles.appContainer}>
        <StatusBar style='light' animated={false}/>
        <View style={styles.header}>
          <Image source={require('./assets/header.png')} style={styles.headerImage}/>
          <Text style={styles.headerText}>Oceanida</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.box}>
            <TotalDisplay userBalance={userData.balance}/>
          </View>
          <View style={styles.box}>
            <TransactionBlock userIncome={userData.income} userExpenses={userData.expenses}/>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2022 Oceanida and its related entities</Text>
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
    marginTop: 15,
  },
  footer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: blueTheme.secondary_backgroundColor,
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  footerText: {
    color: blueTheme.fontColor
  }
});
