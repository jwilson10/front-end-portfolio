import "./styles/AboutMe.css"

function AboutMe(){
    return(<div className="bodyDiv">
        <div className="bio">
            <div className="resumeHeader">
                <h2>My Resume</h2>
            </div>
            <div className="unit">
            <div className="bioHeader">
                <h3>Education</h3>
            </div>
            <div className="information">
                <div className="section">
                    <div className="org">
                        Macalester College
                    </div>
                    <div className="responsibilities">
                        Biology major, Chinese minor. GPA 3.68
                    </div>
                    <div className="time">
                        September 2017-May 2021
                    </div>
                    <div>
                        <div className="related">Related Coursework</div>
                        <div>
                            <div className="responsibilities">
                                Core Concepts in Computer Science, Introduction to Computer Science, Research in Microbiology, Computational Biology, Big Data in Ecology
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="unit">
            <div className="bioHeader">
                <h3>Work Experience</h3>
            </div>
            <div className="information">
                <div className="section">
                    <div className="org">
                        Genesis 10
                    </div>
                    <div className="responsibilities">
                        Dev 10 Associate
                    </div>
                    <div className="time">
                        August 2022-ongoing
                    </div>
                    <div>
                        <div className="related">Responsibilities</div>
                        <div>
                            <div className="responsibilities">
                                <ul>
                                    <li>Completed competitve program where less than 5% of applicants are approved</li>
                                    <li>Learned the fundamentals of MySql, Java, HTML, CSS, and JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="funFacts">

        </div>
        <div className="bio">
            <div className="resumeHeader"><h2>Fun Facts About Me</h2></div>
            <div className="bioHeader">
                <h3>Hobbies</h3>
            </div>
        </div>
    </div>);
}

export default AboutMe;