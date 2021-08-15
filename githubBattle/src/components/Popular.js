import React, { Component } from "react";
import SelectedLanguage from "./selectedLanguage";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(event) {
    if(this.state.selectedLanguage !== event.target.innerText) {
        this.setState({selectedLanguage: event.target.innerText});
    }
  }

  render() {
    return (
        <SelectedLanguage
            selectedLanguage={this.state.selectedLanguage}
            updateLanguage={this.updateLanguage}
        />
    )
}
}

export default Popular;
