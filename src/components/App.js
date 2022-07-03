import { Component } from 'react';
import './App.css';
import Person from './person/person';

class App extends Component {
constructor (props){
  super(props)
  this.state ={
    data: [ {
      id: 1231,
      name: "Alvin",
      phone: "+44543",
      career: "Frontend Developer",
      meeting: "12.12 - 12:35",
      email: "34246@mail.ru",
    },
    {
      id: 1232,
      name: "Mark",
      phone: "+545434543",
      career: "Marceting",
      meeting: "4.12 - 10:30",
      email: "34245@mail.ru"
    },
    {
      id: 1233,
      name: "Tonya",
      phone: "+6454634543",
      career: "SQL",
      meeting: "",
      email: "34243@mail.ru"
    },
    {
      id: 1234,
      name: "Sasha",
      phone: "+64564434543",
      career: "Backand Developer",
      meeting: "21.12 - 22:30",
      email: "34242@mail.ru"
    }

    ]
  }
}

onValueChange = (id, value) => {
  this.setState(({data}) => {
    const item = data.find(item => item.id === id)
    const newItem = {...item, meeting: value}
    const index = data.indexOf(item)
    const newData = [...data.slice(0), newItem, ...data.slice(index + 1, data.lenght)]
   return {
    data:newData
   }
  })
}

  render (){
    const {data} = this.state;
    const personList = data.map(item => {
      return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)}/>
    })
     return (
    <table class="responsive-table" >
    <thead>
      <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Career</th>
          <th>Email</th>
          <th>Meeting</th>
      </tr>
    </thead>
        
    <tbody>
   {personList}
    </tbody>
  </table>
    )
    }
}

export default App;
