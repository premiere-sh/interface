import { Row, GradientText, Column, Container } from "components/common"
import {
  Heading,
  Caption,
  Subtext,
  Entry,
  Input,
  SmallInput
} from "components/Forms"
import styled from "styled-components"
import Link from "next/link"
import { Dots } from "react-activity"
import { useFormik } from "formik"
import { connect } from "react-redux"
import { getIsLoading, getTempCredentials } from "store/auth/auth.selectors"
import { confirmSignUp } from "store/auth/auth.actions"
import { SignupButtonLarge } from "components/Buttons"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { formContainer } from "aws-amplify"

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  tempCredentials: getTempCredentials(state)
})

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(confirmSignUp(values))
})

const RowEntry = styled(Row)`
  height: 130px;
  width: 589px;
  margin: auto;
`

const FormContainer = styled.div`
  margin: auto;
`

const ColumnEntry = styled(Column)``

const SubmitEntry = styled(Entry)`
  margin-top: 40px;
  height: 85px;
`

const Form = styled.form``

function ConfirmEmail({ isLoading, onSubmit, tempCredentials }) {
  const formik = useFormik({
    initialValues: {
      username: tempCredentials?.username,
      code: ""
    },

    onSubmit: values => onSubmit(values)
  })

  return (
    <FormContainer>
      {!isLoading ? (
        <Form onSubmit={formik.handleSubmit}>
          <Heading>confirm</Heading>
          <Subtext>Premiere is only available to users that are 18+</Subtext>
          <Entry>
            <Caption>Code</Caption>
            <SmallInput
              id="code"
              type="text"
              name="code"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.code}
            />
          </Entry>
          <SubmitEntry>
            <SignupButtonLarge type="submit" />
          </SubmitEntry>
        </Form>
      ) : (
        <Dots />
      )}
    </FormContainer>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail)
