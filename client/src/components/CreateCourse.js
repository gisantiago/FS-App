import React, { Component } from 'react';
import axios from 'axios';


class CreateCourse extends Component {

    constructor(props) {
        super(props)
        this.state = {
                title: '',
                description: '',
                estimatedTime: '',
                materialsNeeded: '',
                user: {
                    _id: localStorage.getItem("userID"),
                    firstName: localStorage.getItem("firstName"),
                    lastName: localStorage.getItem("lastName")
                },
                errors: []
            }
        this.createCourse = this.createCourse.bind(this)
    }

    userInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    createCourse(e) {
        e.preventDefault();
        // console.log(localStorage.getItem('username'));
        // console.log(localStorage.getItem("password"));
        console.log(this.state.title);
        console.log(this.state.user._id);
        console.log(this.state.user.firstName);
        console.log(this.state.user.lastName);

        axios.post('http://localhost:5000/api/courses', 
            {
                user: {
                    _id: this.state.user._id,
                    firstName: this.state.user.firstName,
                    lastName: this.state.user.lastName
                },
                title: this.state.title,
                description: this.state.description,
                estimatedTime: this.state.estimatedTime,
                materialsNeeded: this.state.materialsNeeded
            },
            {
            auth: {
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password')
            }
        }).then(res => {
            if (res.status === 201) {
                this.props.history.push("/courses");
              } else {
                throw new Error();
              } 
        }).catch(err => {
            console.log('Error: Creating the course details', err);
            console.log("Error = ", err.response.data.errors);
            this.setState({
                errors: err.response.data.errors
            });
        });
    }

    cancelCreate = (e) => {
        e.preventDefault();
        this.props.history.push("/courses");
    }

    render() {
        const errors =  this.state.errors; 
        const errorList = errors.map((error) =>
        <li key={error.toString()}>{error}</li>);
        return (
            <div>
            {/* <div class="header">
                <div class="bounds">
                <h1 class="header--logo">Courses</h1>
                <nav><span>Welcome Joe Smith!</span><a class="signout" href="index.html">Sign Out</a></nav>
                </div>
            </div> */}
            <hr />
            <div className="bounds course--detail">
                <h1>Create Course</h1>
                <div>
                <div>
                    { errorList.length > 0 ?(<h2 className="validation--errors--label">Validation errors</h2>) : ('')}
                    
                    <div className="validation-errors">
                    <ul>
                        {errorList}
                    </ul>
                    </div>
                </div>
                <form onSubmit={this.createCourse} >
                    <div className="grid-66">
                    <div className="course--header">
                        <h4 className="course--label">Course</h4>
                        <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..." value={this.state.title} onChange={this.userInput} /></div>
                        <p>{`By ${localStorage.getItem('user')}`}</p>
                    </div>
                    <div className="course--description">
                        <div><textarea id="description" name="description" className="" placeholder="Course description..." value={this.state.description} onChange={this.userInput}></textarea></div>
                    </div>
                    </div>
                    <div className="grid-25 grid-right">
                    <div className="course--stats">
                        <ul className="course--stats--list">
                        <li className="course--stats--list--item">
                            <h4>Estimated Time</h4>
                            <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input" placeholder="Hours" value={this.state.estimatedTime} onChange={this.userInput} /></div>
                        </li>
                        <li className="course--stats--list--item">
                            <h4>Materials Needed</h4>
                            <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.materialsNeeded} onChange={this.userInput} ></textarea></div>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="grid-100 pad-bottom">
                        <button className="button" type="submit">Create Course</button>
                        <button className="button button-secondary" type="button"  onClick={this.cancelCreate} >Cancel</button></div>
                </form>
                </div>
            </div>
            </div>
        );
    }

}

export default CreateCourse;