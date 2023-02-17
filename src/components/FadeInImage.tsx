import React,{useState} from 'react';
import { ActivityIndicator, ImageStyle, StyleProp, Text } from 'react-native';
import { Animated, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

interface Props{
    uri:String;
    style?: StyleProp<ImageStyle>
}

export const FadeInImage = ({uri, style}:Props) => {


    const { opacity, fadeInt} = useAnimation()
    
    const [isLoading, setLoading] = useState(true)

    const finishLoading = () => {
        setLoading(false)
        fadeInt();
    }

    return(

        <View
            style={{justifyContent:'center', alignItems:'center'}}
        >

            {
                isLoading && <ActivityIndicator 
                    style={{position:'absolute'}}  
                    color='green' size={30}  />
                    
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