import React, { useState } from 'react';
import { Button, View, Modal, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../themes/appTheme';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return(
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal' />

            <Button 
                title='Abrir Modal'
                onPress={() => setIsVisible(true)}
            />
            <Modal 
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >
                <View style={{
                    flex:1,
                    backgroundColor:'rgba(0,0,0,0.3)',
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                    <View style={{
                        width:200,
                        height:200,
                        backgroundColor:'white',
                        justifyContent:'center',
                        alignItems:'center',
                        shadowOffset:{
                            width:0,
                            height:10
                        },
                        shadowOpacity:0.25,
                        elevation:10,
                        borderRadius:10,

                    }}>
                        <Text style={{
                            color:'black', 
                            fontSize:30,
                            fontWeight:'bold'
                            }} >Titulo Modal
                        </Text>

                        <Text style={{color:'black', marginBottom:20}}>Cuerpo Modal</Text>
                        <Button
                            title='Salir'
                            onPress={() => setIsVisible(false) }
                        />
                    </View>

                </View>
                
            </Modal>
        </View>
    )
}
