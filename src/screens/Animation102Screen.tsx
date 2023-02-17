import React, { useRef } from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

export const Animation102Screen = () => {

    const animaXY = useRef(new Animated.ValueXY()).current

    const movingXY = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove:Animated.event([
            null,
            {
                dx:animaXY.x,
                dy:animaXY.y,
            }
        ],{
            useNativeDriver:false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                animaXY,
                {
                    toValue:{x:0, y:0}, useNativeDriver:false
                },
            ).start();
        },
    });

    return(
        <View  style={styles.container}>
            <Animated.View 
                {...movingXY.panHandlers}
                style={[animaXY.getLayout(),styles.orangeBox]}
            
            />
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    orangeBox:{
        backgroundColor:"orange",
        width:150,
        height:150,
        borderRadius:5,
    }
})