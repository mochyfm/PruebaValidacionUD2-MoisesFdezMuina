import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default TransactionItem = ({style, description, quantity}) => {
    
    return (
      <View style={[...style, {flexDirection: 'row'}]}>
        <Text>
            {description} 
        </Text>
        <Text style={[...style]}>
            {quantity.toFixed(2)}
        </Text>
      </View>
    )

}

const styles = StyleSheet.create({
    
})