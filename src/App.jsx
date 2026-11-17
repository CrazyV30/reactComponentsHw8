import './App.css'
import Task1 from './components/task1/Task1'
import Task2 from './components/task2/Task2'
import Task4 from './components/task3/Task4'

function App() {
  

  return (
    <>
      <Task1 name={"Dracula"} age={5} breed={"black cat"}></Task1>
      <Task2 num1={20} num2={-10} num3={5}></Task2>
      <Task4></Task4>
    </>
  )
}

export default App
