import React, { useEffect, useState } from 'react'
import Dividends from "../Reports/Dividends";

const DividendList = (member_no) => {
const [dividends, setDividends] = useState([]);
const [header, setHeader] = useState([]);
const [member, setMember] = useState([]);
useEffect(() =>{
fetch(`http://localhost:8080/api/v1/instant/${member_no}`)
.then((res) => {
  if (res.ok) {
  res.json().then((data) => setDividends(data));
} 

      
    });

},[])

useEffect(() =>{
  fetch("http://localhost:8080/api/v1/header")
  .then((res) => {
    if (res.ok) {
      res.json() .then((header) => setHeader(header));
  } 
 
        
      });
  
  },[])
   
  useEffect(()=> {
    fetch("http://localhost:8001/member/1")
    .then((response) => {
        if (response.ok) {
          response.json().then((member) => setMember(member));
        }
      });
    },
[])

  return (
    <div>
      <p>{header.header}</p>
        <table >
            <tbody>
            <tr   >
                <th className='full'>Dividend Statement</th>
                </tr>
            <tr >
                <th >Name:{member.holders_name}</th>
                </tr>
            </tbody>
        </table>
    <table>
        <tbody>
       
            <tr >
                <th className='half' >member_no:{member.acc_no}</th>
                <th className='half'>tel:{member.tel1}</th>
                </tr>
                <tr>
                <th>email:{member.email_add}</th>
                <th>Id no:{member.id_no}</th>
                </tr>
                </tbody>
                </table>
                <table>
                    <tbody>
                <tr>
                <th>Print Date</th>
                <th>Shares</th>
                <th>Shares</th>
                </tr>
        </tbody>

    </table>
   
    <table >
    <tbody>
      { <tr >
        <th >
          <h3 className="ui center aligned header">Date</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Narration</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Ref</h3>

        </th>
        <th>
          <h3 className="ui center aligned header">Dividend</h3>
          
        </th>
        <th>
          <h3 className="ui center aligned header">Paid</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Running Amt</h3>
        </th>
        
      </tr> }

      {dividends.map(dividend => {
        return (
        <Dividends
        key={dividend.id}
        id={dividend.id}
        loanno={dividend.loan_no}
        purpose={dividend.purpose}
        cdate={dividend.cdate}
        sdate={dividend.sdate}
        period={dividend.period}
        amount={dividend.amount}
        />
      );
        }
      ) 
    }
    
    
    
    </tbody>
  </table>
  </div>
);
  
}

export default DividendList