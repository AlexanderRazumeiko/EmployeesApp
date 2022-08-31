import React from "react";
import "./app-filter.css";
import {Component} from "react"



const AppFilter = (props) => {


const buttonsData = [
{name:'all', label:'Все сотрудники'},
{name:'like', label:'Сотрудники на повышение'},


{name:'salary', label:'З/П больше 1000$'}
]

const buttons = buttonsData.map(item => {
    const active = props.filter === item.name
    const clazz = active ? 'btn-light' : 'btn-outline-light'
    return (
        <button type="button"
                key = {item.name}
                onClick = {() => props.onUpdateFilter(item.name)}
                className={`btn ${clazz}`}>
                {item.label}
                </button>
    )
})
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
   
}

export default AppFilter;