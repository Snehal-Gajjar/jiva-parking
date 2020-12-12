import React, { RefObject, forwardRef } from 'react'
import { Text, TextInput, TextInputProps, StyleProp, View, ViewStyle, FlexStyle, TextStyle } from 'react-native'
import { Color } from '../../utils/colors'
import styled from 'styled-components'
import { FormElement, FormElementProps, ErrorLabel } from './FormElement'
import { inputContainer, inputStyle, INPUT_HEIGHT, INPUT_PADDING } from './styles'
import { FieldAttributes, useField } from 'formik'

type ChosenTextProps = Omit<TextInputProps, 'error' | 'theme'>

const flexAttributes = {
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center'
}

const Container = styled(View)({
  ...inputContainer,
  ...(flexAttributes as {})
})

const errorStyle = {
  ...inputContainer,
  ...flexAttributes,
  borderColor: Color.RED_ERROR
}

interface ExtendedProps extends FormElementProps {
  name: string
  error?: string
  errorContainerStyle?: FlexStyle | TextStyle
  inputContainerStyle?: StyleProp<ViewStyle>
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TextFieldProps = ExtendedProps & ChosenTextProps & FieldAttributes<any>

export const TextField = forwardRef(
  (
    {
      containerStyle,
      error,
      errorContainerStyle,
      inputContainerStyle,
      label,
      labelContainerStyle,
      required,
      ...props
    }: TextFieldProps,
    ref?
  ) => {
    const { placeholder } = props
    const [
      {
        /*
      react native TextInput does not like when field props are spreac
      Warning: Formik called `handleChange`, but you forgot to pass an `id` or `name` attribute to your input
    */
      },
      { touched },
      { setTouched }
    ] = useField(props)

    /*
      Unresolved issues:
      https://github.com/facebook/react-native/issues/23117
      https://github.com/facebook/react-native/issues/18601
      https://github.com/facebook/react-native/issues/14856
    
      Due to scroll limitation in Android TextInput when no editable
      Scroll works fine in iOS when TextInput is not editable
      decision to make the view mode consistent in both iOS and Android
      reason why not including platform specific
    */
    const isEditable = props?.editable !== false
    const newContainerStyle = isEditable
      ? containerStyle
      : { ...containerStyle, height: undefined, minHeight: INPUT_HEIGHT }
    const newInputContainerStyle = isEditable
      ? inputContainerStyle
      : {
          ...inputContainerStyle,
          height: undefined,
          maxHeight: undefined,
          minHeight: INPUT_HEIGHT,
          padding: INPUT_PADDING
        }
    if (required && !label) props = { ...props, placeholder: `* ${placeholder}` }
    return (
      <FormElement {...{ containerStyle: newContainerStyle, label, labelContainerStyle, required }}>
        <Container
          style={
            error
              ? newInputContainerStyle
                ? { ...errorStyle, ...(newInputContainerStyle as {}) }
                : errorStyle
              : newInputContainerStyle
              ? (newInputContainerStyle as {})
              : {}
          }
        >
          {isEditable ? (
            <TextInput
              {...props}
              onBlur={() => {
                if (!touched) setTouched(true)
              }}
              ref={ref as RefObject<TextInput>}
              style={inputStyle}
            />
          ) : (
            <Text style={{ height: '100%', width: '100%' }}>{props.value || ''}</Text>
          )}
        </Container>
        {error && <ErrorLabel error={error} style={errorContainerStyle} />}
      </FormElement>
    )
  }
)
