import { EventEmitter } from "events";
import axios from "axios";

const API_URL = 'http://localhost:3005';



class SongStore extends EventEmitter {
    constructor() {
      super()
      this.data=[]
      this.setData()
    }
      setData(){
        const url = `${API_URL}/data/`;
        axios.get(url).then(response => response.data)
        .then((data) => {
        this.data=data
          console.log(this.data)
         })
      }

      getAll(){
          return this.data;
      }

}

const Songs = new SongStore;

export default Songs;