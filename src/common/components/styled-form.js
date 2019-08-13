import styled from "styled-components"
import {Form} from "formik"


export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-color: #f5f5f5;
  width: 500px;
  padding: 10px 15px 20px 15px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
`

export const FormActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #b9b9b9;
  padding-top: 15px;
`

export const FieldContainer = styled.div`
  margin-bottom: 15px;
`