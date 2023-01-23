
const Api_key=process.env.REACT_APP_API
async function maindata() {


    let response =await fetch(Api_key);
    let data=await response.json();
    console.log(data.data)
   return data.data;


}

export default maindata