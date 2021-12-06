import React from 'react';
import { connect } from 'react-redux';
import { addNewUser } from '../store/users';

const initState = {
  name: '',
  password: ''
}

class Form extends React.Component {
  constructor(){
    super()
    this.state = initState;

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event){
    //console.log("onChange event: ", event.target.value)
    // this.state
    let value = event.target.value
    // let name = 'password' when they are typing on the password input
    let name = event.target.name // 'password' -> {password: abc123}

    if(event.target.name === 'password') value = value.toUppercase();

    this.setState({ [name]: value})
  }

  /*

    switch(event.target.name){
      case 'name':
        // upstate state
        this.setState({
        name: event.target.value
      })
      case 'password'
      this.setState({
        password: event.target.value
      })
    }


  */


  handleSubmit(event){
    event.preventDefault();

    // console.log("event.target", event.target)

    // we could reach out with axios or to a thunk
    // thunk -> this.props.addUser({name: event.target.name.value})
    // this is how we would send the object from this form to the thunk
    //this.props.addUser(this.state)


    this.setState(initState)
    // a redireect to anothe component could be used here.

  }

  capPassword(password){
    return password.toUpperCase();
  }

  render() {
    console.log('state: ', this.state)
    return (
      <div>
        <span>Fill out form to add a user</span>
        <form onSubmit={this.handleSubmit}> 
          <div className='container-form-field'>
            <label htmlFor='name' >Name</label>
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>

          <div className='container-form-field'>
            <label htmlFor='password' >Password</label>
            <input
              type='text'
              name='password'
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
      
          <button type='submit'>Update info!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addNewUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

