import { useState } from 'react'
import AddPersonForm from './components/AddPersonForm'
import SearchFilter from './components/SearchFilter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = filter
    ? persons.filter(person => person.name.includes(filter))
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

  }

  const addPerson = (event) => {
    if(persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
    
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filter={filter} onChangeFilter={handleFilterChange} />
      <h2>add a new</h2>
      <AddPersonForm
        onSubmit={addPerson} 
        name={newName} 
        onNameChange={handleNameChange} 
        number={newNumber} 
        onNumberChange={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App