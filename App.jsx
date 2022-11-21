import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { blueTheme } from './stylesSheet';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import TotalDisplay from './Components/TotalDisplay';
import TransactionBlock from './Components/TransactionBlock';
import AddTransaction from './Components/AddTransaction';
import TransactionForm from './Components/TransactionForm';

export default App = () => {

  const [incomeList, setIncomeList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const getTotal = (Array) => {
    let result = 0;
    if (Array.length !== 0) {
      Array.forEach(element => {
          result += element.quantity
      });
    } 
    return result
  }

  const [userData, setUserData] = useState({
    balance: 0,
    income: incomeList,
    totalIncome: getTotal(incomeList),
    expenses: expensesList,
    totalExpenses: getTotal(expensesList)
  });

  useEffect(() => {

    setUserData({
      balance: getTotal(incomeList) + getTotal(expensesList),
      income: incomeList,
      totalIncome: getTotal(incomeList),
      expenses: expensesList,
      totalExpenses: getTotal(expensesList)
    })

  }, [incomeList, expensesList]);

  const addTransaction = (typeOfTransaction, element) => {
    switch(typeOfTransaction) {
      case 'positive':
        setIncomeList([...incomeList, { id: uuidv4.v4(), ...element }])
        break;
      case 'negative':
        setExpensesList([...expensesList, { id: uuidv4.v4(), ...element }])
        break;
    }
  }

  const deleteItem = (idItem, typeOfList) => {
      switch(typeOfList) {
        case 'income':
          setIncomeList(() => incomeList.filter((element) => element.id !== idItem));
          break;
        case 'expenses':
          setExpensesList(() => expensesList.filter((element) => element.id !== idItem));
          break;
      }

  }

  return (
    
    <View style={styles.appContainer}>
      <StatusBar style='light' animated={false}/>
      {!(showAddTransaction) 
      ? <View style={styles.header}>
        <Image source={require('./assets/header.png')} style={styles.headerImage}/>
        <Text style={styles.headerText}>Oceanida</Text>
      </View> : null}
      <View style={styles.body}>
        {!(showAddTransaction) 
        ? <View style={styles.box}>
          <TotalDisplay userBalance={userData.balance}/>
        </View> : null }
        {!(showAddTransaction) 
        ? <View style={styles.box}>
          <TransactionBlock 
            userIncome={userData.income} 
            totalIncome={userData.totalIncome}
            userExpenses={userData.expenses}
            totalExpenses={userData.totalExpenses}
            deleteItem={deleteItem}
            />
        </View> : null }
        <View style={styles.box}>
        {!(showAddTransaction) 
        ? <AddTransaction
            show={showAddTransaction}
            showFunction={setShowAddTransaction}/>  : null }
          {showAddTransaction === true 
          ? <TransactionForm 
              show={showAddTransaction} 
              showFunction={setShowAddTransaction}
              addTransaction={addTransaction}
            />
          : null} 
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
    flex: 1,
    justifyContent: 'center',
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
    justifyContent: 'center',
    marginTop: 15,
  },
  footer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: blueTheme.secondary_backgroundColor,
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    width: '100%'
  },
  footerText: {
    color: blueTheme.fontColor
  }
});
