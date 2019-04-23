import React, { Component } from 'react';


class UpdateCourse extends Component {

    
    constructor(props) {
        super(props);
            this.state = {
            user: null,
            firstName: null,
            lastName: null,
            emailAddress: null,
            password: null,
            isAuth: false
            };
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
                <div class="bounds course--detail">
                    <h1>Update Course</h1>
                    <div>
                    <form>
                        <div class="grid-66">
                        <div class="course--header">
                            <h4 class="course--label">Course</h4>
                            <div><input id="title" name="title" type="text" class="input-title course--title--input" placeholder="Course title..."
                                value="Build a Basic Bookcase" /></div>
                            <p>By Joe Smith</p>
                        </div>
                        <div class="course--description">
                            <div><textarea id="description" name="description" class="" placeholder="Course description...">High-end furniture projects are great to dream about. But unless you have a well-equipped shop and some serious woodworking experience to draw on, it can be difficult to turn the dream into a reality.

            Not every piece of furniture needs to be a museum showpiece, though. Often a simple design does the job just as well and the experience gained in completing it goes a long way toward making the next project even better.

            Our pine bookcase, for example, features simple construction and it's designed to be built with basic woodworking tools. Yet, the finished project is a worthy and useful addition to any room of the house. While it's meant to rest on the floor, you can convert the bookcase to a wall-mounted storage unit by leaving off the baseboard. You can secure the cabinet to the wall by screwing through the cabinet cleats into the wall studs.

            We made the case out of materials available at most building-supply dealers and lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x 4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood. Assembly is quick and easy with glue and nails, and when you're done with construction you have the option of a painted or clear finish.

            As for basic tools, you'll need a portable circular saw, hammer, block plane, combination square, tape measure, metal rule, two clamps, nail set and putty knife. Other supplies include glue, nails, sandpaper, wood filler and varnish or paint and shellac.

            The specifications that follow will produce a bookcase with overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in. tall. While the depth of the case is directly tied to the 1 x 10 stock, you can vary the height, width and shelf spacing to suit your needs. Keep in mind, though, that extending the width of the cabinet may require the addition of central shelf supports.</textarea></div>
                        </div>
                        </div>
                        <div class="grid-25 grid-right">
                        <div class="course--stats">
                            <ul class="course--stats--list">
                            <li class="course--stats--list--item">
                                <h4>Estimated Time</h4>
                                <div><input id="estimatedTime" name="estimatedTime" type="text" class="course--time--input"
                                    placeholder="Hours" value="14 hours" /></div>
                            </li>
                            <li class="course--stats--list--item">
                                <h4>Materials Needed</h4>
                                <div><textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials...">* 1/2 x 3/4 inch parting strip
            * 1 x 2 common pine
            * 1 x 4 common pine
            * 1 x 10 common pine
            * 1/4 inch thick lauan plywood
            * Finishing Nails
            * Sandpaper
            * Wood Glue
            * Wood Filler
            * Minwax Oil Based Polyurethane
            </textarea></div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div class="grid-100 pad-bottom"><button class="button" type="submit">Update Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='course-detail.html';">Cancel</button></div>
                    </form>
                    </div>
                </div>
                </div>
        );
    }

}

export default UpdateCourse;