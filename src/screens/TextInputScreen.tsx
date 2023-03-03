import React, { useContext, useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useForm } from '../hooks/useForm';
import { styles } from '../themes/appTheme';

export const TextInputScreen = () => {

    const {onChange, form, isSubscribed} = useForm({
        name:'',
        email:'',
        phone:'',
        isSubscribed:false,
    });

    const {theme:{colors, dividerColor}} = useContext(ThemeContext);

    

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{...styles.globalMargin}}>
                            <HeaderTitle title='Text-Input' />

                            <TextInput 
                                style={{...stylesInputText.inputStyle, borderColor:colors.primary, color:colors.text}}
                                placeholder='Ingresa tu nombre'
                                autoCorrect={false}
                                autoCapitalize='words'
                                onChangeText={(value) => onChange(value, 'name')}
                                placeholderTextColor={dividerColor}
                            />
                            <TextInput 
                                style={{...stylesInputText.inputStyle, borderColor:colors.primary,color:colors.text}}
                                placeholder='email'
                                autoCorrect={false}
                                autoCapitalize='none'
                                onChangeText={(value) => onChange(value, 'email')}
                                keyboardType='email-address'
                                keyboardAppearance='dark'
                                placeholderTextColor={dividerColor}
                            />
                            <View style={stylesInputText.switchRow}>
                                <Text style={{...stylesInputText.switchText, color:colors.text}} >Suscribirme</Text>
                                <CustomSwitch isOn={isSubscribed} onChange={ (value) => onChange(value, 'isSubscribed' ) } />
                            </View>

                            <HeaderTitle title={JSON.stringify( form, null, 3)} />
                            <HeaderTitle title={JSON.stringify( form, null, 3)} />

                            <TextInput 
                                style={{...stylesInputText.inputStyle, borderColor:colors.primary, color:colors.text}}
                                placeholder='phone'
                                onChangeText={(value) => onChange(value, 'phone')}
                                keyboardType='phone-pad'
                                placeholderTextColor={dividerColor}
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
        height:50,
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

    }
})
