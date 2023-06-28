import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../users";


export const fetchUsers =  createAsyncThunk(
    "/products",
    async ()=>{
        
    }
)


// (dispatch) => {
//     try {
//           api.get('/products')
//              .then((response) =>{
//               dispatch(productSuccess(response))
//              }
//             )      
//      }
//      catch (e) {
//          return console.log("error");
//      }
//   }

