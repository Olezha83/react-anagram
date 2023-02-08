import { useState, useRef } from 'react'
import { Head, Input, Answer } from './component'
import checkAnagram from './utils/checkAnagram'
import './App.css'

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

  const refs = {
    input_1Ref: useRef(null),
    input_2Ref: useRef(null),
  }

  const onChangeHandler = (event, inputNumber) => {
    inputNumber === 1 &&
      setValue({ ...value, inputValue_1: event.target.value })
    inputNumber === 2 &&
      setValue({ ...value, inputValue_2: event.target.value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    refs.input_1Ref.current.blur()
    refs.input_2Ref.current.blur()
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

  const onFocusHandler = (_, inputNumber) => {
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
        ref={refs}
        inputValue_1={value.inputValue_1}
        inputValue_2={value.inputValue_2}
        errorInput_1={error.errorInput_1}
        errorInput_2={error.errorInput_2}
        onChange={onChangeHandler}
        onFocus={onFocusHandler}
        onSubmit={onSubmitHandler}
      />
      <Answer visibility={answerVisibility} />
    </div>
  )
}

export default App
