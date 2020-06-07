// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {
  state = {
    showForm : false
  }


  renderForm =  (showForm) => {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    const {name, power, image} = this.props
    return (
      <div className='kaiju-card'>
        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>
        <img className='kaiju-card-image' src={image} alt={"Maybe something should go here"} />
        {this.state.showForm && (<EditKaijuForm  kauju={this.props}   editedKaiju={this.props.editedKaiju} changeHandler={this.props.changeHandler}/>) } 
        <button className='kaiju-card-edit-button' onClick={this.renderForm} > Edit {this.state.showForm}</button>
      </div>
    )
  }
}

export default KaijuCard
// 