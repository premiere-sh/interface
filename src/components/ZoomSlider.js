import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'

const trackH = '0.4em'
const thumbD = '1.5em'
const trackC = '#ccced0'
const filllC = '#f71735'

const track = css`
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: ${trackC};
  border-radius: 8px;
`

const trackFill = css`
  ${track};
  height: 6px;
  background-color: transparent;
  background-image: linear-gradient(${filllC}, ${filllC}),
    linear-gradient(${trackC}, ${trackC});
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`

const fill = css`
  height: ${trackH};
  background: ${filllC};
  border-radius: 4px;
`

const thumb = css`
  box-sizing: border-box;
  border: none;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: white;
  box-shadow: 0px 0px 5px rgba(66, 97, 255, 0.5);
`

const Input = styled.input`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-moz-range-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-ms-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * ${thumbD} + var(--ratio) * (100% - ${thumbD}));

  margin: 0;
  padding: 0;
  height: ${thumbD};
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${trackFill};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackH} - ${thumbD}));
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`

export default function ZoomSlider({ handleSlider }) {
  const [value, setValue] = useState(1)

  return (
    <div>
      <Input
        onInput={(e) => {
          setValue(e.target.value)
          handleSlider(e)
        }}
        type="range"
        min={1}
        max={5}
        step={0.1}
        value={value}
        style={{
          width: '100%',
          '--min': 1,
          '--max': 5,
          '--val': value
        }}
      />
    </div>
  )
}
