import React from 'react'

const Gurantorship = ({date,loanno,purpose,member,amount,gamount}) => {
  return (
    <tr>
        <td>{date}</td>
        <td>{loanno}</td>
        <td>{purpose}</td>
        <td>{member}</td>
        <td>{amount}</td>
        <td>{gamount}</td>
    </tr>
  )
}

export default Gurantorship