import "./accordion-item.scss"
import React from "react"
import AccordionItem from "./accordion-item"

  
  class Accordion extends React.Component {
    constructor() {
      // get super state
      super();
      // map questions object to state
      this.state = {
        questions: sampleQuestions,
      };
      // bind functional chil component
      this.renderQuestion = this.renderQuestion.bind(this);
    }
    //pass key as a prop - react uses key as identifier for react dom
    renderQuestion(key) {
      return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }
    // map in render using key props, and map functional component
    render() {
      return(
          <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
      )
    }
  }

  const sampleQuestions = {
    question1: {summary:'Design Patterns', answer:'Design', url: '/design-components/'},
    question2: {summary:'Layout', answer:'Templates', url: '/layout-components/'},
    question3: {summary:'Functional', answer:'Form components', url: '/functional-components/'},
    question4: {summary:'Downloads', answer:'Sketch Downloads', url: '/dowloads/'},
    question5: {
      summary:'Layout', 
      url: '/design-components/',
      subLink1: {
        title:'Template 1', 
        url: '/template-1/',
      },
      subLink2: {
        title:'Template 2', 
        url: '/template-2/',
      },
      subLink3: {
        title:'Template 3', 
        url: '/template-3/',
      }
    },

  };

  export default Accordion
