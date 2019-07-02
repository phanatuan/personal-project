import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from "react-router-dom";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      email
      password
    }
  }
`;

export default class LoginPage extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = login => async e => {
    e.preventDefault();
    try {
      const data = await login();
      console.log(data);
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
      this.setState({ email: "", password: "" });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='card'>
        <article className='card-body'>
          <Link to='/signup' className='float-right btn btn-outline-primary'>
            Sign Up
          </Link>
          <h4 className='card-title mb-4 mt-1'>Sign in</h4>
          <p>
            <a href='' className='btn btn-block btn-outline-info'>
              {" "}
              <i className='fab fa-twitter' />
              Login via Twitter
            </a>
            <a href='' className='btn btn-block btn-outline-primary'>
              {" "}
              <i className='fab fa-facebook-f' />
              Login via facebook
            </a>
          </p>
          <Mutation mutation={LOGIN_MUTATION} variables={{ email, password }}>
            {(login, { data, loading, error }) => (
              <form onSubmit={this.handleSubmit(login)}>
                <div className='form-group'>
                  <input
                    name='email'
                    value={this.state.email}
                    className='form-control'
                    placeholder='Email or login'
                    type='email'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    name='password'
                    className='form-control'
                    type='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <button
                        type='submit'
                        className='btn btn-primary btn-block'>
                        {" "}
                        Login{" "}
                      </button>
                    </div>
                  </div>
                  <div className='col-md-6 text-right'>
                    <a className='small' href='#'>
                      Forgot password?
                    </a>
                  </div>
                </div>
                {error && <div>{error.message}</div>}
              </form>
            )}
          </Mutation>
        </article>
      </div>
    );
  }
}
