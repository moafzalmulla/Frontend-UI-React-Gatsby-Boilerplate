import "./accordion-item.scss"
import React from "react"
import AccordionItem from "./accordion-item"

  
  class Accordion extends React.Component {
    constructor() {
      super();
      this.state = {
        questions: sampleQuestions,
      };
      this.renderQuestion = this.renderQuestion.bind(this);
    }
    renderQuestion(key) {
      return <AccordionItem key={key} index={key} details={this.state.questions[key]} />
    }
    render() {
      return(
          <div className="accordion-container">{Object.keys(this.state.questions).map(this.renderQuestion)} </div>
      )
    }
  }
  const sampleQuestions = {
    question1: {summary:'Design Patterns', answer:'Design'},
    question2: {summary:'Layout', answer:'Page layout & Templates'},
    question3: {summary:'Functional', answer:'Form components'},
    question4: {summary:'Downloads', answer:'Sketch Downloads'}
  };

  export default Accordion
