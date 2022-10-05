import React from "react";
import Loans from "../Loans/Loans";

function LoanList() {
  const loans=[3, 2, 1, 3];
  return (
    <table >
      <tbody>
        { <tr>
          <th>
            <h3 className="ui center aligned header">Id</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Member No</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Member Name</h3>

          </th>
          <th>
            <h3 className="ui center aligned header">category</h3>
            
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr> }

        {loans.map(loan => {
          return (
          <Loans
          key={loan.id}
          date={loan.memberno}
          description={loan.member}
          category={loan.category}
          amount={loan.amount}
  
          />
        );
          }
        ) 
      }
      
      
      
      </tbody>
    </table>
    
  );
}

export default LoanList;