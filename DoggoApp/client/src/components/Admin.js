import React, { useEffect, useState } from 'react'

 const ListAllClients = () => {

    const [clients, setClients] = useState([])

    

  const getClients = async() => {
    try {
        const response = await fetch("http://localhost:5000/admin")
        const jsonData = await response.json();

        setClients(jsonData);
    } catch (error) {
        console.log(error)
    }
  }
  useEffect(() => {
    getClients();
  }, [])
    return (
    <div>
        <h1>Admin Page(note yet private)</h1>
        {/* <ul>
            {clients.map( client => (
                <li>{client.first_name} {client.last_name}</li>
            ))}
        </ul> */}
        <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>Client Name</th>
                    <th>Pet Name</th>
                    <th>Weight</th>
                    <th>Phone Number</th>
                    <th>Desire Appointment</th>
                    <th>Called this client back</th>
                </tr>
            </thead>
            <tbody>
                {clients.map( client => (
                    <tr>
                        <td>{client.first_name} {client.last_name}</td>
                        <td>{client.pup_name}</td>
                        <td>{client.pup_weight_lbs}</td>
                        <td>{client.phone_number}</td>
                        <td>{client.appointment}</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
        
  )
}

export default ListAllClients;