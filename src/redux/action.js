
// Membuat sebuah objek yang isinya bagian  dari data dispace dari tiap2 form yang di kirim
export const setForm = (inputType,value) => {
    return{type: 'SET_FORM', inputType:inputType, inputValue:value}
};

