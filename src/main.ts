import{Users} from './interfaces/users'
import{Posts} from './interfaces/posts'
import axios, {AxiosResponse} from 'axios'

const url = "http://localhost:3000"
const ul = document.querySelector("#users")



const getData = async ()=>{
  try {
    const response = await axios.get<Users[]>(url+"/users")
    
      response.data.forEach(user => {
        const li = document.createElement("li")
           const text = document.createTextNode(`${user.id} : ${user.name} : ${user.email} : ${user.age}`)
           li.appendChild(text)
           ul?.appendChild(li)
      });
    
    
  } catch (error) {
    console.error(error);
    
  }
  
}

getData()