import React from 'react';
import {Alert, Button, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appTheme';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Advertencia','Atencion, esto es una alerta',[
            {
                text:'Cancelar',
                onPress:() => console.log('cancelar peticion'),
                style: 'cancel',
            },
            {
                text:'Ok',
                onPress:() => console.log('todo Correcto'),
            }
        ],{
            cancelable:true
        })
    }


    const showPromp = () => {
        //Alert.prompt(
        //    'Esta seguro?',
        //    'esta accion no se podra revertir',
        //    (valor: string) => console.log('info: ', valor ),
        //    'secure-text',
        //    'hola mondo'  
        //)
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }


    return(
        <View style={styles.globalMargin} >
            <HeaderTitle title='Alert !' />

            <Button
                title="Alert!!!"
                onPress={showAlert}
            />
            <View style={{height:10}} />
            <Button
               title="Mostrar promp!!!"
               onPress={showPromp}
            />

        </View>
    )
}