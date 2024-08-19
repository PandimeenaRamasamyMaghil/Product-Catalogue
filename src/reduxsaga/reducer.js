export const redfn=(data=[],action)=>{
    console.warn("reducer",action)

    if(action.type==='ADD_TO_CART')
        {
            return data
        }
        else{
            return "nothing"

        }




   

}