import React, { PropsWithChildren } from 'react'
import { View, FlexStyle, Text, StyleProp, ViewStyle, TextStyle } from 'react-native'
import styled from 'styled-components'
import { Color } from '../../utils/colors'
import { fontStyle } from './styles'

export const LabelContainer = styled(View)({
  alignItems: 'center',
  flexDirection: 'row',
  width: 'auto',
  padding: 5
})

export const Label = styled(Text)({
  ...fontStyle,
  display: 'flex'
})

export const ErrorLabel = ({ error, style }: { error: string; style?: FlexStyle | TextStyle }) => (
  <Label style={{ color: Color.RED_ERROR, fontSize: 14, fontWeight: 'normal', ...style }}>{error}</Label>
)

export interface FormElementProps {
  containerStyle?: FlexStyle | FlexStyle[]
  label?: string
  labelContainerStyle?: StyleProp<ViewStyle>
  required?: boolean
}
export const FormElement = ({
  containerStyle,
  children,
  label,
  labelContainerStyle,
  required
}: FormElementProps & PropsWithChildren<Element>) => (
  <View style={{ flex: 1, paddingTop: 5, paddingBottom: 5, width: '100%', ...(containerStyle as {}) }}>
    {label && !required && (
      <LabelContainer style={{ ...(labelContainerStyle as {}) }}>
        <Label>{label}</Label>
      </LabelContainer>
    )}
    {label && required && (
      <LabelContainer style={{ ...(labelContainerStyle as {}) }}>
        <Label style={{ color: Color.RED_ERROR, marginRight: 5 }}>*</Label>
        <Label>{label}</Label>
      </LabelContainer>
    )}
    <View style={{ flex: 1 }}>{children}</View>
  </View>
)
