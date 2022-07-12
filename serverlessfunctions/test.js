exports.handler = async () => {
    console.log("serverless function ran");
    const dummydata = { name: "bob", age: 47 }

    //return response to browser
    return{
        statusCode: 200,
        body: JSON.stringify(dummydata)
    }
}