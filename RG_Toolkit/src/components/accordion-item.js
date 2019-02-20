import "./accordion-item.scss"
import React from "react"
import { Link } from "gatsby"


class AccordionItem extends React.Component {
    constructor() {
      super();
      this.state = {
        active: false,
        layoutSubLinks: layoutLinks,

      };
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState({
        active: !this.state.active,
        className: "active"
      });
    }
    render() {
      const activeClass = this.state.active ? "active" : "inactive";
      const question = this.props.details;
      return (
              <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{question.summary}</span>
                <span className="folding-pannel answer">
                <Link to={question.url}>{question.answer}</Link>

                </span>
              </div>
      );
    }
  }


  const layoutLinks = {
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
  };


  export default AccordionItem
  