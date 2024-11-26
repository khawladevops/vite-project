import { useState } from "react"

export function TodoInput(props) {
    const {handleAddToDo} = props
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="input-constainer">
            <input value={inputValue} onChange={(e) =>
                 {setInputValue(e.target.value)}} 
                 placeholder="Add task" />
            <button onClick={() => {
                if (!inputValue) {return}
                handleAddToDo(inputValue)
                setInputValue('')//make textbox impty after +
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}