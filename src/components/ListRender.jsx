import {useState, setUsers}from 'react'

const ListRender = () => {
    const [list] = useState(["Emerson", "Esthefanie", "Elaine"])

    const [users, setUsers] = useState([
        { id: 1, name: "Emerson", age: 28},
        { id: 2, name: "Esthefanie", age: 34 },
        { id: 3, name: "Elaine", age: 24 }
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

  return (
    <div>
      <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}, {user.age}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete randon user</button>
    </div>
  )
}

export default ListRender
