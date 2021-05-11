import { StyleSheet, Dimensions } from 'react-native'
import Colors from './Colors'

export default StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%'
  },

  greenBackground: {
    backgroundColor: Colors.GREEN
  },

  lightGrayBackground: {
    backgroundColor: Colors.LIGHT_GRAY
  },
  blueBackground: {
    backgroundColor: Colors.LIGHT_BLUE
  },
  verticalPadding: {
    paddingVertical: Dimensions.get('window').height / 17
  },
  smallHeight: {
    height: Dimensions.get('window').height / 4
  },
  mediumVerticalPadding: {
    paddingVertical: 16
  },

  paddingBottom: {
    paddingBottom: Dimensions.get('window').height / 7.5
  },

  shadow: {
    elevation: 1.5,
    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1
  },

  largePadding: {
    paddingVertical: Dimensions.get('window').width / 27,
    paddingHorizontal: Dimensions.get('window').width / 37
  },
  border: {
    borderColor: Colors.BLACK,
    borderWidth: 1
  }
})
