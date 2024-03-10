import React, { useState, useEffect } from "react"
import axios from "axios"

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: "", surname: "", phone: "" })

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setContacts(response.data)
      })
      .catch((error) => {
        console.error("Error fetching:", error)
      })
  }, [])

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(updatedContacts)
  }

  const handleFormToggle = () => {
    setShowForm(!showForm)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setContacts([...contacts, formData])
    setFormData({ name: "", surname: "", phone: "" })
    setShowForm(false)
  }

  return (
    <div>
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.username}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => handleDelete(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleFormToggle}>{showForm ? "Скасувати" : "Додати контакт"}</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder="Ім'я"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='surname'
            placeholder='Прізвище'
            value={formData.surname}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='phone'
            placeholder='Телефон'
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button type='submit'>Зберегти</button>
        </form>
      )}
    </div>
  )
}

export default Contacts
