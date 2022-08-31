import './employees-list-item.css';
import {Component} from 'react'


class EmployeesListItem extends Component {
    

   render() {
    const {name,salary,increase,onDelete,like,onTogleIncrease,onInputSalary} = this.props;
    let classNames = 'list-group-item d-flex justify-content-between'

    if(increase) {
        classNames += ' increase'
    }

    if(like) {
        classNames += ' like'
    }
    return (
        <li className={classNames}>
            <span className="list-group-item-label"
             onClick = {onTogleIncrease}
             data = "like">{name}</span>
            <input type="text" className="list-group-item-input" 
            onChange = {onInputSalary}
            defaultValue= {salary + '$'} 
           />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick = {onTogleIncrease}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick = {onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }
    
}

export default EmployeesListItem;