import { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef(function Input(props, ref) {
  const {
    inputValue_1,
    inputValue_2,
    errorInput_1,
    errorInput_2,
    onChange,
    onFocus,
    onSubmit,
  } = props
  return (
    <form onSubmit={onSubmit}>
      <input
        ref={ref.input_1Ref}
        placeholder="Type first string here"
        className={errorInput_1 ? 'error' : ''}
        value={inputValue_1}
        onChange={(e) => onChange(e, 1)}
        onFocus={(e) => onFocus(e, 1)}
      />
      <input
        ref={ref.input_2Ref}
        placeholder="Type second string here"
        className={errorInput_2 ? 'error' : ''}
        value={inputValue_2}
        onChange={(e) => onChange(e, 2)}
        onFocus={(e) => onFocus(e, 2)}
      />
      <button type="submit">Check</button>
    </form>
  )
})

export default Input
