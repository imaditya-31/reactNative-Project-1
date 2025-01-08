import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
            <Text style={styles.textStyle}>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 16,
    },
    container:{
        padding: 8,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        margin: 4,
        borderRadius: 8
    },
    ElevatedCard: {
        backgroundColor: '#9694FF',
        elevation: 10,
        shadowColor: '#9694FF'
    },
    textStyle:{
        fontSize: 25,
        color: '#B7E0FF',
    }
})