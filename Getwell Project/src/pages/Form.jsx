import './App.css'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Form() {

  const [formData, setFormData] = useState({
    username: '',
    fathersName: '',
    age: "",
    email: '',
    problems: '',
    circums: '',
    gender: '',
    problemBox: '',
    comfort: [],
  })

  const [formError, setFormError] = useState({})

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'comfort') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.comfort.push(event.target.value)
      } else {
        copy.comfort = copy.comfort.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const validateForm = () => {
    let err = {}

    if (formData.username === '') {
      err.username = 'Username Required!'
    }
    
    if (formData.fathersName === '') {
      err.fathersName = 'Fathers Name Required!'
    }

    if (formData.age === '') {
      err.age = 'Age is Required!'
    }else{
      if (formData.age <= 18){
        err.age = 'Age Should Above 18..!'
      }
    }

    if (formData.email === '') {
      err.email = 'Email required!'
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!'
      }
    }

    if (formData.problems === '') {
      err.problems = 'Box Need to Be Filled!'
    }

    if (formData.circums === '') {
      err.circums = 'Box Need to Be Filled!'
    }

    if (formData.gender === '') {
      err.gender = 'Gender required!'
    }

    if (formData.problemBox ===''){
      err.problemBox ='Box Should Be Filled'
    }else{
      if(formData.problemBox.length <= 20){
        err.problemBox = 'Should be filled with 20 Letters'
      }
    }

    if (formData.comfort.length < 1) {
      err.comfort = 'Check Box Should Be Marked!'
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log("Form Data:", formData)
    let isValid = validateForm()

    if (isValid) {
      alert('Submitted')
      //API call to server
    } else {
      alert('In-Valid Form')
    }
    console.log(isValid)
  }
  return (
    <>
    <Navbar/>
    
    <div className="App">
      <form className='form' onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Name</label>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          <span className='non-valid'>{formError.username}</span>
        </div>
        <div className="form-group">
          <label htmlFor="fathersName" className="form-label">Fathers Name</label>
          <input className="form-control" name="fathersName" onChange={onChangeHandler} value={formData.fathersName} />
          <span className='non-valid'>{formError.fathersName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age</label>
          <input className="form-control" name="age" onChange={onChangeHandler} value={formData.age} />
          <span className='non-valid'>{formError.age}</span>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
            <span className='non-valid'>{formError.gender}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
          <span className='non-valid'>{formError.email}</span>
        </div>
        
        <div className="form-group">
          <label htmlFor="problems" className="form-label">Problems You May Have!</label>
          <select className="form-select" name="problems" onChange={onChangeHandler} value={formData.problems}>
            <option value=""></option>
            <option value="anger">Anger</option>
            <option value="anxiety">Anxiety</option>
            <option value="depression">Depression</option>
            <option value="hypomania">Hypomania</option>
            <option value="loneliness">Loneliness</option>
            <option value="panicAttack">Panic Attack</option>
            <option value="pshychosis">Pshychosis</option>
            <option value="schizoActive">SchizoActive</option>
            <option value="selfEsteem">SelfEsteem</option>
            <option value="selfHarm">SelfHarm</option>
            <option value="sleepingProblems">Sleeping Problems</option>
            <option value="stress">Stress</option>
            <option value="other">Other</option>
          </select>
          <span className='non-valid'>{formError.problems}</span>
        </div>

        <div className="form-group">
          <label htmlFor="circums" className="form-label">Circumstance</label>
          <p>You May Have Worried About Some circumstance.! <b>Feel free to share anything with us..</b></p>
          <select className="form-select" name="circums" onChange={onChangeHandler} value={formData.circums}>
            <option value=""></option>
            <option value="work">In Work</option>
            <option value="realtion">In Relationship</option>
            <option value="addiction">In Some Kind of Addiction</option>
            <option value="failure">Love Failure</option>
            <option value="others">Others</option>
          </select>
          <span className='non-valid'>{formError.circums}</span>
        </div>
        <div className="form-group">
          <label htmlFor="problemBox" className="form-label">Write About Your Problem</label>
          <input className="form-control" name="problemBox" onChange={onChangeHandler} value={formData.problemBox} />
          <span className='non-valid'>{formError.problemBox}</span>
        </div>
        <div className="form-group">
          <label htmlFor="comfort" className="form-label">Comfort With</label>
          <div>
            <div>
              <input type="checkbox" name="comfort" value="html" onChange={onChangeHandler} checked={formData.comfort.indexOf('html') !== -1} />
              <label htmlFor="video" style={{paddingLeft:"10px"}}>Video Session</label>
            </div>
            <div>
              <input type="checkbox" name="comfort" value="css" onChange={onChangeHandler} checked={formData.comfort.indexOf('css') !== -1} />
              <label htmlFor="audio" style={{paddingLeft:"10px"}}>Audio Session</label>
            </div>
            <div>
              <input type="checkbox" name="comfort" value="javascript" onChange={onChangeHandler} checked={formData.comfort.indexOf('javascript') !== -1} />
              <label htmlFor="chat" style={{paddingLeft:"10px"}}>Chat Session</label>
            </div>
          </div>
          <span className='non-valid'>{formError.comfort}</span>
        </div>
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default Form;