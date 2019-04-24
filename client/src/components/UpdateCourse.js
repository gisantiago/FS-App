import React, { Component } from 'react';
import axios from 'axios';



class UpdateCourse extends Component {

    
    constructor(props) {
        super(props);
            this.state = {
                course: {},
                title: '',
                description: '',
                estimatedTime: '',
                materialsNeeded: '',
                id: ''
            };
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    course: res.data,
                    id: res.data._id,
                    title: res.data.title,
                    description: res.data.description,
                    estimatedTime: res.data.estimatedTime,
                    materialsNeeded: res.data.materialsNeeded
                });
        }).catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    userInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    cancelUpdate = (e) => {
        e.preventDefault();
        this.props.history.push(`/courses/course-detail/${this.state.id}`);
    }
    
    updateCourse =  (e) => {
        e.preventDefault();
        // console.log(localStorage.getItem('username'));
        // console.log(localStorage.getItem("password"));
        console.log(this.state.title);
        console.log(this.state.estimatedTime);
    
        axios.put(`http://localhost:5000/api/courses/${this.state.course._id}`, 
        {
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
            console.log(res);
            console.log(res.data);
            this.props.history.push(`/courses/course-detail/${this.state.id}`);
        }).catch(error => {
            console.log('Error: Updating the course details', error);
        });
    }


    render() {
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
                    <h1>Update Course</h1>
                    <div>
                    <form onSubmit={this.updateCourse} >
                        <div className="grid-66">
                        <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                                value={this.state.title}  onChange={this.userInput} /></div>
                            <p>By Joe Smith</p>
                        </div>
                        <div className="course--description">
                            <div><textarea id="description" name="description" className="" placeholder="Course description..." value={this.state.description} onChange={this.userInput} ></textarea></div>
                        </div>
                        </div>
                        <div className="grid-25 grid-right">
                        <div className="course--stats">
                            <ul className="course--stats--list">
                            <li className="course--stats--list--item">
                                <h4>Estimated Time</h4>
                                <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                                    placeholder="Hours" value={this.state.estimatedTime} onChange={this.userInput} /></div>
                            </li>
                            <li className="course--stats--list--item">
                                <h4>Materials Needed</h4>
                                <div><textarea id="materialsNeeded" name="materialsNeeded" className="" placeholder="List materials..." value={this.state.materialsNeeded} onChange={this.userInput} ></textarea></div>
                            </li>
                            </ul>
                        </div>
                        </div>
                            <div className="grid-100 pad-bottom"><button className="button" type="submit">Update Course</button>
                            <button className="button button-secondary" type="button" onClick={this.cancelUpdate} >Cancel</button>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default UpdateCourse;