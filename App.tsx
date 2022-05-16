import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes';


export default function App() {
    return (
    // <View style={styles.container}>
    //     <Text>Felipe up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    // </View>
    <>
        <Routes />
        <Toast />
    </>
);
}

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
// },
// });



// export default function App() {
//   return (
    
//   );
// }