import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Johnny'
    }
  }
  clickedBtn = () => {
    console.log('')
  }
  render () {
    return (<div className='home'>
        <div className='Aligner'>
          <div className='Aligner-item'>
            <h1>Johnny-Le-Webpack</h1>
            <div className='menu'>
              <ul>
                <div onClick={this.clickedBtn}>Click This</div>
                <li><a href='https://github.com/JohnnyLeWebDeveloper' target='new'>GitHub</a></li>
                <li><a href='https://github.com/JohnnyLeWebDeveloper' target='new'>Johnny Le</a></li>
              </ul>
            </div>
            <div className='version-num'>
              Webpack 2018
            </div>
            <br />
          </div>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
