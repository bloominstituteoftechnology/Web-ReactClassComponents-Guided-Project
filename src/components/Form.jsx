import React, { useState } from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        fname: '',
        lname: '',
      },
    };
  }

  onValueChange = (event) => {
    // what syntax to use????
    // are we computing new state off of old state?
    // we have access to name of the target
    // AND the value
    const { name, value } = event.target;

    this.setState(oldState => ({
      formValues: {
        ...oldState.formValues,
        [name]: value,
      },
    }));
  }

  onFormSubmit = (event) => {

  }

  render() {
    return (
      <form className='component' onSubmit={this.onFormSubmit}>
        <label>first name
          <input value={this.state.formValues.fname} onChange={this.onValueChange} name='fname' />
        </label><br />

        <label>last name
          <input value={this.state.formValues.lname} onChange={this.onValueChange} name='lname' />
        </label><br />

        <button>submit</button>
      </form>
    );
  }
}

export function FormOld() {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  });
  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };
  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <button>submit</button>
    </form>
  );
}
