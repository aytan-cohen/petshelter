import React, { Component } from 'react'
import axios from 'axios';

class New extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newPet: {
          name: "",
          type: "",
          description: "",
          skill1: "",
          skill2: "",
          skill3: ""
      },
      errors: {}
    }
  }

  change = (key, e) => {
      let p = {...this.state.newPet};
      p[key] = e.target.value;
      this.setState({newPet: p});
  }

  makePet = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pets", this.state.newPet)
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
      <h2>Know of a pet needing a home?</h2>
      <form onSubmit={this.makePet}>
          <div className="form-group">
              <label>Pet Name:</label>
              <input type="text" onChange={this.change.bind(this, "name")} />
              {
                this.state.errors.name ? 
                <p>{this.state.errors.name.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Type:</label>
              <input type="text" onChange={this.change.bind(this, "type")} />
              {
                this.state.errors.type ? 
                <p>{this.state.errors.type.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Description:</label>
              <input type="text" onChange={this.change.bind(this, "description")} />
              {
                this.state.errors.description ? 
                <p>{this.state.errors.description.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 1:</label>
              <input type="text" onChange={this.change.bind(this, "skill1")} />
              {
                this.state.errors.skill1 ? 
                <p>{this.state.errors.skill1.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 2:</label>
              <input type="text" onChange={this.change.bind(this, "skill2")} />
              {
                this.state.errors.skill2 ? 
                <p>{this.state.errors.skill2.message}</p>:
                ""
              }
          </div>
          <div className="form-group">
              <label>Pet Skill 3:</label>
              <input type="text" onChange={this.change.bind(this, "skill3")} />
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

export default New
