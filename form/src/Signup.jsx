import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Signup(){
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result=>{console.log(result)
    navigate('/login')
    })
    .catch(err=>console.log(err))
  }

    return(
        <div class="container">
  <div class="row justify-content-center">
  <div class="col-md-5">
   <div class="card">
     <h2 class="card-title text-center">Register</h2>
      <div class="card-body py-md-4">
       <form _lpchecked="1" onSubmit={handleSubmit}>
          <div class="form-group">
             <input type="text" 
                    class="form-control" 
                    id="name" 
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                    />
        </div>
        <div class="form-group">
             <input type="email" 
                    class="form-control" 
                    id="email" 
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                            </div>
                            
                          
   <div class="form-group">
     <input type="password" 
            class="form-control" 
            id="password" 
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
            />
   </div>
   <div class="d-flex flex-row align-items-center justify-content-between">
   <Link to="/login" class="btn btn-primary">Login</Link>
                                <button class="btn btn-primary">Create Account</button>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>
    );
}
export default Signup;