import { Image, Text, StyleSheet, View } from 'react-native'

import React, { Component } from 'react'
import { blueTheme } from '../../stylesSheet'

export default TotalDisplay = ({userBalance }) => {
    
    return (

      <View style={styles.mainBody}>
        <Text style={[styles.bodyText, styles.title]}>Current Balance</Text>
        <View style={styles.amountSection}>
          <View style={styles.logo}>
            <Image source={require('../../assets/imgs/wallet.png')}/>
          </View>
          <View style={styles.bodyBlock}>
            <Text style={styles.bodyText}>{userBalance.toFixed(2)} €</Text>
          </View>
        </View>
      </View>   

    )

}

const styles = StyleSheet.create({
    mainBody: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: blueTheme.secondary_backgroundColor,
      borderRadius: 5,
      padding: 10,
      width: '95%'
    },
    amountSection: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12.5,
      marginBottom: 12.5
    },
    bodyText: {
      color: blueTheme.fontColor,
      fontSize: 35,
    },
    title: {
      fontSize: 40
    },
    bodyBlock: {
      alignSelf: 'center',
    },
    logo: {
      backgroundColor: blueTheme.main_backgroundColor,
      borderRadius: 50,
      padding: 12.5,
      marginRight: 40
    }
})