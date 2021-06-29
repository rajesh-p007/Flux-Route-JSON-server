import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import Songs from "./Store";
// const API_URL = 'http://localhost:3005';

export class AllSongs extends React.Component{

    constructor(){
        super()
        this.state = {
            data: Songs.getAll()
        }
    }

    // componentDidMount() {
    //     const url = `${API_URL}/data/`;
    //     axios.get(url).then(response => response.data)
    //     .then((data) => {
    //       this.setState({ data: data })
    //       console.log(this.state.data)
    //      })
    //   }
      
      render(){
          return(
                <div>
                <h3>All Songs element</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>Movie</th>
                        <th>Title</th>
                        <th>Song Length</th>
                        <th>Singer</th>
                    </tr>
                    </tbody>
                {
                    this.state.data.map(data => {
                        let path=`/songinfo/${data.id}`
                        return(
                        <tbody>
                        <tr>
                        <td>{data.Movie}</td>
                        <td><a href={path}>{data.Title}</a></td>
                        <td>{data.SongLength}</td>
                        <td>{data.Singer}</td>
                        </tr>
                        </tbody>
                        )}
                    )
                }
                </table>
                <div style={{paddingTop:"30px"}}>
                <button ><a href="/addsong">Add Song</a></button>
                </div>
                </div>
                
          )
            }

}