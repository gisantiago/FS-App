import React, { Component } from 'react';
import ReactMarkdown  from 'react-markdown';
import axios from 'axios';
import { Consumer } from '../Context';




class CourseDetail extends Component {


    state = {
        course: [],
        user: [],
        userID: [],
    }
    
    componentDidMount() {
        this.getCourseById();
    }

    getCourseById() {
        axios.get(`http://localhost:5000/api/courses/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    course: res.data,
                    user: `${res.data.user.firstName} ${res.data.user.lastName}`,
                    userID: res.data.user._id,
                });
                
        }).catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }
  
    
    deleteCourse =  (e) => {
        e.preventDefault();

        // console.log(localStorage.getItem('username'));
        // console.log(localStorage.getItem("password"));
    
        axios.delete(`http://localhost:5000/api/courses/${this.state.course._id}`, {
            auth: {
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password')
            }
        }).then(res => {
            console.log(res);
            console.log(res.data);
            window.location='/courses'
        }).catch(error => {
            console.log('Error: deleting the course', error);
        });
    }

    
    render () {
        return (
            <Consumer>
                 { context => (
                    <div>
                        {/* <div className="header">
                        <div className="bounds">
                            <h1 className="header--logo">Courses</h1>
                            <nav><span>Welcome Joe Smith!</span><a className="signout" href="index.html">Sign Out</a></nav>
                        </div>
                        </div> */}
                        <hr />
                        <div>
                        <div className="actions--bar">
                            <div className="bounds">
                            <div className="grid-100">
                                { localStorage.getItem("isAuth") && (this.state.userID === localStorage.getItem("userID"))   ? 
                                    <span>
                                        <a className="button" href={`/courses/${this.state.course._id}/update-course`}>Update Course</a><a className="button" onClick={this.deleteCourse} >Delete Course</a>
                                        <a className="button button-secondary" href={`/courses`}>Return to List</a>
                                    </span>
                                :    
                                    <a className="button button-secondary" href="/">Return to List</a> 
                                
                                }
                            
                            </div>
                            </div>
                        </div>
                        <div className="bounds course--detail">
                            <div className="grid-66">

                            <div className="course--header">
                            <h4 className="course--label">Course</h4>
                            <h3 className="course--title">{this.state.course.title}</h3>
                            <p>By {this.state.user}</p>
                            </div>

                            <div className="course--description">
                                <ReactMarkdown>{this.state.course.description}</ReactMarkdown>
                            </div>
                            </div>
                            <div className="grid-25 grid-right">
                            <div className="course--stats">
                                <ul className="course--stats--list">
                                <li className="course--stats--list--item">
                                    <h4>Estimated Time</h4>
                                    <h3>{this.state.course.estimatedTime}</h3>
                                </li>
                                <li className="course--stats--list--item">
                                    <h4>Materials Needed</h4>
                                    <ReactMarkdown>{this.state.course.materialsNeeded}</ReactMarkdown>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                 )}
            </Consumer>
        );
    }
    
}

export default CourseDetail;