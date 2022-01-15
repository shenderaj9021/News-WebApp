import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spiner from './Spiner';
import PropTypes from 'prop-types'

export default class News extends Component {
   
    static defaultProps ={
        country:'in',
        pageSize:8,
        category: 'sports',
    }
    static propTypes ={
        country : PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizefirstletter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state ={
            articles:[],
            loading: false,
            page:1,
            totalresults:20
        }
        document.title = `${(this.props.category)} - NewsDaily `;
    }
   
   
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=617981f7e51248be8af62eb28c82da2d&page=${this.state.page}`

        this.setState({loading: true})  
        let data = await fetch(url);
        this.setState({loading:false})
        let parseddata = await data.json();
        this.setState({articles : parseddata.articles, totalresults: parseddata.totalResults})
    }
    handlenextclick =async ()=>{
         if(this.state.page+1 > Math.ceil(this.state.totalresults/20)){

        } else{
            let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=617981f7e51248be8af62eb28c82da2d&page=${this.state.page+1}&pagesize=20`;
            console.log(url);
            this.setState({loading: true}) 
            let data = await fetch(url);
            this.setState({loading:false})
            let parseddata = await data.json();
            this.setState({
                page: this.state.page +1,
                articles: parseddata.articles
            })
        }
     
    }
    handleprevclick= async ()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=617981f7e51248be8af62eb28c82da2d&page=1`;
        console.log(url);
        this.setState({loading: true}) 
        let data = await fetch(url);
        this.setState({loading:false})
        let parseddata = await data.json();
        console.log(parseddata);
        
        this.setState({
            page: this.state.page -1,
            articles: parseddata.articles
        })
 
    }
   
    render() {
      
    return (
      <div className="container my-3">
        
            <h2 className="text-center" style={{margin:35}}>NewsDaily - {this.props.category} </h2>
             {this.state.loading && <Spiner />}
            <div className="row">
            {this.state.articles.map((element)=>{
                return(<div className="col-md-4" key={element.url}>
                    <Newsitem  title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} sour={element.source}></Newsitem>
                </div>
                )

            })}
               
            </div>
            <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
                <button disabled={this.state.page > Math.ceil(this.state.totalresults/20)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
            </div>  
      </div>
    )
  }
}
