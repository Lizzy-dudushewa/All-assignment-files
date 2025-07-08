// const { useCallback } = require("react");

// useCallback(() => {

    
    
    async function getAllPosts() {
       const className =  await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then (json => console.log(json));
      
      
      JSON.parse(className)
    }


console.log(`i am a girl`)
setTimeout(() => {
    console.log(`i am a fine`)
}, 5000);
console.log(`i am a how are you`);