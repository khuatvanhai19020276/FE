import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component { 
  constructor() { 
    super(); 
    this.state = { 
      users: []
        } 
      } 
  async componentDidMount() { 
    await fetch('http://localhost:5000/books')
    .then(res => res.json()) 
    .then((data) => { 
      this.setState({ users: data.books })
    }) 
  
    .catch(console.log) 
  } 
 
  
  renderUsers = () => {
    return this.state.users.map((data, index) => {
      return ( 
      <tr key= {data.id}>
        <td>{data._id}</td>
        <td>{data.name}</td>
        <td>{data.author}</td>
        <td>{data.publishYear}</td>
      </tr>
     ); 
      })
  }
  
  render() { 
    return (
      <div className='App'>
        <div className='container'>
          <h1 className='text-center'> List</h1>
      <div className="col-md-4">
      <select className="custom-select" >
      <option value="all">all</option>
        <option value="hai">hai</option>
        <option value="khuat">khuat</option>
        <option value="nguyen">nguyennnnnnnnnnnnnnnnn</option>
      </select>
      </div>

          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Author</th>
                <th>PublishYear</th>
              </tr>
            </thead>
            <tbody> 

              {this.renderUsers()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;


    
    
    


    