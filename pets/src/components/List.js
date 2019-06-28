import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
        pets: []
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:8000/api/pets")
      .then( res => {
        this.setState({pets: res.data.pets});
      })
      .catch( err => {
        console.log(err);
      });
  }

  render() {
      return (
          <div>
            <h2 className="newpets">These Pets are looking for a home!</h2>
            <table className="pets">
              <thead>
                  <tr>
                    <th>Name:</th> 
                    <th>Type:</th>
                    <th>Description:</th>
                    <th>Actions:</th>
                  </tr>
              </thead>
              <tbody>
              {
                this.state.pets.sort(function(a,b){
                    if(a.type < b.type){return -1;}
                    if(a.type > b.type){return 1;}
                    return 0;
                }).map( pet =>
                  <tr key={pet._id}>
                      <td>{pet.name}</td>
                      <td>{pet.type}</td> 
                      <td>{pet.description}</td>
                      <td>
                          <span><Link className="single" to={"/pets/" + pet._id}>Detail</Link>
                          &nbsp;
                          <Link className="single" to={"/edit/" + pet._id}>Edit</Link></span>
                      </td>
                  </tr>
                  )}
                </tbody>
            </table>
          </div>
      )
  }
}

export default List;