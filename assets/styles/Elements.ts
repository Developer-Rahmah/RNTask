import { Dimensions, I18nManager, StyleSheet } from 'react-native'
import Colors from 'RNTask/assets/styles/Colors'

export default StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center'
  },

  summary: {
    color: Colors.LIGHT_GRAY,

    fontSize: 15,
    textAlign: 'left'
  },

  inputContainer: {
    width: '90%'
  },

  deleteContainer: {
    marginStart: -120,
    marginTop: -30
  },
  msgContainer: {
    marginStart: -65,
    marginTop: 10
  },
  buttonsContainer: {
    alignItems: 'center',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width / 1.8
  },

  noItemsMessageContainer: {
    height: Dimensions.get('window').height / 1.7
  },

  separator: {
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 2
  },
  customAlert: {
    paddingHorizontal: 100,
    paddingVertical: 65,
    backgroundColor: Colors.WHITE
  }
})
