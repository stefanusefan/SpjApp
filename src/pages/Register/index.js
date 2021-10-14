import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IlustrasiRegister } from '../../assets';
import { Button, Input } from '../../componets';
import { setForm } from '../../redux/action';
import { colors } from '../../utils/colors';
import Axios from 'axios';
import { useEffect } from 'react';

const Register =({navigation}) =>{



    const [dataUser, setDataUser] =useState({
        kdcust :'',
        nmcust:'',
        pemilik:'',
        email:'',
    })
    const [dataRespon ,setDataRespon] =useState({
        pesan :'',
    })

// useEffect(() =>{
    
//         // $spjkey='spjs5484868';

//         // Method Get
//         // fetch('http://suryaprabha.co.id/spj-rest-server/api/poin/?spjkey=spjs5484868')
//         // .then(response => response.json())
//         // .then(json=>console.log(json))

        // const api={spjkey:'spjs5484868', }
//         // // Method Post
//         // fetch('http://suryaprabha.co.id/spj-rest-server/api/registrasi',{
//         //     method:'POST',
//         //     headers: {
//         //         'Content-Type':'application/json'
//         //     },
//         //     body: JSON.stringify(sendData)
//         // })

//         // .then(response => response.json())
//         // .then(json=>{
//         //     console.log('pos respon: ',json)
//         // })

//     sendData();

//     }, []);

    const {form}= useSelector(state =>state.RegisterReducer);
    const dispatch =useDispatch();
    // Untuk mendapatkan data maka perlu sebuah state yang di import dari react
    // yang mempunya nilai awal bisa apa saja, namun pada kasus ini menggunakan objek
    // DIbawah ini merupakan state lokal yang akan di pindahkan di state global di reducer
//    const[form, setForm]= useState({
//     //    Data form awal dan untuk merubahnya menggunakan setForm
//         fullName:'',
//         email :'',
//         password:''
//     });

//Kalau mau lihat panggilan berulang aktifkan data berikut

    // useEffect(() =>{
    //     console.log('RegisterReducer :',RegisterState);
    // }, [RegisterState]);
// Kalau input sedang berubah terima value dari form input dan set nilai formnya
// dengan cara copy semua data dari form lalu rubah semua variabelnya sesuai inputan
    const onInputChange =(value,inputType) =>{
        // Set form local di pindahkan ke redux (reducer) dengan membuat fungsional disppatch diatas
        // setForm({
        //     // funsi Copy
        //     ...form,
        //     [input] :(value),
        // })
        // Ambil data dari input dan value lalu kirim ke file action.js di redux
        dispatch(setForm(inputType, value));
    };
    // Mengirim data yang diambel dari form input
    const sendData =() =>{

        // fetch('http://suryaprabha.co.id/spj-rest-server/api/registrasi',{
        //     method:'POST',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify(form)
        // })

        // .then(response => response.json())
        // .then(json=>{
        //     console.log('pos respon: ',json)
        // })
        try {
            Axios.post('http://suryaprabha.co.id/spj-rest-server/api/registrasi',form)
            .then(result =>{
                setDataRespon(result.data);
            })
        } catch (error) {
            alert(error.message);
        }
        
        // console.log('Data yang akan di kirim:',form);
    }
    return(

        <View style={styles.wrapper.page}>
            {/* ShowVerticalIndicator untuk mengatur scroll vertikal */}
            <ScrollView showsVerticalScrollIndicator={false}>
               <Button type="icon" name="back" onPress={() =>navigation.goBack()}/>
                <IlustrasiRegister width={193} height={120} style={styles.illustrator}/>
                <Text style={styles.text.desc}>
                    Mohon untuk mengisi beberapa data untuk proses daftar anda
                </Text>
                {dataRespon.pesan.length > 0 && (
                <Text style={styles.text.desc}>
                    {dataRespon.pesan}
                </Text>
                )}

                <View style={styles.space(64)}/>
                <Input placeholder="Account" value={form.account} 
                    onChangeText={(value)=>onInputChange(value,'account')}/>
                <View style={styles.space(33)}/>
                <Input placeholder="Email" value={form.email}
                onChangeText={(value)=>onInputChange(value,'email')}/>
                <View style={styles.space(33)}/>
                <Input placeholder="Password" value={form.password}
                onChangeText={(value)=>onInputChange(value,'password')} 
                // Menyembunyikan tulisan di text input
                secureTextEntry={true}/>
                 <View style={styles.space(33)}/>
                <Input placeholder="Confirmasi password" value={form.password2}
                onChangeText={(value)=>onInputChange(value,'password2')} 
                // Menyembunyikan tulisan di text input
                secureTextEntry={true}/>
                <View style={styles.space(60)}/>
                <Button title="Daftar" onPress={sendData}/>

            </ScrollView>

        </View>

    );
};

export default Register;
const styles=StyleSheet.create({
    wrapper:{
        page:{padding:10,
        backgroundColor:'white',
        flex:1,
    }
    },
   
    illustrator:{
        
        marginTop:8
    },
    text:{
        desc:{
            fontSize:14, 
            fontWeight:'bold',
            color:colors.text.border, 
            maxWidth:247,
            textAlign:'left',
            marginTop:16
        },
    },
    space: value =>{
        return{
            height:value,
        };
    },
})