import React from 'react'
import './Register.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { RegisterApi } from './Services/Api'
import { storageUserData } from './Services/Storage'
import { isAuthenticated } from './Services/Auth'
import { Link, Navigate } from 'react-router-dom'

// const Container = styled.div`
    
// `
// const Wrapper = styled.div`

// `

// const Form = styled.form`
//     font-size : 24px;
//     font-weight : 300;
//     display : flex;
//     align-items : center ;
//     justify-content : center ;
//     flex-direction : column;
//     flex-wrap : wrap;
// `

// const Title = styled.h1`
//     text-align : center;
// `

// const Input = styled.input`
//     flex : 1;
//     min-width : 70%;
//     margin : 20px 10px 0 0;
//     padding : 10px;
//     border-radius : 10px;
// `

// const Agreement = styled.p`
//     padding : 10px 20px;
//     font-size : 20px ;
// `

// const Button = styled.button`
//     padding : 5px 20px;
//     background-color : teal;
//     border : 1px solid black;
//     border-radius : 25px;
//     color : white;
//     fonr-weight : 500;htmlFor
//     cursor : pointer;
// `

const Register = () => {

    const initialStateErrors ={
        email:{required:false},
        name:{required:false},
        password:{required:false},
        custom_error:null
    }
    const [errors, setErrors] = useState(initialStateErrors);

    const [loading,setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;
        if (inputs.name ==""){
            errors.name.required=true;
            hasError=true;
        }
        
        if (inputs.email ==""){
            errors.email.required=true;
            hasError=true;
        }
        
        if (inputs.password ==""){
            errors.password.required=true;
            hasError=true;
        }
        
        if (!hasError){
            setLoading(true);
            RegisterApi(inputs).then((response)=>{
                storageUserData(response.data.idToken);
            }).catch((err)=>{
                if (err.response.data.error.message="EMAIL_EXISTS"){
                    setErrors({...errors,custom_error:"Email Already Exists!"})
                }else if(String(err.response.data.error.message).includes('WEAK_PASSWORD')){
                    setErrors({...errors,custom_error:"Password should be at least 6 characters!"})
                }
            }).finally(()=>{
                setLoading(false);
            }) 
        }

        setErrors(errors);
    }

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        name:""
    })

    const handleInput = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    if (isAuthenticated()) {
        return <Navigate to="/" />
    }
  return (
    <>
    <Navbar/>
        
    <section className="register-block">
            <div className="containerReg">
               <div className="rowReg">
                  <div className="col register-sec">
                     <h2 className="headReg">Register Now</h2>
                     <form onSubmit={handleSubmit} className="register-form" action="" >
                      <div className="form-groupReg">
                        <label htmlFor="exampleInputEmail1" className="regFormLabel ">Name</label><br />
          
                        <input type="text" className="regFormInput" onChange={handleInput} name="name" id=""  />
                        { errors.name.required?
                           ( <span className="text-danger" >
                            Name is required.
                        </span>):null
                        }
                     </div>
                      <div className="form-groupReg">
                        <label htmlFor="exampleInputEmail1" className="regFormLabel">Email</label><br />
          
                        <input type="text"  className="regFormInput" onChange={handleInput} name="email" id=""  />
                        { errors.email.required?
                       (<span className="text-danger" >
                            Email is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-groupReg">
                        <label htmlFor="exampleInputPassword1" className="regFormLabel">Password</label><br />
                        <input  className="regFormInput" type="password" onChange={handleInput} name="password" id="" />
                        { errors.password.required?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null
                        }
                     </div>
                     <div className="form-groupReg">

                        
                        <span className="text-danger" >
                        { errors.custom_error?
                           (<p>{errors.custom_error}</p>):null
                        }
                        </span>
                        {loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                        }
                <div className="loginGroup">
                        <input type="submit" className="btn btn-login float-right" disabled={loading} value="Register"/>
                     </div>
                     <div className="clearfix"></div>
                     <div className="form-groupReg">
                       Already have account ? Please <Link to = "/login"> Login</Link>
                     </div>
                </div>
          
          
                     </form>
          
          
                  </div>
          
               </div>
          
          
            </div>
    </section>

        {/* <Container>
        <Wrapper>
        <Title>Create An Account</Title>
        <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="User Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confrim Password" />
            <Agreement>
                By craeting an account, I consent to the processing of my personal data in according with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
        </Form>
        </Wrapper>
        </Container> */}
    <Footer/>
    </>
  )
}

export default Register
