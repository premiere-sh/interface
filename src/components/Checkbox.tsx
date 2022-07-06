import styled, { keyframes } from 'styled-components'

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`
interface LabelProps {
  disabled: boolean
}

const Label = styled.label<LabelProps>`
  position: relative;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin: 0.6em 1em;
`

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(45deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`

const Indicator = styled.div`
  width: 0.9em;
  height: 0.9em;
  background: #ffffff;
  position: absolute;
  top: 0em;
  left: -0.8em;
  border: 2px solid #eaeaea;
  border-radius: 0.2em;

  ${Input}:not(:disabled):checked & {
    background: #d1d1d1;
  }

  ${Label}:hover & {
    background: #ccc;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: block;
    left: 0.3em;
    width: 15%;
    height: 60%;
    border: solid #263238;
    border-width: 0 0.2em 0.2em 0;
    animation-name: ${rotate};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  &::disabled {
    cursor: not-allowed;
  }
`

export interface CheckboxProps {
  value: string
  name: string
  disabled?: boolean
  checked?: boolean
}

export default function Checkbox({
  value,
  name,
  disabled,
  checked
}: CheckboxProps) {
  return (
    <Label disabled={disabled}>
      <Input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <Indicator />
    </Label>
  )
}
