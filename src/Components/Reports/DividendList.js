import React, { useEffect, useState } from 'react'
import Dividends from "../Reports/Dividends";
import axios from 'axios'
const apiUrl='http://localhost:8080/api' ;
const accessToken =localStorage.getItem("access");
console.log("ACCESS TOKEN FROM LOCAL STORAGE ", accessToken)
const authAxios =axios.create({
  // baseUrl:'http://localhost:8080/api',
  headers: {
    Authorization:`Bearer ${accessToken}`,
    
  }
})
const DividendList = (memNo) => {
const [dividends, setDividends] = useState([]);
const [header, setHeader] = useState([]);
const [member, setMember] = useState([]);
//${memberNo}
useEffect(() =>{
  authAxios.get(`${apiUrl}/v1/dividend`)
.then((res) => {
  if (res.ok) {
  res.json().then((dividends) => setDividends(dividends));
} 

      
    });

},[])

useEffect(() =>{
  authAxios.get(`${apiUrl}/v1/header`)
  .then((res) => {
    if (res.ok) {
      res.json() .then((header) => setHeader(header));
  } 
 
        
      });
  
  },[])
   
  useEffect(()=> {
    authAxios.get(`${apiUrl}/v1/member/MS317`)
    .then((response) => {
        if (response.ok) {
          response.json().then((member) => setMember(member));
        }
      });
    },
[])

  return (
    <div>
      {/* <p>header{header.header}</p> */}
        <table >
            <tbody>
            <tr   >
              <th className='full'> header{header.header_name}</th>
                
                </tr>
                <tr   >
              
                <th className='full'>Dividend Statement</th>
                </tr>
                
            <tr >
                <th >Name:{member.holdersName}</th>
                </tr>
            </tbody>
        </table>
    <table>
        <tbody>
       
            <tr >
                <th className='half' >member_no:{member.accNo}</th>
                <th className='half'>tel:{member.tel1}</th>
                </tr>
                <tr>
                <th>email:{member.emailAdd}</th>
                <th>Id no:{member.idNo}</th>
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
        loanno={dividend.AccName}
        purpose={dividend.accNo}
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