import React, { useState } from 'react'
import './Login.css'
import { Link, Navigate } from 'react-router-dom'
// import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { LoginApi } from './Services/Api'
import { storageUserData } from './Services/Storage'
import { isAuthenticated } from './Services/Auth'

// const Container = styled.div`
    // width : 100vw;
    // height : 100vh;
    // background : linear-gradient(
    //     rgba(255,255,255,0.6),
    //     rgba(255,255,255,0.6)
    //     ),
    // url("https://img.freepik.com/free-vector/brain-lightbulb-business-team-solving-problem-innovative-solution-problem-solving-crisis-management-concept-white-background_335657-1680.jpg?w=2000") center;
    // display : flex;
    // align-items : center;
    // justify-content : center;
// `
// const Wrapper = styled.div`
//     padding : 3%;
//     height : 70vh;
//     width : 40%;
//     background-color : white;
//     border-radius : 89% 11% 96% 4% / 7% 86% 14% 93% ;
//     box-shadow: -1px -1px 65px -4px rgba(14,100,128,1);
//     display : flex;
//     align-items : center;
//     justify-content : center;
//     flex-direction : column;
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
//     min-width : 100%;
//     margin : 20px 10px 0 0;
//     padding : 10px;
//     border-radius : 10px;
// `

// const Agreement = styled.p`
//     padding : 10px 20px;
//     font-size : 15px ;
// `

// const Button = styled.button`
//     padding : 5px 20px;
//     background-color : teal;
//     border : 1px solid black;
//     border-radius : 25px;
//     color : white;
//     fonr-weight : 500;
//     cursor : pointer;
//     margin-top : 3%;
// `


const Login = () => {

    const initialStateErrors ={
        email:{required:false},
        password:{required:false},
        custom_error:null
    }
    const [errors, setErrors] = useState (initialStateErrors);

    const [loading,setLoading] = useState(false);

    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })


    const handleSubmit = (event) => {
        event.preventDefault();
        let errors = initialStateErrors;
        let hasError = false;

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
            LoginApi(inputs).then((response)=>{
                storageUserData(response.data.idToken);
            }).catch((err)=>{
                if (err.code = "ERR_BAD_REQUEST"){
                    setErrors({...errors,custom_error:"Invalid Details"})
                }
                
            }).finally(()=>{
                setLoading(false);
            }) 
        }

        setErrors({...errors});
    }
    
    const handleInput = (event) => {
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    if (isAuthenticated()) {
        return <Navigate to="/" />
    }
  return (
    <>
    <Navbar/> 

    <section className="login-block">
        <div className="containerReg">
            <div className="rowReg ">
                <div className="col login-sec">
                    <h2 className="text-center">Login Now</h2>
                    <form onSubmit={handleSubmit} className="login-form" action="">
                    <div className="form-groupLog">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                        <input type="email"  className="form-controlLog" onChange={handleInput} name="email"  id="" placeholder="E-mail" />
                        { errors.email.required?
                       (<span className="text-danger" >
                            Email is required.
                        </span>):null
                        }
                    </div>
                    <div className="form-groupLog">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                        <input  className="form-controlLog" type="password" onChange={handleInput} name="password" placeholder="Password" id="" />
                        { errors.password.required?
                        (<span className="text-danger" >
                            Password is required.
                        </span>):null
                        }
                    </div>
                    <div className="form-groupLog">
                        {loading?
                        (<div  className="text-center">
                          <div className="spinner-border text-primary " role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        </div>):null
                        }
                        <span className="text-danger" >
                        { errors.custom_error?
                           (<p>{errors.custom_error}</p>):null
                        }
                        </span>
                        <input  type="submit" className="btn btn-login float-right" disabled={loading} value="Login"/>
                    </div>
                    <div className="clearfix"></div>
                    <div className="form-groupLog">
                    Create new account ? Please <Link to="/register">Register</Link>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="User Name" />
        <Input placeholder="Password" />
        <Button>Login</Button>
        <Agreement>
            DO NOT REMEMBER THE PASSWORD ? <Link to="/register"> <span>CREATE NEW ACCOUNT</span> </Link>
        </Agreement>
      </Form>
    </Wrapper>
    </Container> */}
    <Footer/>
    </>
  )
}

export default Login
