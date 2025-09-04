
import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <View style={styles.settingRow}>
                <Text style={styles.label}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={setIsDarkMode}
                />
            </View>
            <View style={styles.settingRow}>
                <Text style={styles.label}>Enable Notifications</Text>
                <Switch
                    value={notificationsEnabled}
                    onValueChange={setNotificationsEnabled}
                />
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={() => {/* handle logout */}}>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 24,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1DB954',
        marginBottom: 30,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#222',
    },
    label: {
        color: '#fff',
        fontSize: 18,
    },
    logoutButton: {
        marginTop: 40,
        backgroundColor: '#1DB954',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
    },
    logoutText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
});

export default SettingsScreen;
