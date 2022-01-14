import React, { Component } from 'react'

export default class Newsitem extends Component {
    
  render() {
    let  {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
            <div className="card" >
                <img className="card-img-top" src= {!imageUrl?"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409":imageUrl} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title"> {title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"> <small class="text-muted"> By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} className="btn btn-dark">Get More</a>
                </div>
            </div>
      </div>
    )
  }
}
