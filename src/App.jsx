import { useState } from "react"

function App() {
  const todos = JSON.parse(localStorage.getItem("item")) ?? []

  const [todoModel, setTodoModel] = useState("")
  const [todoList, setTodoList] = useState(todos)


  const handleTodoModel = (event) => {
    setTodoModel(event.target.value)
  }

  const saveTheItem = () => {
    const newItem = [...todoList, { name: todoModel, checked: false }]
    setTodoList(newItem)
    localStorage.setItem('item', JSON.stringify(newItem))
    setTodoModel("")
  }

  const checkTheItem = (index) => {
    const tempTodoList = [...todoList]
    tempTodoList[index].checked = !tempTodoList[index].checked
    setTodoList(tempTodoList)
    localStorage.setItem('item', JSON.stringify(tempTodoList))
  }

  const deleteTodoItem = (index) => {
    const tempTodoList = [...todoList]
    tempTodoList.splice(index, 1)
    setTodoList(tempTodoList)
    localStorage.setItem('item', JSON.stringify(tempTodoList))
  }

  return (
    <>
      <div className="flex flex-col item-center justify-center bg-[#f7f7f7] w-screen min-h-screen">
        <div className="m-auto">
          <input type="text" className="rounded-lg shadow border border-gray-300 placeholder:italic px-5 py-2" placeholder="Input your todo..." value={todoModel} onChange={handleTodoModel} />
          <button className="bg-gray-900 ml-5 px-5 py-2 rounded text-[#f7f7f7] hover:bg-gray-600 transition " onClick={() => saveTheItem()}>Save</button>
          <div className="flex flex-col mt-10">
            {todoList.map((x, i) => (
              <div key={i} className="flex justify-between my-2">
                <button className="flex gap-5" onClick={() => checkTheItem(i)} >
                  <input type="checkbox" className="shadow " checked={x.checked} />
                  <span className="font-bold text-gray-900">{x.name}</span>
                </button>
                <button onClick={() => deleteTodoItem(i)} className="bg-red-500 text-[#f7f7f7] hover:bg-red-800 shadow rounded px-5 py-2">Delete</button>
              </div>
            ))}
          </div>
        </div>

      </div >
    </>
  )
}

export default App
