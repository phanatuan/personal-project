import React, { Component } from "react";
import { baseUrl } from "./common/baseUrl";
import Search from "./Search";
import IssueList from "./IssueList";
import Pagination from "./Pagination";
import AddIssueButton from "./AddIssueButton";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      searchRepo: "facebook/react",
      issues: []
    };
  }

  componentDidMount = () => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1]
        : null;
    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);
      sessionStorage.setItem("token", accessToken);
      this.setState({ token: accessToken });
    }

    if (existingToken) {
      this.setState({ token: existingToken });
    }
  };

  fetchIssue = e => {
    fetch(
      `${baseUrl}/repos/${this.state.searchRepo}/issues?access_token=${
        this.state.token
      }`
    )
      .then(res => res.json())
      .then(data => this.setState({ issues: data }));
    e.preventDefault();
  };

  onSearchChange = e => {
    this.setState({
      searchRepo: e.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <Search
          handleSearch={this.fetchIssue}
          searchRepo={this.state.searchRepo}
          onSearchChange={this.onSearchChange}
        />
        <AddIssueButton />
        {this.state.issues && <IssueList issues={this.state.issues} />}
        <Pagination />
      </div>
    );
  }
}
