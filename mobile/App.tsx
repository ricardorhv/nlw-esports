import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello React Native
      </Text>
      <Button title="Send"/>
      <StatusBar style="auto"  />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DEDEDE',
    padding: 10,
    marginTop: 10
  },
  title: {
    color: '#fff',
    fontSize: 24
  }
});
