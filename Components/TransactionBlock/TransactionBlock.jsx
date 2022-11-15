import { Text, StyleSheet, Pressable, View, Modal } from 'react-native';
import { blueTheme } from '../../stylesSheet';
import { useState } from 'react';
import CustomModal from '../CustomModal/CustomModal';


const getResultFromArray = (Array) => {
    result = 0;
    
    Array.forEach(element => {
        result = element + result
    });

    return result;
}

export default TransactionBlock = ({ userIncome, userExpenses }) => {

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
                    <Text style={styles.incomeAmount}>{getResultFromArray(userIncome).toFixed(2)} €</Text>
                    <CustomModal 
                        title={'Income'}
                        style={blueTheme.modalTheme.incomeModal} 
                        show={showIncome} 
                        list={userIncome}
                        displayFunction={setShowIncome}
                        displayVariable={showIncome}/>
                </View>
            </Pressable>
            <Pressable onPress={() => setShowExpenses(!showExpenses)}>
                <View style={styles.expensesBlock}>
                    <Text style={styles.expensesTitle}>Expenses</Text>
                    <Text style={styles.expensesAmount}>{getResultFromArray(userExpenses).toFixed(2)} €</Text>
                    <CustomModal 
                        title={'Expenses'}
                        style={blueTheme.modalTheme.expensesModal} 
                        show={showExpenses} 
                        list={userExpenses}
                        displayFunction={setShowExpenses}
                        displayVariable={showExpenses}/>
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
        color: '#FF0000',
        fontSize: 20,
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
        color: '#0ECC23',
        fontSize: 20,
        textAlign: 'center'
    },
    incomeAmount: {
        color: blueTheme.fontColor,
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center'
    },
})