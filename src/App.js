import { useState } from 'react'
import './App.css'
import { Head, Input, Answer } from './component'
import checkAnagram from './utils/checkAnagram'

function App() {
  const [value, setValue] = useState({
    inputValue_1: '',
    inputValue_2: '',
  })
  const [error, setError] = useState({
    errorInput_1: false,
    errorInput_2: false,
  })
  const [answerVisibility, setAnswerVisibility] = useState('')

  const handleInputChange = (event, inputNumber) => {
    inputNumber === 1 &&
      setValue({ ...value, inputValue_1: event.target.value })
    inputNumber === 2 &&
      setValue({ ...value, inputValue_2: event.target.value })
  }

  const handleCheckButton = () => {
    if (value.inputValue_1 === '' || value.inputValue_2 === '') {
      value.inputValue_1 === '' &&
        setError((state) => ({ ...state, errorInput_1: true }))
      value.inputValue_2 === '' &&
        setError((state) => ({ ...state, errorInput_2: true }))
      return
    }

    checkAnagram(value.inputValue_1, value.inputValue_2)
      ? setAnswerVisibility('positive')
      : setAnswerVisibility('negative')
  }

  const handleInputsFocus = (event, inputNumber) => {
    if (inputNumber === 1) {
      setValue({ ...value, inputValue_1: '' })
      setError({ ...error, errorInput_1: false })
    }
    if (inputNumber === 2) {
      setValue({ ...value, inputValue_2: '' })
      setError({ ...error, errorInput_2: false })
    }

    if (answerVisibility) {
      setValue({ inputValue_1: '', inputValue_2: '' })
    }
    setAnswerVisibility('')
  }

  return (
    <div className="App">
      <Head />
      <Input
        inputValue_1={value.inputValue_1}
        inputValue_2={value.inputValue_2}
        errorInput_1={error.errorInput_1}
        errorInput_2={error.errorInput_2}
        onChange={handleInputChange}
        onFocus={handleInputsFocus}
        onButtonClick={handleCheckButton}
      />
      <Answer visibility={answerVisibility} />
    </div>
  )
}

export default App
