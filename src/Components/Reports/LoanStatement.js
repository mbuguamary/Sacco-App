import React from 'react'
import LoanStatementList from './LoanStatementList';

const LoanStatement = () => {
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
                    <th className='full'>Member Statement Summary</th>
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
            <LoanStatementList
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

export default LoanStatement