import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

// projects
// import L_ReactToDoList from "src\assets\projects\React_ToDo_List.webp";
// import L_MernTipCalc from "src\assets\projects\mern_tip_calc.webp";
// import L_GetGitHubInfo from "src\assets\projects\get_github_info.webp";
// import L_SmartBrain from "src\assets\projects\brain.webp";
// import L_RoboFriends from "src\assets\projects\Robofriends.webp";
// import L_ProductHuntClone from "src\assets\projects\product_hunt_clone.webp";
// import L_PortfolioUsingDjango from "src\assets\projects\portfolioUsingDjango.webp";
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project2.png';
 import Slide1 from '../../assets/Slide1.png';
 import Slide2 from '../../assets/Slide2.png';
 import Slide3 from '../../assets/Slide3.png';
 import Slide5 from '../../assets/Slide5.png';
 
// skills
// import L_REACT from "src\assets\skills\react.svg";
// import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
// import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
// import L_MONGODB from "../../assets/img/skills/mongodb.svg";
// import Image from "react-bootstrap/Image";
// import L_REDUX from "../../assets/img/skills/redux.svg";
// import L_HTML5 from "src\assets\skills\html-5.svg";
// import L_CSS3 from "src\assets\skills\css3.svg";
// import L_BOOTSTRAP4 from "src\assets\skills\bootstrap-4.svg";
// import L_DJANGO from "../../assets/img/skills/django.svg";
// import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
// import L_GIT from "../../assets/img/skills/github-api.svg";
// import L_MATERIALUI from "src\assets\skills\material-ui-1.svg";

const ProjectTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">GROUP PROJECTS AND WEEKLY HOMEWORK ASSIGNMENTS</h1>
      <Timeline>
        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="02/10/2021"
            className="text-center"
            text="Weather Gallery API Project"
            src={Project1}
            alt="Weather API Project"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my first group project. My team and I created a Weather Gallery API that will let you search a location and you will be able to see images displaying the current weather of that location. 
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://jessicaramirezcalderon.github.io/getty-gallery/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/jessicaramirezcalderon/getty-gallery"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>

        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="04/10/2021"
            className="text-center"
            text="FaceThaMuzik"
            src={Project2}
            alt="FaceThaMuzik"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my second group project. My team and I build a facial recognition appication that will take a scan of your face and build a playlist based off of your mood.  
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://enigmatic-garden-97226.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/jessicaramirezcalderon/face-rec-modrou"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>

        
        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="01/10/2021"
            className="text-center"
            text="Bootstrap Portfolio"
            src={Slide1}
            alt="Bootstrap Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my first bootstrap Portfolio. This app shows an about me section that links to my LinkedIN accound as well as a Portfolio page that is using media queries and a Contact Page. 
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://epmjj4.github.io/Bootstrap-Portfolio/portfolio.html"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/epmjj4/Bootstrap-Portfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>

        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="03/10/2021"
            className="text-center"
            text="Password Generator"
            src={Slide5}
            alt="Password Generator"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my first project using Javascript. This application will help an end user generate a random password. 
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://epmjj4.github.io/Javascript-PW-Project/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/epmjj4/Javascript-PW-Project"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>

        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="04/10/2021"
            className="text-center"
            text="MySQL Employee Tracker"
            src={Slide3}
            alt="MySQL Employee Tracker"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my first project using MySQL Database. This is application will let an employer create, update or delete employees roles within a department.  
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://epmjj4.github.io/mysqlemptracker/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/epmjj4/mysqlemptracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>

        <Events>
         {/* Project: Todo List With MUI */}
         <ImageEvent
            date="05/10/2021"
            className="text-center"
            text="Project Day Planner"
            src={Slide2}
            alt="Project Day Planner"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      This is my a project day planner. This is application will let you set reminders and assist in scheduling appointments and meetings throughtout the end user's work day.  
                    </Accordion.Toggle>

                    
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-around flex-nowrap text-center">
                <UrlButton
                  href="https://epmjj4.github.io/ProjectDayPlanner/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/epmjj4/ProjectDayPlanner"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


        </Events>
      </Timeline>
    </div>
  );
};

export default ProjectTimeline;
