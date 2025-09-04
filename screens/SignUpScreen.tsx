import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SpotifyLogin: undefined;
};
const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
        <LinearGradient
          colors={['#232526', '#111010']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.container}
        >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20, marginTop: 60 }}>
            <Image source={require('../images/Spotify_logo_without_text.svg.png')} style={styles.logo} />
            <Text style={styles.title}>  Spotify</Text>
        </View>

        <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          style={[styles.input, { marginTop: 30 }]}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.connectText}>Or sign up with</Text>
      <View style={styles.socialRow}>
        <Image source={require('../images/facebook.png')} style={styles.fbIcon} alt="Facebook" />
        <Image source={require('../images/social.png')} style={styles.fbIcon} alt="Google Button" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Text style={{ color: '#888' }}>Already have an account? </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('SpotifyLogin') }}>
          <Text style={{ color: '#1DB954', fontWeight: 'bold' }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
socialRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 10,
  marginBottom: 10,
},
fbIcon: {
  width: 36,
  height: 36,
  marginHorizontal: 5,
  tintColor: '#fff',
  shadowColor: '#1DB954',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.7,
  shadowRadius: 6,
  elevation: 6,
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
  width: 50,
  height: 50,
  marginBottom: 5,
  resizeMode: 'contain',
  },
  title: {
  fontSize: 28,
  fontFamily: 'Gotham Medium',
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#fff',
  },
  form: {
    width: '85%',
    alignItems: 'center',
    marginTop: 80,
  },
  input: {
    width: '100%',
    height: 44,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 22,
    marginBottom: 16,
    paddingHorizontal: 18,
    color: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  forgot: {
    alignSelf: 'flex-end',
    color: '#888',
    fontSize: 13,
    marginBottom: 24,
    marginRight: 8,
  },
  loginButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 0,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'center',
    width: '100%',
  },
  connectText: {
    color: '#1DB954',
    fontSize: 12,
    marginTop: 10,
  },
});
export default SignUpScreen;


