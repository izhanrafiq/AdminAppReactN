
var token = ""




export var TokenStore = (tokenGen) => {
    token = tokenGen
    console.log("INSIDE USER SESSION " + token)
}

export var useToken = () => {
    console.log("RETURNING TOKEN " + token)
    token = token.replace(/^"(.*)"$/, '$1');
    return token;
}