import { Text, StyleSheet, Pressable, View, Modal } from 'react-native';
import { blueTheme } from '../../stylesSheet';
import { useState } from 'react';


const getResultFromArray = (Array) => {
    result = 0;
    Array.forEach(element => {
        result = element + result
    });

    return result;
}

export default TransactionBlock = ({ userCompleteHistory }) => {

    const [showExpenses, setshowExpenses] = useState(false);
    const [showIncome, setShowIncome] = useState(false);

    return (
    <View style={styles.mainBody}>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>Transactions</Text>
            <Text style={styles.subTitle}>(this month)</Text>
        </View>
        <View style={styles.rowDisplay}>
            <Pressable onPress={() => console.log('Income')}>
                <View style={styles.incomeBlock}>
                    <Text style={styles.incomeTitle}>Income</Text>
                    <Text style={styles.incomeAmount}>{getResultFromArray(userCompleteHistory[0]).toFixed(2)} €</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={styles.expensesBlock}>
                    <Text style={styles.expensesTitle}>Expenses</Text>
                    <Text style={styles.expensesAmount}>{getResultFromArray(userCompleteHistory[1]).toFixed(2)} €</Text>
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