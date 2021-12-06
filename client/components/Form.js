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
