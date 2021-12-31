import React, { Component } from 'react'
import spin from './spin.gif'

export default class spiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img  className="rounded" src={spin} alt="loading" />
      </div>
    )
  }
}
