import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pet: {
            name: "",
            type: "",
            description: "",
            skill1: "",
            skill2: "",
            skill3: "",
            like: 0,
            liked:false
        },
      errors: {}
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params._id);
    axios.get(`http://localhost:8000/api/pets/${this.props.match.params._id}`)
      .then( res => {
        this.setState({pet: res.data.pet});
      })
      .catch( err => {
        console.log(err);
      });
  }

  change = (key, e) => {
    let p = {...this.state.pet};
    p[key] = e.target.value;
    this.setState({pet: p});
  }

  updatePet = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/pets/${this.state.pet._id}`, this.state.pet)
      .then( res => {
        if(res.data.errors){
          this.setState({errors: res.data.errors.errors})
        } else {
          this.props.history.push("/");
        }
      });
  }

  render() {
    return (
        <div className="newpets">
            <h2>Edit This Pet</h2>
            <form onSubmit={this.updatePet}>
          <div className="form-group">
              <label>Pet Name:</label>
              <input type="text" onChange={this.change.bind(this, "name")} value={this.state.pet.name} />
              {
                this.state.errors.name ? 
                <p>{this.state.errors.name.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Type:</label>
              <input type="text" onChange={this.change.bind(this, "type")} value={this.state.pet.type}/>
              {
                this.state.errors.type ? 
                <p>{this.state.errors.type.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Description:</label>
              <input type="text" onChange={this.change.bind(this, "description")} value={this.state.pet.description}/>
              {
                this.state.errors.description ? 
                <p>{this.state.errors.description.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 1:</label>
              <input type="text" onChange={this.change.bind(this, "skill1")} value={this.state.pet.skill1}/>
              {
                this.state.errors.skill1 ? 
                <p>{this.state.errors.skill1.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 2:</label>
              <input type="text" onChange={this.change.bind(this, "skill2")} value={this.state.pet.skill2}/>
              {
                this.state.errors.skill2 ? 
                <p>{this.state.errors.skill2.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 3:</label>
              <input type="text" onChange={this.change.bind(this, "skill3")} value={this.state.pet.skill3}/>
              {
                this.state.errors.skill3 ? 
                <p>{this.state.errors.skill3.message}</p>:
                ""
              }
          </div>
          <input type="submit" className="btn-submit" />
      </form>
        </div>
    )
  }
}

export default Edit