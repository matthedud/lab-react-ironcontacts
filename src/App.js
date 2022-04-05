import { useEffect, useState } from "react"
import "./App.css"
import RandomButton from "./components/ButtonComp";
import TableComp from "./components/TableComp";
import contactsJson from "./contacts.json"

function App() {
  const [remainingContacts, setRemainingContacts] = useState(contactsJson)
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    const initialContact = [...remainingContacts]
    const contactToAdd = initialContact.splice(0, 5)
    setRemainingContacts(initialContact)
    setContacts(contactToAdd)
  }, [])

  const addRandom = () => {
    const newRemainingContacts = [...remainingContacts]
    const randomInd = Math.floor(Math.random()* newRemainingContacts.length)
    const newActor = newRemainingContacts.splice(randomInd, 1)
    console.log({newActor});
    setRemainingContacts(newRemainingContacts)
    setContacts([...contacts, ...newActor])
  }

  const sortTable = (key) => {
    const newContacts = [...contacts]
    newContacts.sort((a, b)=> a[key].toString() > b[key].toString())
    setContacts(newContacts)
  }

  const deleteActor = (id) => {
    const newContacts = [...contacts]
    const ind = newContacts.findIndex(el=>el.id===id)
    if(ind>-1){
      newContacts.splice(ind, 1)
      setContacts(newContacts)
    }
  }

  return (
    <div className="App">
    <RandomButton onClick={addRandom} title = {"Random Add"} />
    <RandomButton onClick={()=>sortTable('name')} title = {"Sort By Name"} />
    <RandomButton onClick={()=>sortTable('popularity')} title = {"Sort By Popularity"} />
      <table>
        <tr>
          <th>Picture </th>
          <th>Name </th>
          <th>Popularity </th>
          <th>Won an Oscar  </th>
          <th>Won an Emmy </th>
          <th>Actions </th>
        </tr>
        {contacts.map((el) =>  <TableComp {...el} deleteActor={deleteActor} />)}
      </table>
    </div>
  )
}
export default App
