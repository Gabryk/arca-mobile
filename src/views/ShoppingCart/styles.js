import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  orderQuantity: {
    textAlign: 'center'
  },
  image: {
    width: width,
    height: width*0.5
  }
})