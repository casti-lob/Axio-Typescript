import{Users} from './interfaces/users'
import{Posts} from './interfaces/posts'
import axios, {AxiosResponse} from 'axios'

const url = "http://localhost:3000"
const ul = document.querySelector("#users")
const ulPosts = document.querySelector("#posts")


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



const addUser = async ()=>{
    const user: Omit<Users,'id'>={
      "name": "Nuevo",
      "email": "nuevo@gmail.com",
      "age": 27,
      "isAdmin": true
    }
  try {
    const response = await axios.post(url+"/users",user)
    console.log(response);
    
  } catch (error) {
    console.error(error);
  }
}

getData()

//addUser()

const getPublication = async ()=>{
  try {
    const response = await axios.get<Posts[]>(url+"/posts")
    
      response.data.forEach(posts => {
        const li = document.createElement("li")
           const text = document.createTextNode(`${posts.id} : ${posts.title} : ${posts.content} : ${posts.authorId}`)
           li.appendChild(text)
           ulPosts?.appendChild(li)
      });
    
    
  } catch (error) {
    console.error(error);
    
  }
  
}

getPublication()