import { Text, StyleSheet, Pressable, View, Modal } from 'react-native';
import { blueTheme } from '../../stylesSheet';
import { useState } from 'react';
import CustomModal from '../CustomModal/CustomModal';

export default TransactionBlock = ({ userIncome, totalIncome, userExpenses, totalExpenses }) => {

    const [showExpenses, setShowExpenses] = useState(false);
    const [showIncome, setShowIncome] = useState(false);

    return (
    <View style={styles.mainBody}>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>Transactions</Text>
            <Text style={styles.subTitle}>(this month)</Text>
        </View>
        <View style={styles.rowDisplay}>
            <Pressable onPress={() => setShowIncome(!showIncome)}>
                <View style={styles.incomeBlock}>
                    <Text style={styles.incomeTitle}>Income</Text>
                    <Text style={styles.incomeAmount}>{totalIncome.toFixed(2)} €</Text>
                    <CustomModal 
                        title={'Income'}
                        style={[blueTheme.modalTheme.incomeModal, blueTheme.modalTheme.incomeModalText]}  
                        list={userIncome}
                        listTotal={totalIncome}
                        display={showIncome}
                        displayFunction={setShowIncome}/>
                </View>
            </Pressable>
            <Pressable onPress={() => setShowExpenses(!showExpenses)}>
                <View style={styles.expensesBlock}>
                    <Text style={styles.expensesTitle}>Expenses</Text>
                    <Text style={styles.expensesAmount}>{totalExpenses.toFixed(2)} €</Text>
                    <CustomModal 
                        title={'Expenses'}
                        style={[blueTheme.modalTheme.expensesModal, blueTheme.modalTheme.expensesModalText]} 
                        list={userExpenses}
                        listTotal={totalExpenses}
                        display={showExpenses} 
                        displayFunction={setShowExpenses}/>
                </View>
            </Pressable>
        </View>
    </View> 
    )

}

const styles = StyleSheet.create({
    mainBody: {
        alignSelf: 'center',
        backgroundColor: blueTheme.secondary_backgroundColor,
        borderRadius: 5,
        padding: 10,
        width: '95%'
    },
    titleBlock: {
        alignItems: 'center',
    },
    rowDisplay: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 20
    },
    title: {
        fontSize: 40,
        color: blueTheme.fontColor
    },
    subTitle: {
        fontSize: 25,
        color: blueTheme.fontColor
    },
    expensesBlock: {  
        alignSelf: 'center',      
        marginLeft: 35,
    },
    expensesTitle: {
        color: blueTheme.fontExpensesColor,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    expensesAmount: {
        color: blueTheme.fontColor,
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center'
    },
    incomeBlock: {
        borderRightWidth: 1,
        paddingRight: 35,
    },
    incomeTitle: {
        color: blueTheme.fontIncomeColor,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    incomeAmount: {
        color: blueTheme.fontColor,
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center'
    },
})