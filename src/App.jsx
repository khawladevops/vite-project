
import { useState } from "react"
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"


function App() {
  //const todos= [
  //  { input: 'Hello! Add your first todo!', complete: true },
  //  { input: 'Get the groceries!', complete: false },
  //  { input: 'Learn how to web design', complete: false },
  //  { input: 'Say hi to gran gran', complete: true },
  //]
  const [todos, setTodos ] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState('Open')
  //handeler function
  function handleAddToDo(newTodo){
    const newTodoList = [...todos, {input: newTodo, complete:false}]
    setTodos(newTodoList)
  }
  
  function handleEditToDo(){
    
  }
  function handleDeleteToDo(){
    
  }
  return (
      <>
       <Header todos={todos} />
       <Tabs selectedTab={selectedTab} 
             setSelectedTab={setSelectedTab} 
             todos={todos} />
       <TodoList selectedTab={selectedTab} 
                 todos={todos} /> 
       <TodoInput handleAddToDo={handleAddToDo}/>
       
      </>
      
  )
}

export default App
