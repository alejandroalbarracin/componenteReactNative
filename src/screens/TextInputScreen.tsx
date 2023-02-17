import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../themes/appTheme';

export const TextInputScreen = () => {

    const {onChange, form, isSubscribed} = useForm({
        name:'',
        email:'',
        phone:'',
        isSubscribed:false,
    });

    

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{...styles.globalMargin, backgroundColor:'red'}}>
                            <HeaderTitle title='Text-Input' />

                            <TextInput 
                                style={stylesInputText.inputStyle}
                                placeholder='Ingresa tu nombre'
                                autoCorrect={false}
                                autoCapitalize='words'
                                onChangeText={(value) => onChange(value, 'name')}
                            />
                            <TextInput 
                                style={stylesInputText.inputStyle}
                                placeholder='email'
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={(value) => onChange(value, 'email')}
                                keyboardType='email-address'
                                keyboardAppearance='dark'
                            />
                            <View style={stylesInputText.switchRow}>
                                <Text style={stylesInputText.switchText} >Suscribirme</Text>
                                <CustomSwitch isOn={isSubscribed} onChange={ (value) => onChange(value, 'isSubscribed' ) } />
                            </View>

                            <HeaderTitle title={JSON.stringify( form, null, 3)} />
                            <HeaderTitle title={JSON.stringify( form, null, 3)} />

                            <TextInput 
                                style={stylesInputText.inputStyle}
                                placeholder='phone'
                                onChangeText={(value) => onChange(value, 'phone')}
                                keyboardType='phone-pad'
                            />
                            <View style={{height:110}} />
                        </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesInputText = StyleSheet.create({
    inputStyle:{
        borderWidth:1,
        borderColor: 'rgba(0,0,0,0.3)',
        height:50,
        color:'black',
        borderRadius:10,
        paddingHorizontal:10,
        marginVertical:10
    },
    switchRow:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
    },
    switchText:{
        fontSize:  25,
        color:"black"
    }
})
