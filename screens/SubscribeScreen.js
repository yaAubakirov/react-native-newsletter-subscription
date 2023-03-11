import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
  useColorScheme,
} from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const colorScheme = useColorScheme();
  const [email, onChangeEmail] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const showAlert = () => {
    if (email != '') {
      Alert.alert('Thanks for subscription');
      setButtonDisabled(true);
      onChangeEmail('');
    } else {
      Alert.alert('Please, write your email');
    }
  };

  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#fff' }
          : { backgroundColor: '#333333' },
      ]}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo-grey.png')}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Text
        style={[
          styles.regularText,
          colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
        ]}>
        {' '}
        Subscribe to our newsletter for our latest delicious recipes!{' '}
      </Text>
      <TextInput
        style={[
          styles.inputBox,
          colorScheme === 'light' ? { color: '#EDEFEE' } : { color: '#333333' },
        ]}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'Type your email'}
        placeholderTextColor = "gray"
        keyboardType={'email-address'}
      />
      <Pressable
        style={[
          styles.button,
          buttonDisabled
            ? { backgroundColor: 'gray' }
            : { backgroundColor: '#495E57' },
        ]}
        disabled={buttonDisabled}
        onPress={() => {
          showAlert();
        }}>
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    padding: 20,
  },
  regularText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    paddingHorizontal: 32,
    marginVertical: 8,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  inputBox: {
    height: 40,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#EDEFEE',
    borderColor: 'EDEFEE',
    alignSelf: 'stretch',
  },
  button: {
    marginTop: 32,
    alignSelf: 'stretch',
    fontSize: 24,
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
