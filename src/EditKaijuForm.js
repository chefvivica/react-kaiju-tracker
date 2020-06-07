import React from 'react'

class EditKaijuForm extends React.Component {
  
  render() {
    


    // console.log('edit:' ,this.props.editedKaiju.name)
    return (
      <>
        <form className='kaiju-card-edit-form' >

          <label>Name: </label>
          <input type='text' name="name" />
          <br/>

          <label>Power: </label>
          <input type='text' name="power" />
          <br/>

          <label>Image URL: </label>
          <input type='text' name="image" />
          <br/>
          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
// onSubmit={(e)=>this.props.editKaiju(this.props.kauju.id, data)}