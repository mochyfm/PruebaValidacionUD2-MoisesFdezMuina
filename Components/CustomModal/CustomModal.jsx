import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { blueTheme } from '../../stylesSheet'

export default CustomModal = ({ title, style, show, list, displayFunction }) => {
    return (
      <Modal visible={show} animationType={'fade'} transparent>
        <View style={[styles.mainBody, style]}>
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.title, style]}>{title}</Text>
                    <Text style={styles.subtitle}> ({0.00.toFixed(2)}€)</Text>
                </View>
                <View style={styles.listBlock}>
                    {list.length === 0 ? 
                    <Text>There is not enough elements yet.</Text>
                    : <FlatList data={list} renderItem={(productData) => {
                        const { key, value } = productData.item;
                        console.log(key, value);
                        return (
                            <View>
                                <Text>{key}, {value}</Text>
                            </View>
                        )
                    }} />}
                </View>
                <View style={styles.buttonBlock}>
                    <Pressable onPress={() => displayFunction(!show)} style={styles.button}>
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
    buttonBlock: {
        alignSelf: 'center',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: blueTheme.main_backgroundColor,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        width: 120
    },
    buttonTheme: {
        alignSelf: 'center',
        color: blueTheme.fontColor,
    }
})