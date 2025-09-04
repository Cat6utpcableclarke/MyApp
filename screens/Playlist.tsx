import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const playlists = [
    { id: '1', title: 'Chill Vibes' },
    { id: '2', title: 'Workout Mix' },
    { id: '3', title: 'Top Hits' },
];

const Playlist = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Playlists</Text>
            <FlatList
                data={playlists}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 18,
    },
});

export default Playlist;