import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Sound from 'react-native-sound';
import { Platform } from 'react-native';
type RootStackParamList = {
  Greet: { name: string };
};

function ComponentShowcase() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [count, setCount] = useState(0);

 
  const handleIncrement = () => {
    setCount(count + 1);
    Sound.setCategory('Playback');
    const fileName = Platform.OS === 'android' ? 'vine_boom' : 'vine-boom.mp3';
    const sound = new Sound(
      fileName,
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('Failed to load sound', error);
          return;
        }
        sound.play(() => {
          sound.release();
        });
      }
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Component Showcase</Text>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Image Component</Text>
          <Image source={require('../images/shrek.jpg')} style={styles.image} />
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Text Component</Text>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Counter</Text>
          <Text style={styles.counter}>Count: {count}</Text>
          <View style={styles.buttonRow}>
            <Button title="Tap to Increment" onPress={handleIncrement} />
          </View>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Navigation</Text>
          <View style={styles.buttonRow}>
            <Button title="Go to Greet Screen" onPress={() => navigation.navigate('Greet', { name: 'John' })} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 15,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007bff',
    textAlign: 'center',
  },
  text: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  counter: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  image: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ComponentShowcase