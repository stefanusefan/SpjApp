import { combineReducers } from "redux";

const initialState = {
    name :'Stefanus Efan',
}

const initialStateregister ={
    form:{
        account :'',
        email :'',
        password:'',
        password2:'',
        spjkey:'spjs5484868',
    },
    title : 'Register Page',
    desc : 'Ini adalah desc untuk Register',
};

const RegisterReducer = (state = initialStateregister,action) =>{
    // Jika action menemukan sebuat data yang typenya ....
    if(action.type === 'SET_TITLE'){
        // Maka balikin datanya dengan data baru
        return {
            // copy semua datanya 
            ...state,
            // Titlenya dirubah menjadi
            title: 'Register Ganti Title',

        }
    }
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                // ambil dulu value lama dari form dan lakukan perubahan secara dinamis
                // permasing masing value
                ...state.form,
                [action.inputType] : action.inputValue,
            }
        }
    }
    return state;
};

const initialStateLogin ={
    form:{
        account :'',
        password:'',
    },
    info : 'Tolong masukan password anda',
    isLogin :true,
}

const LoginReducer = (state = initialStateLogin, action)=>{
    if(action.type === 'SET_TITLE'){
        // Maka balikin datanya dengan data baru
        return {
            // copy semua datanya 
            ...state,
            // Titlenya dirubah menjadi
            title: 'Register Ganti Title',

        }
    }
    if(action.type === 'SET_FORM'){
        return{
            ...state,
            form:{
                // ambil dulu value lama dari form dan lakukan perubahan secara dinamis
                // permasing masing value
                ...state.form,
                [action.inputType] : action.inputValue,
            }
        }
    }
    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;