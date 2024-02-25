import { useState } from "react"
import './app.css'
import { Button } from "./components/Button/Button"
import { Input } from "./components/Input/Input"
import { Tabs } from "./components/Tabs/Tabs"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { useAppSelector } from "./hooks/useAppSelector"
import { addNewTask, deleteTask, toggleTaskCompletion } from "./redux/slice/taskSlice"

export const App = () => {
  const dispatch = useAppDispatch()
  const TABS = ['active', 'completed']
  const [tabId, setTabId] = useState<string>('active')
  const [text, setText] = useState<string>('')

  const tasks = useAppSelector((state) => state.tasks)

  const addTask = () => {
    if (text.length >= 1) {
      dispatch(addNewTask(text))
    }
    setText('')
  }


  return (
    <div className="container">
      <div className="wrapper">
        <h1>Todo List</h1>
        <div className="add-task">
          <Input value={text} onChange={setText} />
          <Button action={addTask} />
        </div>
        <div className="tabs__container">
          <Tabs setTabId={setTabId} tabs={TABS} currentTabs={tabId} />
          <div className="task__container">
            {tasks.map((el) => (
              tabId === "active" ?
                <>
                  {!el.completed ?
                    <div key={el.id} className="task__item">
                      <input type="checkbox" checked={el.completed} onChange={() => dispatch(toggleTaskCompletion(el.id))} />
                      <span>{el.text}</span>
                      <button onClick={() => dispatch(deleteTask(el.id))}>Delete Task</button>
                    </div> : ''}
                </> :
                <>
                  {el.completed ?
                    <div key={el.id} className="task__item">
                      <input type="checkbox" checked={el.completed} onChange={() => dispatch(toggleTaskCompletion(el.id))} />
                      <span>{el.text}</span>
                      <button onClick={() => dispatch(deleteTask(el.id))}>Delete Task</button>
                    </div> : ''}
                </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}