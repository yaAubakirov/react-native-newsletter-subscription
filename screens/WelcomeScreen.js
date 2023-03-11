import * as React from 'react';
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <View style={styles.contentWrapper}>
        <Image
          style={styles.image}
          source={require('../assets/little-lemon-logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text
          style={[
            styles.regularText,
            colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
          ]}>
          {' '}
          Little Lemon, your local Miditerranean Bistro{' '}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate('Subscribe');
          }}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  regularText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    paddingHorizontal: 50,
    marginVertical: 8,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    marginVertical: 50,
    marginTop: 32,
    alignSelf: 'stretch',
    fontSize: 24,
    padding: 12,
    backgroundColor: '#495E57',
    borderRadius: 12,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
