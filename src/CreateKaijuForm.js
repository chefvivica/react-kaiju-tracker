import React from 'react'
import * as requests from './requests'

const initialState = { name: '', power: '', image: '' }
class CreateKaijuForm extends React.Component {
  state = initialState


  submitHandler = (e) => {
    e.preventDefault()
    requests.postKaijus(this.state)
    .then(data=> {
      console.log(data)
        this.props.addKai(data)
        this.setState(initialState)
    })
  }


  inputHandler =(e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    console.log('create::::',this.state)

    return (
      <form id='create-kaiju-form'  onSubmit={this.submitHandler}>

        <label>Name: </label>
        <input type='text' placeholder="add your name here.." value={this.state.name} name="name" onChange={this.inputHandler}/>

        <label>Power: </label>
        <input type='text' placeholder="add your power here..." value={this.state.power} name="power" onChange={this.inputHandler}/>

        <label>Image: </label>
        <input type='text' placeholder="add your image url here..." value={this.state.image} name="image" onChange={this.inputHandler}/>

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm
