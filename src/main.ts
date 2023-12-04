import{Users} from './interfaces/users'
import{Posts} from './interfaces/posts'
import axios from 'axios'

const url = "http://localhost:3000"
const ul = document.querySelector("#users")
const ulPosts = document.querySelector("#posts")
const form = document.querySelector("form")

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
form?.addEventListener( 'submit', (e)=>{
      e.preventDefault()
      addUser()
      
})


const addUser = async ()=>{
    const name = <HTMLInputElement> document.getElementById("name")
    const email =<HTMLInputElement> document.getElementById("email")
    const age = <HTMLInputElement>document.getElementById("age")
    const isAdmin =<HTMLInputElement> document.getElementById("isAdmin")
    const user: Omit<Users,'id'>={
      "name": name.value,
      "email": email.value,
      "age": parseInt(age.value),
      "isAdmin": Boolean(isAdmin.value)
    }
  try {
    const response = await axios.post(url+"/users",user)
    console.log(response);
    
  } catch (error) {
    console.error(error);
  }
}


getData()



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