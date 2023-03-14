

function Loan({id,memberno,member,category,amount,loan,onUpdateItem, onDeleteItem}) {
  function handleDelete(){
    fetch(`http://localhost:8001/loandetails/${id}`, {
    method: "DELETE"
    })
    .then((r) => r.json)
    .then(() => onDeleteItem(loan))
  }
  
  function handleUpdate(){
    fetch(`http://localhost:4000/loandetails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
      }),
    })
      .then((r) => r.json())
      .then((updatedLoan) => onUpdateItem(updatedLoan));
  }


  
  
  
  return (
      <tr>
        <td>{id}</td>
        <td>{memberno}</td>
        <td>{member}</td>
        <td>{category}</td>
        <td>{amount}</td>
        <td><button onClick={handleUpdate}>Edit</button></td>
        <td><button onClick={handleDelete}>Delete</button></td>
      </tr>
    );
  }
  
  export default Loan;
  