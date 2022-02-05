import { useState } from 'react'
function Form({ addNewTodo }) {
  // intialization the state
  const [userInput, setUserInput] = useState('')

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  //   prevent form
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      id: new Date(),
      title: userInput,
      done: false,
    }
    addNewTodo(newTodo)

    setUserInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter TODO</label>
        <input
          type='text'
          className='new_input'
          placeholder='Enter to do'
          onChange={handleChange}
          value={userInput}
          required
        />
        <button type='submit' className='button' onChange={handleChange}>
          Submit
        </button>

        <button className='button' value='ClearAll'>
          ClearAll
        </button>
      </form>
    </div>
  )
}
export default Form
