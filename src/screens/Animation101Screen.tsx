import React, { useRef, useContext } from 'react';
import {View, Text, StyleSheet, Animated, Button, Easing} from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';




export const Animation101Screen = () => {

    const {fadeInt, fadeOut,startMoving,opacity, position} = useAnimation()
    const {theme:{colors}} = useContext(ThemeContext)
    
    return(
        <View style={styles.container} >
            
            <Animated.View style={{
                ...styles.purpleBox, 
                opacity:opacity, 
                marginBottom: 20,
                transform:[{
                    translateX:position
                }]
                }} />
            <View>
                <View style={{marginBottom:10}}>
                    <Button
                        title='FadeIn'
                        onPress={() => { 
                            fadeInt(); 
                            startMoving(100)
                        } 
                    }
                    color={colors.primary}                        
                    />
                </View>
                <View>

                    <Button
                        title='FadeOut'
                        onPress={fadeOut}
                        color={colors.primary}  
                        />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    purpleBox:{
        backgroundColor:"#5856D6",
        width:150,
        height:150,
    }
})