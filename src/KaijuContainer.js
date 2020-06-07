//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'

// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: [], 
  }

  componentDidMount(){
    requests.fetchKaijus()
    .then(response => {
      this.setState({kaijus:response}) 
    })
  }
  
  addKai = (newKaiju) => this.setState({kaijus: [...this.state.kaijus, newKaiju]})

  render() {
    console.log(this.state.kaijus)
    return (
      <>
        
        <CreateKaijuForm addKai={this.addKai}/>
        <div id='kaiju-container'>
        {this.state.kaijus.map(kaiju=> <KaijuCard {...kaiju} key={kaiju.id}/>)}
        </div>
        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
