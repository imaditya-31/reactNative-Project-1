import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <Image
                    source={{
                        uri: 'https://lh3.googleusercontent.com/86arOE_jc_FYR6_mPbeXrzWB4LwvgCRWPGXbbftgG4_zAjY05ajbmq3xiG0Xc_uYCoTccikGvLdo5WIlofH5pmySn1VRejqngh2pwDLquiLJYayCOJKUrZKFnOwmSxKzQqqOM1y5o42TPk6LYR1vbPjrEPx3dQIUEwS4IPRjzt3JdPZT32TkqCECm-PoQtsBAPnyN6g46PbiyD9fblgzuBcT2xuO1AaZgOkR53bom8ATCBkDgcYT_mnsxWuxLGp6cNFUR4lWBFKyYkYJWJY--KmIVCWDDoJ3SxwjimGjwRG-X2Qu3AP4wa6tRazHuBo3a8IOofm6f5arSRdpVy4AaXoacTPz8TSkcofA0YaIttHpek1Gi5v1yMSbi5mHV6Mfv4lyczXPp8c5iNR7IFPvgMz1BiCETTxNwSvDjb2JCN94_256Fzejrs-Dk-kMYeCCYQh2Zd_lt9xiEQDgZ5gufdpxxM9xDiP447vrOqKbBMcAS_6hu43EwRi97ILAhBpS3QLP-4WhKf4GHauWqML_EcBvhszB-6T1iGeCWvpAT9jZVDVgekalBvLZiZNoy5Ow9QlnHA=w1827-h711-no-tmp.jpg',
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Himalayas</Text>
                    <Text style={styles.cardLabel}>The Great Himalayas.</Text>
                    <Text style={styles.cardCDescription}>Great Himalayan Mountain range and the White Crown of India</Text>
                    <Text style={styles.cardFooter}>Please do visit...</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        paddingHorizontal: 16,
    },
    card: {
        height: 350,
        width: 360,
        borderRadius: 6,
        marginVertical: 10,
        marginHorizontal: 16,
    },
    elevatedCard: {
        backgroundColor: 'white',
        elevation: 6,
    },
    cardImage: {
        height: 150,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 22,
        marginBottom: 6,
        color: '#133E87'
    },
    cardLabel: {
        fontSize: 18,
        marginBottom: 8,
        color: '#133E87',
        fontWeight: '700',
    },
    cardCDescription: {
        fontSize: 16,
        marginBottom: 6,
        marginTop: 6,
        flexShrink: 1,
        color: '#4A628A'
    },
    cardFooter: {
        fontSize: 10,
        marginTop: 4,
        marginBottom: 4,
        color: '#A6AEBF'
    },
});
