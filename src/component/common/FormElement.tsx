import {Formik, FormikHelpers, FormikProps, FormikValues} from 'formik';
import React, {FC} from 'react';

type Props = {
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  ) => void;
} & FormikProps<FormikValues>;

export const FormElement: FC<Props> = ({...props}) => {
  return (
    <Formik {...props} onSubmit={props.onSubmit}>
      {props.children}
    </Formik>
  );
};
