import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const contacts = [
        {
            uid: 1,
            name: 'Aditya Vishwakarma',
            gender: 'male',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQETxCeXLdhLIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708104243391?e=1741824000&v=beta&t=VsGcLWGz-wuY5GXiRgv_dEW6uS0BTx75yFE0F8TVVVQ'
        },
        {
            uid: 2,
            name: 'Vipul Sable',
            gender: 'male',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEg50ty3T5lAA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732285142601?e=1741824000&v=beta&t=gcQy1lzsthRTWnkIfjG1hNBhDcdH-damWVhOPMFK8wg'
        },
        {
            uid: 3,
            name: 'Sanskruti Lubal',
            gender: 'female',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGqvTy3X-xilQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720768233068?e=1741824000&v=beta&t=NkYnRGRYZ_xcW9n_AfiTNwkmRPHCDvYQsEUr2zyYlCk'
        },
        {
            uid: 4,
            name: 'Shruti Khanapur',
            gender: 'female',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D35AQHn-zBonocgcQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1697133298582?e=1736935200&v=beta&t=A2tp8qBH4aDNoBJc9uCC4JbsNd4NLKCQ_bCin6xM5r0'
        },
        {
            uid: 5,
            name: 'Krushna Gate',
            gender: 'male',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D5635AQExLEsGnms9fA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731562911742?e=1736935200&v=beta&t=gfT5vUC7Q6KYBxHZegjs_Md3-iT6uOA6rq4jADeThFI'
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container}>
                {contacts.map(({ uid, name, gender, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{
                                uri: imageUrl
                            }}
                            style={styles.userImage}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.nameContainer}>Name: {name}</Text>
                            <Text style={styles.genderContainer}>Gender: {gender}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: '#FFFFFF',
        paddingHorizontal: 8,
        marginBottom: 10,
    },
    container: {
        paddingHorizontal: 14,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    nameContainer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    genderContainer: {
        fontSize: 16,
        color: '#666666',
    },
});
