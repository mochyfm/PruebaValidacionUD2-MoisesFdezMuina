import { Pressable, StyleSheet, Text, View } from 'react-native'
import { blueTheme } from '../../Constants/stylesSheet';
import React from 'react';

export default TransactionItem = ({style, id, description, quantity, date, deleteItem, typeOfItem}) => {

    return (
      <View style={[styles.transactionTransactionItem, ...style]}>
        <View style={styles.transactionDataBlock}>
          <View style={{alignSelf: 'flex-start', flexDirection: 'row', marginBottom: 30, width: '80%'}}>
            <Text style={[styles.descriptionLegend, ...style]}>
              Description: 
            </Text>
            <Text style={styles.transactionDescriptionText}>
                {description} 
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.transactionAmountText}>
               Amount: 
            </Text>
            <Text style={[styles.amountText, ...style]}>
                {quantity.toFixed(2)}
            </Text>
            <Text style={[styles.transactionAmountText, ...style]}>
               €
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.transactionDateText}>
              Date: 
            </Text>
            <Text style={styles.transactionDateText}>
              {date}
            </Text>
          </View>
        </View>
        <View style={styles.buttonSection}>
          <Pressable onPress={() => console.log("No funciona")}>
            <View style={styles.modifyItemButtonBlock}>
              <Text style={styles.buttonText}>
                Modify
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => deleteItem(id, typeOfItem)}>
            <View style={styles.removeItemButtonBlock}>
              <Text style={styles.buttonText}>
                Remove
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
    transactionTransactionItem: {
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 2,
      marginTop: 20,
      marginBottom: 20,
      padding: 20,
      width: '90%'
    },
    transactionDataBlock: {
      alignItems: 'flex-start',
      borderBottomColor: blueTheme.main_borderColor,
      borderBottomWidth: 3,
      paddingBottom: 15,
      width: '90%'
    },
    descriptionLegend: {
      fontWeight: 'bold',
      marginRight: 5
    },
    transactionDescriptionText: {
      color: blueTheme.descriptionColor,
    },
    transactionDateText: {
      color: blueTheme.dateColor,
      fontSize: 20,
      marginRight: 5
    },
    transactionAmountText: {
      color: blueTheme.descriptionColor,
      fontSize: 20
    },
    amountText: {
      color: blueTheme.fontColor,
      fontWeight: 'bold',
      fontSize: 20,
      marginLeft: 12,
      marginRight: 2
    },
    buttonSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      width: '90%'
    },  
    modifyItemButtonBlock: {
      backgroundColor: blueTheme.modifyButtonBackgroundColor,
      borderRadius: 5,
      padding: 8,
      paddingRight: 14,
      paddingLeft: 14
    },
    buttonText: {
      color: blueTheme.buttonFontColor,
      fontSize: 18,
    },
    removeItemButtonBlock: {
      backgroundColor: blueTheme.deleteButtonBackgroundColor,
      borderRadius: 5,
      padding: 8,
      paddingRight: 12,
      paddingLeft: 12
    },
    
})