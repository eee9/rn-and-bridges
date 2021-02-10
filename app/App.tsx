import React from 'react';
import {
  View,
  Text,
  Button,
  BackHandler,
  Platform,
  StyleSheet,
} from 'react-native';

import * as Natives from './Natives';

// Note. Using here export breaks quick Hot Reload
const andAPIlvl = (): string =>
  Platform.OS === 'android' ? Platform.Version.toString() : '';

const HEIGHT_BR = 10;
const BR = () => <Text style={styles.BR}> </Text>;
const appVer = 'r04, L2A';

const App = () => {
  return (
    <View style={styles.MainView}>
      <Text style={styles.Text1}>{appVer}</Text>
      <Text style={styles.Text2}>React Native - Android bridge tests.</Text>
      <Text style={styles.Text3}>(TypeScript, API: {andAPIlvl()})</Text>
      <BR />
      <Button
        title="  Bridge Java  "
        onPress={() => {
          Natives.Toast('Java Bridge Test.');
        }}
      />
      <BR />
      <Button
        title="  Exit  "
        onPress={() => {
          BackHandler.exitApp();
        }}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Text2: {
    color: 'blue',
    fontSize: 18,
  },
  Text3: {
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  BR: {
    height: HEIGHT_BR,
  },
});