const fakerequestpromise = (url) => {
    return new Promise((success, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                return reject("connection timeout")
            }
            else {
                return success(`here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makerequest(){
    try{
        let data1=await fakerequestpromise('link1');
        console.log(data1)
        let data2=await fakerequestpromise('link2');
        console.log(data2)
    }
   
    catch(e){
      console.log("caught an error")
      console.log(`error is ${e}`)
    }
}

