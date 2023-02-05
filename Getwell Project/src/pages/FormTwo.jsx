import React from 'react';
import axios from 'axios';
import './Form.css'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
 
class FormTwo extends React.Component {
  state = {
    name: '',
    fathersName: '',
    age:'',
    gender:'',
    email: '',
    problems:'',
    circums:'',
    problemBox:'',
    comfort:'',
    form: []
  }
 
  componentDidMount() {
    const url = 'http://localhost/reactGetwell/form.php/'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ form: data })
      console.log(this.state.form)
     })
  }
 
  handleFormSubmit( event ) {
      event.preventDefault();
 
      let formData = new FormData();
        formData.append('name', this.state.name)
        formData.append('fathersName', this.state.fathersName)
        formData.append('age', this.state.age)
        formData.append('gender', this.state.gender)
        formData.append('email', this.state.email)
        formData.append('problems', this.state.problems)
        formData.append('circums', this.state.circums)
        formData.append('problemBox', this.state.problemBox)
        formData.append('comfort', this.state.comfort)
        
 
      axios({
          method: 'post',
          url: 'http://localhost/reactGetwell/form.php/',
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response)
          alert('New Contact Successfully Added.');  
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
  }
 
  render() {
    return (
<>
<Navbar/>
    <div className="containerForm">
       
        <div className="mainForm">
        <h1 className="headerForm">Book Session</h1>
                <div className="tableHeading">Please fill the below details</div>
                <div >
                <form className="formBody">
                <label className='formLable'>Name</label>
                <input type="text" name="name" className="formInput" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
 
                <label className='formLable'>Fathers Name</label>
                <input type="text" name="fathersName" className="formInput" value={this.state.fathersName} onChange={e => this.setState({ fathersName: e.target.value })}/>
 
                <label className='formLable'>Age</label>
                <input type="number" name="age" className="formInput" value={this.state.age} onChange={e => this.setState({ age: e.target.value })}/>
            
                <label className='formLable'>Gender</label>
                <select className="formInput" name="gender" value={this.state.gender} onChange={e => this.setState({ gender: e.target.value })}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>

                <label className='formLable'>Email</label>
                <input type="email" name="email" className="formInput" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
 
                <label className='formLable'>Problems You May Have!</label>
                <select className="formInput" name="problems" value={this.state.problems} onChange={e => this.setState({ problems: e.target.value })}>
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

                <label className='formLable'>Circumstance</label>
                <p className='para'>You May Have Worried About Some circumstance.! <b>Feel free to share anything with us..</b></p>
                <select className="formInput" name="circums"  value={this.state.circums} onChange={e => this.setState({ circums: e.target.value })}>
                    <option value=""></option>
                    <option value="work">In Work</option>
                    <option value="realtion">In Relationship</option>
                    <option value="addiction">In Some Kind of Addiction</option>
                    <option value="failure">Love Failure</option>
                    <option value="others">Others</option>
                </select>

                <label className='formLable'>Write About Your Problem</label>
                <input className="formInput" name="problemBox" value={this.state.problemBox} onChange={e => this.setState({ problemBox: e.target.value })} />

                <label  className='formLable'>What Session you Need</label>
                <select className="formInput" name="comfort" value={this.state.comfort} onChange={e => this.setState({ comfort: e.target.value })}>
                    <option value=""></option>
                    <option value="chat">Chat Session</option>
                    <option value="voice">Voice Session</option>
                    <option value="video">Video Session</option>
                </select>

                <br/>
                <div className='btnBlock'>
                <input type="submit" className="buttonForm" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
                </div>
            </form>
                </div>
        </div>

        <div className="tableContainer">
        <div className="dataTable">  
        <h3 className='dataHead'>Stored Data</h3>
        <table className="tableData">
        <thead>  
        <tr>
            <th className='formTH'>Name</th>
            <th className='formTH'>Fathers Name</th>
            <th className='formTH'>Age</th>
            <th className='formTH'>Gender</th>
            <th className='formTH'>Email</th>
            <th className='formTH'>Problems</th>
            <th className='formTH'>Circumstance</th>
            <th className='formTH'>Problem Desc</th>
            <th className='formTH'>Session They Need</th>     
        </tr>
        </thead>
        <tbody>
        {this.state.form.map((contact, index) => (
        <tr key={index}>
            <td className='formTD'>{ contact.name }</td>
            <td className='formTD'>{ contact.fathersName }</td>
            <td className='formTD'>{ contact.age }</td>
            <td className='formTD'>{ contact.gender }</td>
            <td className='formTD'>{ contact.email }</td>
            <td className='formTD'>{ contact.problems }</td>
            <td className='formTD'>{ contact.circums }</td>
            <td className='formTD'>{ contact.problemBox }</td>
            <td className='formTD'>{ contact.comfort }</td>
        </tr>
        ))}
        </tbody>
        </table>
         </div>  
 
    </div>
    </div>
    <Footer/>
</>
    );
  }
}

export default FormTwo;