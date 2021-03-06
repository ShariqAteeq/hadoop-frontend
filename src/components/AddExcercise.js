import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddExcercise extends Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeQuali = this.onChangeQuali.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      quali: "Master",
      status: "Student",
      age: "",
      gender: "Male",
      city: "Lahore",
      date: new Date(),
      // users: []
    };
  }

  // componentDidMount() {
  //   axios.get('http://localhost:4000/users/')
  //     .then(response => {
  //       if (response.data.length > 0) {
  //         this.setState({
  //           users: response.data.map(user => user.username),
  //           username: response.data[0].username
  //         })
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })

  // }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeQuali(e) {
    this.setState({
      quali: e.target.value,
    });
  }

  onChangeStatus(e) {
    this.setState({
      status: e.target.value,
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.props.username,
      name: this.state.name,
      email: this.state.email,
      status: this.state.status,
      city: this.state.city,
      gender: this.state.gender,
      age: this.state.age,
      quali: this.state.quali,
      date: this.state.date,
    };

    axios
      .post("http://localhost:4000/excercises/add", exercise)
      .then((res) => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3 className = "excerciseHeading">Create New Exercise</h3>
        <form onSubmit={this.onSubmit} className="input-form">
          <div className="">
            <label className = "input-label">Username </label>
            <input
              type="text"
              className="inputfld"
              value={this.state.name}
              onChange = {this.onChangename}
            />
          </div>
          <div className="form-group">
            <label className = "input-label">Email</label>
            <input
              type="text"
              className="inputfld"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label className = "input-label">Status</label>
            <select
              required
              className="inputfld"
              value={this.state.status}
              onChange={this.onChangeStatus}
            >
              <option>Employed</option>
              <option>UnEmployed</option>
              <option>Student</option>
            </select> 
          </div>
          <div className="form-group">
            <label className = "input-label">Qualification </label>
            <select
              required
              className="inputfld"
              value={this.state.quali}
              onChange={this.onChangeQuali}
            >
              <option>Intermediate</option>
              <option>Bachelor's</option>
              <option>Master</option>
              <option>PhD</option>
            </select> 
          </div>
          <div className="form-group">
            <label className = "input-label">Age </label>
            <input
              type="text"
              className="inputfld"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <label className = "input-label">Gender </label>
            <select
              ref="userInput"
              required
              className="inputfld"
              value={this.state.gender}
              onChange={this.onChangeGender}
            >
              <option>Male</option>
              <option>Female</option>
            </select> 
            </div>
            <div className="form-group">
            <label className = "input-label">City</label>
            <select
              ref="userInput"
              required
              className="inputfld"
              value={this.state.city}
              onChange={this.onChangeCity}
            >
              <option>Karachi</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Multan</option>
              <option>Bahawalpur</option>
              <option>Jhelum</option>
            </select>
          </div>
          <div className="form-group">
            <label className = "input-label">Date</label>
            {/* <input
              type="date"
              className="inputfld"
              value={this.state.date}
              onChange={this.onChangeDate}
            /> */}
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
                className="inputfld"
                value = {this.state.date}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStataToProps = state => {
  return {
    username : state.auth.username
  }
}

export default connect(mapStataToProps)(AddExcercise);

