exports.handler = async (event, context) => {
    console.log("serverless function ran");

    //This would be a database call to get the info
    const customers = [
        { id: 1, name: "bob", age: 47, location: "London" },
        { id: 2, name: "sue", age: 33, location: "Birmingham" },
        { id: 3, name: "john", age: 66, location: "Eastbourne" }
    ]

    if(context.clientContext.user){
        //return response to browser
        return{
            statusCode: 200,
            body: JSON.stringify(customers)
        }
    }else{
        return {
            statusCode: 401,
            body: JSON.stringify({message: "you must be logged in"})
        }
    }

    
}