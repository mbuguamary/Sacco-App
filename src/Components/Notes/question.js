import { useState } from "react";


function Questions() {
   const [formData,setFormData] = useState({});
   const [suggestion,setSuggestion] = useState({});

   function handleChangeForm (e){
    setFormData({...formData, [e.target.name]:[e.target.value]})
   }
    function handleSubmitForm(e){
    e.preventDefault();
    fetch("http://localhost:8001/suggestions",{
      method: "POST",
      headers: {
         "Content-Type": "application/json",
          "accept":"application/json"
       },
       body: JSON.stringify(formData) 
    })
    .then(res => res.json())
    .then((data) => {
      setSuggestion([...suggestion,data])
    })
    }
    return(
       <div>
          <form onSubmit={handleSubmitForm}>
          <textarea type="text" name={formData.suggestion} onChange={handleChangeForm}/>
         
           </form> 
           <div class="btn">
            <button type="submit" class="btn1">Post</button>
            <button onClose>x</button>
        </div>

       </div>
    )
   }
   export default Questions;