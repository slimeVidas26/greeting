const GRAPHQL_URL = "http://localhost:9000/";

const fetchGreeting = async ()=>{
   const response = await fetch(GRAPHQL_URL , {
        method : 'POST',
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({query : `query{
            greeting
          }
          `
        })
    })
    
    const responseBody = await response.json()
    const {data}  =await responseBody
    return data

}


const title = document.querySelector('h1')

fetchGreeting()
.then(({greeting})=>{
 title.textContent = greeting;
})