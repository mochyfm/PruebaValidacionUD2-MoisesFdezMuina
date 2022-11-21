import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { blueTheme } from '../../stylesSheet'
import { useState } from 'react'
import TransactionItem from '../TransactionItem/TransactionItem';

export default CustomModal = ({ title, style, display, displayFunction, typeOfItem, list, listTotal, deleteItem}) => {

    const [modifyDisplay, setModifyDisplay] = useState({
        state: false,
        id: 0,
    })
    
    return (
      <Modal visible={display} animationType={'fade'} transparent>
        <View style={[styles.mainBody, style]}>
            <View>
                <View style={styles.titleBlock}>
                    <Text style={[styles.title, ...style]}>{title}</Text>
                    <Text style={styles.subtitle}> ({listTotal.toFixed(2)}€)</Text>
                </View>
                <View style={styles.listBlock}>
                    { list.length === 0 ? 
                    <Text style={styles.notEnoughItemsText}>There is not enough elements yet.</Text>
                    : <FlatList data={list} renderItem={(productData) => {
                        const { description, quantity, id } = productData.item;
                        return (
                            <TransactionItem 
                            style={style} 
                            description={description} 
                            quantity={quantity} 
                            id={id}  
                            deleteItem={deleteItem} 
                            typeOfItem={typeOfItem}
                            />
                        )
                    }} /> }
                </View>
                <View style={styles.buttonBlock}>
                    <Pressable onPress={() => displayFunction(!display)} style={styles.button}>
                        <Text style={styles.buttonTheme}>Exit</Text>
                    </Pressable>
                </View>
            </View>
        </View> 
      </Modal>
    )
}

const styles = StyleSheet.create({
    mainBody: {
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: blueTheme.secondary_backgroundColor,
        borderRadius: 5,
        marginTop: 65,
        height: '80%',
        width: '95%',
    },
    titleBlock: { 
        alignSelf: 'center', 
        flexDirection: 'row',
        marginTop: 20, 
        marginBottom: 15
    },
    title: {
        justifyContent: 'center',
        fontSize: 30,
    },
    subtitle: {
        color: '#FFF',
        marginTop: 8,
        marginLeft: 5,
        fontSize: 20
    },
    listBlock: {
        flex: 1,
        height: 600,
    },
    buttonBlock: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: blueTheme.main_backgroundColor,
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginRight: 10,
        marginBottom: 30,
        width: 120
    },
    buttonTheme: {
        alignSelf: 'center',
        color: blueTheme.fontColor,
    },
    notEnoughItemsText: {
        color: blueTheme.commentText,
        fontStyle: 'italic'
    }
})