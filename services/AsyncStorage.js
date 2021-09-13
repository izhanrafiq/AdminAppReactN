
import AsyncStorage from '@react-native-community/async-storage';

let localStorage = () => {
	AsyncStorage.setItem('token',JSON.stringify(token)).catch(err=>console.log('errrrrr',err));
}
AsyncStorage.getItem('token').then(value=>{if(value === null){
	console.log(';;;;;;;;;;');
	localStorage();
}})

let token = "";




export var TokenStore = (tokenGen) => {
    token = tokenGen;
    console.log("INSIDE USER SESSION " + token);
    localStorage();
}

export var useToken = () => {
    console.log("RETURNING TOKEN " + token)
    token = token.replace(/^"(.*)"$/, '$1');
    localStorage();
    return token;
}