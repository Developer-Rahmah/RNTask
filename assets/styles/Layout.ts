import { StyleSheet, Dimensions } from 'react-native'
import Colors from 'RNTask/assets/styles/Colors'

export default StyleSheet.create({
  radius: {
    borderRadius: 5
  },

  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  fullWidth: {
    width: '100%'
  },

  cardPadding: {
    padding: 20
  },
  margin: {
    margin: 20
  },
  largeHorizontalMargin: {
    marginHorizontal: 20
  },
  mediumCardPadding: {
    padding: 13
  },
  smallCardPadding: {
    padding: 7
  },

  bottomSpace: {
    paddingBottom: 7
  },

  header: {
    padding: 3,
    backgroundColor: Colors.GREEN,
    alignItems: 'flex-start'
  },

  flexDirectionRow: {
    flexDirection: 'row'
  },

  alignItemsFlexEnd: {
    alignItems: 'flex-end'
  },

  justifyContentSpaceBetween: {
    justifyContent: 'space-between'
  },
  statusBarHight: {
    height: Dimensions.get('window').height / 40
  },

  inputContainer: {
    borderWidth: 2,
    marginVertical: 20,
    borderColor: Colors.GRAY,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderRadius: 0,
    margin: 0,
    width: '100%',
    backgroundColor: Colors.LIGHT_GRAY
  },
  fieldContainerStyle: {
    marginVertical: -5,
    marginTop: 1,
    marginHorizontal: 9
  },
  smallMarginMinus: {
    marginTop: -7
  },
  pickerContainer: {
    width: Dimensions.get('window').width / 1.07,
    marginBottom: -12,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 0.7
  },
  fortySevenWidth: {
    width: '48.5%'
  }
})
