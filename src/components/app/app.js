import AppInfo from '../app-info/app-info';
import {Component} from 'react';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Alex', salary: 890, id: 1, increase: false, like: false},
        {name: 'Pavel', salary: 1500, id: 2, increase: false,like: false},
        {name: 'Farel', salary: 3000, id: 3, increase: false, like: false}
      ],
      term: '',
      salary: '',
      filter: 'all'
    }
    this.maxId = 4;

  }


  deleteItem = (id) => {
    this.setState(({data}) => ({
    data: data.filter(item => item.id !== id)
    }))
  }

  onTogleIncrease = (id,e) => {
   if(e.target.getAttribute('data') === 'like') {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, like: !item.like}
          
        }
        return item
      })
   }))
   } else {
    this.setState(({data}) => ({
      data: data.map(item => {
        if(item.id === id) {
          return {...item, increase: !item.increase
         }
          
        }
        return item
      })
     }))
   }
  }

  onInputSalary = (id,salary) => {

this.setState(({data}) => ({
data: data.map(item => {
  if(item.id === id) {
 return {...item, salary: salary.slice(0,-1)} 
  }
  return item


})
}))
}


  addItem = (name,salary) => {
   
   const newItem = {
    name,
    salary,
    increase: false,
    like: false,
    id: this.maxId++
   }
   this.setState(({data}) => {
    const newArr = [...data, newItem]

    return {
      data: newArr
    }
   })

  }


  onUpdateSearch = (term) => {
    this.setState({term})
  }


  searchItem = (items,term) => {
  if (term.length === 0) {
    return items;
  }
  return items.filter(item => item.name.indexOf(term) > -1)
  }


  onUpdateFilter = (filter) => {
    this.setState({filter})
  }


  filterItem = (items,filter) => {
    switch(filter) {
      case 'like':
        return items.filter(item => item.like)
      case 'salary':
        return items.filter(item => item.salary > 1000)
      default: 
        return items 
    }
  }


 render() {
  const {data,term, filter} = this.state
  const visibleData = this.filterItem(this.searchItem(data,term), filter)
  return (
    <div className="app">
        <AppInfo data = {data}/>

        <div className="search-panel">
            <SearchPanel
            onUpdateSearch = {this.onUpdateSearch}/>
            <AppFilter
            onUpdateFilter = {this.onUpdateFilter}
            filter = {filter}/>
        </div>
        
        <EmployeesList
         onInputSalary = {this.onInputSalary}
         data = {visibleData}
         onDelete = {this.deleteItem}
         onTogleIncrease = {this.onTogleIncrease}
        />
        <EmployeesAddForm addItem = {this.addItem}/>
    </div>
  );
 }
}

export default App;
