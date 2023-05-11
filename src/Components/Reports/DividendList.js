import React, { useEffect, useState } from 'react'
import Dividends from "../Reports/Dividends";

const DividendList = (member_no) => {
const [dividends, setDividends] = useState([]);

useEffect(() =>{
fetch(`http://localhost:8080/api/v1/instant/${member_no}`)
.then(res => res.json())
.then(data => {setDividends(data);
      
    });

},[])

    

  return (
    <div>
        <table >
            <tbody>
            <tr   >
                <th className='full'>Member Statement Summary</th>
                </tr>
            <tr >
                <th >Name</th>
                </tr>
            </tbody>
        </table>
    <table>
        <tbody>
       
            <tr >
                <th className='half' >member_no</th>
                <th className='half'>tel</th>
                </tr>
                <tr>
                <th>email</th>
                <th>Id no</th>
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
          <h3 className="ui center aligned header">Loan No</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Purpose</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Sdate</h3>

        </th>
        <th>
          <h3 className="ui center aligned header">Edate</h3>
          
        </th>
        <th>
          <h3 className="ui center aligned header">Period</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Original Amount</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Debit</h3>
        </th>
        <th>
          <h3 className="ui center aligned header">Credits</h3>
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