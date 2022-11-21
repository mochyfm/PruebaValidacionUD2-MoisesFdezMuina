import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { blueTheme } from '../../stylesSheet'
import TransactionItem from '../TransactionItem/TransactionItem';

export default CustomModal = ({ title, style, display, list, listTotal, displayFunction }) => {
    return (
      <Modal visible={display} animationType={'fade'} transparent>
        <View style={[styles.mainBody, style]}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.title, ...style]}>{title}</Text>
                    <Text style={styles.subtitle}> ({listTotal}€)</Text>
                </View>
                <View style={styles.listBlock}>
                    {list.length === 0 ? 
                    <Text style={styles.notEnoughItemsText}>There is not enough elements yet.</Text>
                    : <FlatList data={list} renderItem={(productData) => {
                        const { description, quantity, id } = productData.item;
                        return (
                            <TransactionItem style={style} description={description} quantity={quantity} id={id}/>
                        )
                    }} />}
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
        backgroundColor: blueTheme.secondary_backgroundColor,
        borderRadius: 5,
        marginTop: 65,
        height: '80%',
        width: '95%'
    },
    title: {
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20,
        fontSize: 30
    },
    subtitle: {
        alignSelf: 'center',
        color: '#FFF',
        marginLeft: 15,
        marginBottom: 20,
        marginTop: 20,
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