import React,{useState, useContext} from 'react';
import { ActivityIndicator, ImageStyle, StyleProp, Animated, View } from 'react-native';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props{
    uri:String;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style}:Props) => {


    const { opacity, fadeInt} = useAnimation()
    
    const [isLoading, setLoading] = useState(true)

    const {theme:{colors}} = useContext(ThemeContext)

    const finishLoading = () => {
        setLoading(false)
        fadeInt();
    }

    return(

        <View
            style={{
                justifyContent:'center', 
                alignItems:'center'
            }}
        >

            {
                isLoading && <ActivityIndicator 
                    style={{position:'absolute'}}  
                    color={colors.primary} 
                    size={30}  />
                    
            }
            
            <Animated.Image
                source={{uri}}
                onLoadEnd={finishLoading }
                style={{
                    ...style as any,
                    //width:'100%',
                    //height:400,
                    opacity
                }}
                
            />
        </View>


        
    )
}