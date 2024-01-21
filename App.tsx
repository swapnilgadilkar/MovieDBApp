import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <View style={styles.container}>
          <Pressable onPress={() => {}}>
            <Text>Test</Text>
          </Pressable>
        </View>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
