import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SvgComponent from './Svg';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 
      Hello
      </Text>
      <SvgComponent/>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text:{
    fontSize:60,
    textAlign:'center',
    color:'#F48CA7',
  }
});
