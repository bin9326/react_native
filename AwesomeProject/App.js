import react from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lavender',
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
