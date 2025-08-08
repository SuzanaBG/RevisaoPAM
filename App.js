import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import casual from './assets/casual_dog.png'
import google from './assets/Google.png'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container1}>
        <Image source={casual} style={styles.img1}></Image>
        <Text style={styles.text1}>Ótimo dia!</Text>
        <Text style={styles.text2}>Como deseja acessar?</Text>
      </View>

      <View style={styles.container2}>
        <Pressable style={styles.btt1}>
          <Image source={google} style={styles.img2}></Image>
          <Text style={styles.text3}>Como deseja acessar?</Text>
        </Pressable>
        <Pressable style={styles.btt2}>
          <Text style={styles.text4}>Outras opções</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container1: {
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  text1: {
    fontWeight: 'bold',
    color: '#555555',
    fontSize: '50px'
  },

  text2: {
    fontWeight: 'bold',
    color: '#555555',
    fontSize: '20px'
  },

  btt1: {
    backgroundColor: '#14c871',
    width: '300px',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  img2: {
    width: '20%',
  },

  text3: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center'
  },

  btt2: {
    backgroundColor: '#fefefe',
    width: '300px',
    borderRadius: 10,
    height: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#14c871',
    borderWidth: 2,
    marginTop: 10,
  },

  text4: {
    textAlign: 'center'
  },

});
