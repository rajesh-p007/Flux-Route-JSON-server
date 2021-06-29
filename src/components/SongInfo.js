import React from "react";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import Songs from "./Store";
import axios from "axios";
const API_URL = 'http://localhost:3005';


export default class SongInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {            
            data: Songs.getAll()
        }
        
    }

    componentDidMount() {
        const url = `${API_URL}/data/${this.props.match.params.id}`;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ data: data })
         })
      }

    // componentWillMount() {
    //     this.state.data.map(data => {
    //     if(data.id==this.props.match.params.id){
    //          this.temp=data
    //     }
    //     })
        
    // }

    // getData(){
    //     this.state.data.map(data => {
    //         if(data.id == this.props.match.params.id){
    //             this.state.temp=data
    //         }
    //         console.log(this.state.temp)
    //     })
    // }
    render(){
        return(
            <div>
                <h3>ID is : {this.state.data.id}</h3>
                <h3>Song name is : {this.state.data.Title}</h3>
                <h3>Movie name is : {this.state.data.Movie}</h3>
                <h3>Song Length is :{this.state.data.SongLength}</h3>
                <h3>Singer is : {this.state.data.Singer}</h3>
            </div>
        )
    }
}