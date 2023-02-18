import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [active, setActive] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert("please add Task before submitting")
            return
        }

        onAdd({ text, day, active })

        // Resetting the values
        setText('')
        setDay('')
        setActive(false)
    }
    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add Task</label>
                <input type='text' placeholder='Add your Task' value={text} onChange={(e) => {
                    setText(e.target.value)
                }} />
            </div>

            <div className='form-control'>
                <label>Add Time</label>
                <input type='text' placeholder='Add Time' value={day} onChange={(e) => {
                    setDay(e.target.value)
                }} />
            </div>

            <div className='form-control checkbox'>
                <label>Active Task</label>
                <input type='checkbox' value={active} onChange={(e) => {
                    setActive(e.currentTarget.checked)
                }} />
            </div>

            <input type='submit' value='Submit' className='btn btn-block' />
        </form>
    )
}

export default AddTask