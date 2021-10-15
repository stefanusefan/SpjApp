import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash,Login,WelcomeAuth,Register,Verifikasi,VerifikasiOtp,FalidasiOtp,Home,Auth } from '../pages';

const Stack = createNativeStackNavigator();

const Router =() => {
    return(
       
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{headerShown:false,}}/>
                <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} options={{headerShown:false,}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown:false,}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false,}}/>
                <Stack.Screen name="Verifikasi" component={Verifikasi} options={{headerShown:false,}}/>
                <Stack.Screen name="VerifikasiOtp" component={VerifikasiOtp} options={{headerShown:false,}}/>
                <Stack.Screen name="FalidasiOtp" component={FalidasiOtp} options={{headerShown:true,}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown:false,}}/>
                <Stack.Screen name="Auth" component={Auth} options={{headerShown:false,}}/>
                
            </Stack.Navigator>
       
    );
};

export default Router;