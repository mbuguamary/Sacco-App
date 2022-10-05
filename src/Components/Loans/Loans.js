function Loan({id,memberno,member,category,amount}) {
    return (
      <tr>
        <td>{id}</td>
        <td>{memberno}</td>
        <td>{member}</td>
        <td>{category}</td>
        <td>{amount}</td>
      </tr>
    );
  }
  
  export default Loan;
  