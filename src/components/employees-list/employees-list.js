import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete,onTogleIncrease,onInputSalary}) => {
    const elements = data.map(item => {
    return (
        <EmployeesListItem {...item}
         key = {item.id}
         onDelete = {() =>onDelete(item.id)}
         onTogleIncrease = {(e) => onTogleIncrease(item.id,e)}
         onInputSalary = {(e) => onInputSalary(item.id,e.target.value)}/> 
    )
        
    });
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;