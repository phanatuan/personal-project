import React from "react";
import { Link, withRouter } from "react-router-dom";
import Button from '../Button';
import Input from '../Input';
import * as routes from "../constants/route";
import "./style.css";

class Navigation extends React.Component {
  state = {
    organizationName: "the-road-to-learn-react"
  };

  onOrganizationSearch = value => {
    this.setState({
      organizationName: value
    });
  };

  render() {
    const {
      location: { pathname },
      organizationName, 
      onOrganizationSearch,
    } = this.props;

    console.log(this.props)
    
    return (
      <header className='Navigation'>
        <div className='Navigation-link'>
          <Link to={routes.PROFILE}>Profile</Link>
        </div>
        <div className='Navigation-link'>
          <Link to={routes.ORGANIZATION}>Organization</Link>
        </div>

        {pathname === routes.ORGANIZATION && 
          <OrganizationSearch
            organizationName={organizationName}
            onOrganizationSearch={onOrganizationSearch}
          />}
      </header>
    );
  }
}


class OrganizationSearch extends React.Component { 
  state = { 
    value: this.props.organizationName, 
  }

  onChange = e => { 
    this.setState({ value: e.target.value})
  }

  onSubmit = e => { 
    this.props.onOrganizationSearch(this.state.value) 
    e.preventDefault()
  }

  render() { 

    const { value  } = this.state
    return ( 
      <div className="Navigation-search">
        <form onSubmit={this.onSubmit}>
          <Input color={'white'}
                 type="text"
                 value={value} 
                 onChange={this.onChange}
          />
          <Button color={'white'} type='submit'>
            Search
          </Button>
          
          
        </form>
      </div>
    )
  }
}

export default withRouter(Navigation);
