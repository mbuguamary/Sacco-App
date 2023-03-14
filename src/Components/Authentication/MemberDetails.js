import React, { useEffect, useState } from 'react'

const MemberDetails = () => {
    const [member,setMember] = useState([])

    useEffect(()=> {
        fetch("http://localhost:8001/members/1")
        .then((response) => {
            if (response.ok) {
              response.json().then((member) => setMember(member));
            }
          });
        },
    [])

  return (
    <div>
        <h3>Welcome to Metropolitan Sacco, {member.member} </h3>
        <h4>Member Name: {member.member}</h4>
        <h4>Member No: {member.id}</h4>
        <h4>Tel:  {member.mobile}</h4>
        <h4>Email: {member.email}</h4>
        <h4>Savings: {member.savings}</h4>

    </div>
  )
}

export default MemberDetails