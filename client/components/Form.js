import React from 'react';
import { connect } from 'react-redux';
// import { addNewUser } from '../store/users';

class Form extends React.Component {

  render() {
    return (
      <div>
        <span>Fill out form to add a user</span>
        <form>
          <div className='container-form-field'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
            />
          </div>
        
          <button type='submit'>Submit!</button>
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


/* 

- Create a form that has a handle submit func
  -this context and binding ????????
- Use a handle change to allow for some front end (realtime) validation before form submission
  - Why is this needed? Why not just let them submit the form and check the inputs?
  - How do you handle the data in the form? Where to we store it?
- How do we handle multiple inputs?
  - What are some issues with how we have this current form filled out?
- Lets Change the user inputs to upperCase.
  - Did we let the user see this change?
  - What is a controlled form???




*/
