import axios from 'axios'
export async function getUserService()
{
    
    var p = await axios.get("https://fakestoreapi.com/users")

    return p;
}