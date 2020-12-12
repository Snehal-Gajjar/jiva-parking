import { Color } from '../../utils/colors'

export const INPUT_HEIGHT = 42
export const INPUT_PADDING = 10
export const inputContainer = {
  borderColor: Color.BORDER_COLOR,
  borderRadius: 5,
  borderWidth: 0.7,
  flex: 1,
  height: INPUT_HEIGHT,
  marginVertical: INPUT_PADDING,
  width: '100%'
}

export const fontStyle = {
  fontSize: 14
}

export const inputStyle = {
  ...fontStyle,
  paddingHorizontal: INPUT_PADDING,
  width: '100%',
  height: '100%',
  color: Color.BLACK
}

export const errorLabelStyle = { color: Color.RED_ERROR, fontSize: 14, fontWeight: 'normal' }
