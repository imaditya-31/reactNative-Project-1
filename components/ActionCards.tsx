import { StyleSheet, Text, View, Linking, Image, TouchableOpacity, } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Cards</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        Most Beautiful Mountains in the whole World
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt aliquam non ex inventore consectetur debitis omnis ipsam cum ab animi, sunt laboriosam quibusdam dolor at numquam? Illo, eveniet in!
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/aditya-vishwakarma-0903a01b5')}>
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    // onPress={() => openWebsite('https://www.linkedin.com/in/aditya-vishwakarma-0903a01b5')}
                    >
                        <Text style={styles.socialLinks}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: '#FFFFFF',
        paddingHorizontal: 8,
    },
    card: {
        width: 360,
        height: 360,
        borderRadius: 4,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: '#FFFFFF',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333'
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#213555',
        fontSize: 16,
        fontWeight: 'bold',
    },

    cardImage: {
        height: 180,
    },

    bodyContainer: {
        padding: 10,
    },

    footerContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    socialLinks: {
        fontSize: 14,
        color: '#F5EFFF',
        backgroundColor: '#001A6E',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 8,
    },
})