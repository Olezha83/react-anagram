import '../styles/input.css'

function Input({
  inputValue_1,
  inputValue_2,
  errorInput_1,
  errorInput_2,
  onChange,
  onFocus,
  onButtonClick,
}) {
  return (
    <div>
      <input
        placeholder="Type first string here"
        className={errorInput_1 ? 'error' : ''}
        value={inputValue_1}
        onChange={(e) => onChange(e, 1)}
        onFocus={(e) => onFocus(e, 1)}
      />
      <input
        placeholder="Type second string here"
        className={errorInput_2 ? 'error' : ''}
        value={inputValue_2}
        onChange={(e) => onChange(e, 2)}
        onFocus={(e) => onFocus(e, 2)}
      />
      <button onClick={onButtonClick}>Check</button>
    </div>
  )
}

export default Input
