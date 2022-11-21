import { Image, Modal, Text, StyleSheet, View, TextInput } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { blueTheme } from '../../stylesSheet'
import { useState, useEffect } from 'react'

export default TransactionForm = ({show, showFunction, addTransaction}) => {

    const [typeOfTransaction, setTypeOfTransaction] = useState('positive')
    
    const defaultForm = {
        quantity: 0,
        description: ''
    } 

    const [formData, setFormData] = useState(defaultForm)

    useEffect(() => {
        parseAmount();
      }, [typeOfTransaction, formData.description, formData.quantity])

    const setQuantity = (value) => {
        result =  parseFloat(value)
        setFormData({ ...formData, quantity: result});
    }

    const parseAmount = () => {
        result = Math.abs(formData.quantity);
        if(result !== 0) {
            switch (typeOfTransaction) {
                case 'positive':
                    result = -result * -1;
                    break;
                case 'negative':
                    result = result * -1;
                    break;
            }
        }
        setFormData({ ...formData, quantity: result});
    }


    const setDescription = (value) => {
        setFormData({ ...formData, description: value});
    }

    const turnValue = (typeOfValue) => {
        setTypeOfTransaction(typeOfValue);
    }

    const submitData = () => {
        if (checkStatus()) {
            addTransaction(typeOfTransaction, formData)
            showFunction(!show);
            setFormData(defaultForm);
        }
    }

    const checkStatus = () => {
        return (Math.abs(formData.quantity) > 0 || formData.quantity < 0)
        && formData.description.trim() != '';
    }

    return (
        <Modal show={show} animationType={'fade'} transparent>
            <View style={styles.transactionFormBody}>
                <View style={styles.transactionDataInput}>
                    <View style={styles.transactionFormTitleBlock}>
                        <Text style={styles.transactionFormTitle}>Add a new Transaction</Text>
                    </View>
                    <View style={styles.transactionValueInputSection}>
                        <View style={styles.transactionLabelQuantityInputSection}>
                            <Text style={styles.transactionLabel}>Quantity: </Text>
                            <TextInput 
                                style={styles.transactionTextInput} 
                                keyboardType='numeric'
                                maxLength={5}
                                placeholder={'Quantity to add'}
                                placeholderTextColor={blueTheme.placeholderTextColor}
                                onChangeText={(value) => setQuantity(value)}
                                value={formData.quantity}/>
                        </View>
                        <View style={styles.transactionLabelTextInputSection}>
                            <Text style={styles.transactionLabel}>Description: </Text>
                            <TextInput 
                                multiline
                                style={[styles.transactionTextInput, styles.transactionDescriptionInput]} 
                                placeholder={'Description'}
                                placeholderTextColor={blueTheme.placeholderTextColor}
                                onChangeText={(value) => setDescription(value)}
                                value={formData.description}/>
                        </View>
                        <View style={styles.transactionDataTypeSection}>
                            <Pressable onPress={() => turnValue('positive')}>
                                <View style={[styles.transactionDataTypeButton, typeOfTransaction === 'positive' ? blueTheme.selectedPositiveButton : blueTheme.positiveButton ]}>
                                    <Text style={styles.transactionDataTypeText}>+</Text>
                                </View>
                            </Pressable>
                            <Pressable onPress={() => turnValue('negative')}>
                                <View style={[styles.transactionDataTypeButton, typeOfTransaction === 'negative' ? blueTheme.selectedNegativeButton : blueTheme.negativeButton]}>
                                    <Text style={styles.transactionDataTypeText}>-</Text>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.transactionButtonBlock}>
                        <Pressable onPress={() => submitData()}>
                            <View style={[styles.transactionFormButton, (checkStatus() ? styles.transactionEnabledButton : styles.transactionDisabledButton)]}>
                                <Text style={checkStatus() ? styles.transactionFormAddTextEnabled : styles.transactionFormAddTextDisabled}>Add</Text>
                            </View>
                        </Pressable>
                        <Pressable onPress={() => showFunction(!show)} >
                            <View style={styles.transactionFormButton}>
                                <Text style={styles.transactionFormExitText}>Exit</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    transactionFormBody: {
        flex: 1,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: blueTheme.main_backgroundColor,
        borderRadius: 5,
        padding: 20,
        paddingTop: 70,
        width: '100%',   
    },
    transactionDataInput: {
        backgroundColor: blueTheme.secondary_backgroundColor,
        borderRadius: 10,
        padding: 25,
        width: '100%',
    },
    transactionFormTitleBlock: {
        borderBottomWidth: 1,
        borderBottomColor: blueTheme.horizontalLineColor,
        marginBottom: 20,   
        paddingBottom: 10,
        width: '100%'
    },
    transactionFormTitle: {
        color: blueTheme.fontColor,
        fontSize: 25,
        textAlign: 'center',
    },
    transactionValueInputSection: {
        marginTop: 20,
        alignContent: 'center',
    },
    transactionLabelQuantityInputSection: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    transactionLabelTextInputSection: {
        marginTop: 10,
        marginLeft: 15,
    },  
    transactionLabel: {
        color: blueTheme.fontColor,
        fontSize: 20,
    },
    transactionTextInput: {
        color: blueTheme.fontColor,
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'left'
    },  
    transactionDescriptionInput: {
        color: blueTheme.fontColor,
        borderColor: blueTheme.main_borderColor,
        borderRadius: 5,
        borderBottomWidth: 2.5,
        fontSize: 16,
        marginTop: 10,
        textAlign: 'left',
        padding: 20,
        width: '90%'
    },  
    transactionButtonBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    transactionDataTypeSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20
    },
    transactionDataTypeButton: {
        borderRadius: 7,
        padding: 7,
        paddingLeft: 30,
        paddingRight: 30
    },
    transactionDataTypeText: {
        color: blueTheme.positiveButton.fontColor,
        fontSize: 30,
        fontWeight: 'bold'
    },  
    transactionFormButton: {
        alignSelf: 'center',
        backgroundColor: blueTheme.main_backgroundColor,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        width: 120,
    },
    transactionFormExitText: {
        color: blueTheme.fontColor,
        textAlign: 'center'
    },
    transactionDisabledButton: {
        backgroundColor: blueTheme.disabledButton_backgroundColor,
    },
    transactionEnabledButton: {
        backgroundColor: blueTheme.enabledButton_backgroundColor,
    },
    transactionFormAddTextEnabled: {
        color: blueTheme.enabledButton_fontColor,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    transactionFormAddTextDisabled: {
        color: blueTheme.disabledButton_fontColor,
        textAlign: 'center'
    }
})