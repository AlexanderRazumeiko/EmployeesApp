import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props){
    super(props);
    this.state = {
        name: '',
        salary: ''
    }

    }

onChangeValue = (e) => {
  this.setState({
     [e.target.name]: e.target.value
   })
}

onSubmit = (e) => {
 e.preventDefault()
 if(this.state.name.length < 3 || !this.state.salary) {
    this.setState(({style}) => ({
        style: !style
    }))
 return; } 

 this.props.addItem(this.state.name, this.state.salary)
 this.setState({
    name: '',
    salary: ''
 })
}
    render() {
        const {name,salary} = this.state
        
        return (
            <div className="app-add-form"
            onSubmit = {this.onSubmit}>
               
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex" >
                    <input
                        onChange={this.onChangeValue}
                        value = {name}
                        name = "name"
                        type="text"
                        className= "form-control new-post-label"
                        placeholder="Как его зовут?" />
                    <input 
                        onChange={this.onChangeValue}
                        value = {salary}
                        name = "salary"
                        type= "number"
                        className = "form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }  
   
}

export default EmployeesAddForm;