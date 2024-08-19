import { createStore } from "redux";


const dummyfn=()=>{
    return "hello";
}

const store=createStore(dummyfn);
export default store;