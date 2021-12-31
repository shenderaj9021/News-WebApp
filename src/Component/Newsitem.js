import React, { Component } from 'react'

export default class Newsitem extends Component {
    constructor(){
        super();
    }
  render() {
    let  {title,description,imageUrl,newsUrl,totalresults} = this.props;
    return (
      <div>
            <div className="card" >
                <img className="card-img-top" src= {!imageUrl?"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409":imageUrl} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} className="btn btn-dark">Get More</a>
                </div>
            </div>
      </div>
    )
  }
}
