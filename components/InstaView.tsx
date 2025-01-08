import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function InstaView() {
    const posts = [
        {
            id: 1,
            username: 'aditya_vishwakarma',
            profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQETxCeXLdhLIQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708104243391?e=1741824000&v=beta&t=VsGcLWGz-wuY5GXiRgv_dEW6uS0BTx75yFE0F8TVVVQ',
            postImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Coding and Funnn...! ✨✨',
        },
        {
            id: 2,
            username: 'vipul_sable',
            profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQEg50ty3T5lAA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1732285142601?e=1741824000&v=beta&t=gcQy1lzsthRTWnkIfjG1hNBhDcdH-damWVhOPMFK8wg',
            postImage: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Lovely day at the beach! 🏖️🌊',
        },
        {
            id: 3,
            username: 'sanskruti_lubal',
            profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQGqvTy3X-xilQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720768233068?e=1741824000&v=beta&t=NkYnRGRYZ_xcW9n_AfiTNwkmRPHCDvYQsEUr2zyYlCk',
            postImage: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'Delicious homemade food 🍝🍰',
        },
        {
            id: 4,
            username: 'khanapur_shruti',
            profileImage: 'https://media.licdn.com/dms/image/v2/D4D35AQHn-zBonocgcQ/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1697133298582?e=1736935200&v=beta&t=A2tp8qBH4aDNoBJc9uCC4JbsNd4NLKCQ_bCin6xM5r0',
            postImage: 'https://images.pexels.com/photos/5236076/pexels-photo-5236076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            caption: 'Exploring new places! 🌍✨',
        },
        {
            id: 5,
            username: 'gate_krushna',
            profileImage: 'https://media.licdn.com/dms/image/v2/D5635AQExLEsGnms9fA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731562911742?e=1736935200&v=beta&t=gfT5vUC7Q6KYBxHZegjs_Md3-iT6uOA6rq4jADeThFI',
            postImage: 'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=600',
            caption: 'fooding and travelling! 🌍🍰',
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Instagram View</Text>
            <ScrollView>
                {posts.map((post) => (
                    <View key={post.id} style={styles.postContainer}>
                        <View style={styles.postHeader}>
                            <Image
                                source={{ uri: post.profileImage }}
                                style={styles.profileImage}
                            />
                            <Text style={styles.username}>{post.username}</Text>
                        </View>
                        <Image
                            source={{ uri: post.postImage }}
                            style={styles.postImage}
                        />
                        <Text style={styles.caption}>{post.caption}</Text>
                        <View style={styles.actionsContainer}>
                            <TouchableOpacity>
                                <Text style={styles.actionText}>❤️ Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.actionText}>💬 Comment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.actionText}>🔄 Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.actionText}>🔗 Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 6,
    },
    postContainer: {
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginBottom: 20,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    postImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    caption: {
        padding: 10,
        fontSize: 14,
        color: '#333',
        paddingBottom: 10,
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#eee',
    },
    actionText: {
        fontSize: 12,
        color: '#007BFF',
        padding: 6,
    },
});
