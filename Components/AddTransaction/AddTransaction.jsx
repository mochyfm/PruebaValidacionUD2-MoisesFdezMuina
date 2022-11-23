import { Text, StyleSheet, Pressable, View } from 'react-native'
import { blueTheme } from '../../Constants/stylesSheet'

export default AddTransaction = ({ show, showFunction}) => {

    return (
        <View style={styles.transactionBlock}>
            <View style={styles.transactionTitleSection}>
              <Text style={styles.addTransactionTitle}>Create a Transaction</Text>
            </View>
            <Pressable onPress={() => showFunction(!show)}>
              <View style={styles.addTransactionButton}>
                  <Text style={styles.addTransactionText}>Add a new Transaction</Text>
              </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    transactionBlock: {
        alignSelf: 'center',
        backgroundColor: blueTheme.secondary_backgroundColor,
        borderRadius: 5,
        width: '95%',
      },
      addTransactionTitle: {
        alignSelf: 'center',
        color: blueTheme.fontColor,
        fontSize: 30,
        marginTop: 25,
        marginBottom: 25,
      },
      addTransactionButton: {
        alignSelf: 'center',
        backgroundColor: blueTheme.main_backgroundColor,
        padding: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 5,
        marginBottom: 40,
      },
      addTransactionText: {
        color: blueTheme.fontColor,
        fontSize: 25,
      },
})