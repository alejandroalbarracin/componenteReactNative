import React, {useRef, useState, useContext} from 'react';

import { Animated, 
        Dimensions, 
        Image, 
        ImageSourcePropType, 
        SafeAreaView, 
        StyleSheet, 
        Text, 
        TouchableOpacity, 
        View } from 'react-native';

import { HomeScreen } from '../screens/HomeScreen';

import Carousel, {Pagination} from 'react-native-new-snap-carousel';

import Icon from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/themeContext/ThemeContext';
//import {LogBox} from "react-native";
 
{/*LogBox.ignoreLogs([
    "ViewPropTypes will be removed"
])*/}

const {width:screenWidth} = Dimensions.get('window')


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps <any ,any>{};


export const SlidesScreens = ({navigation}:Props) => {

    const [activeIndex, setactiveIndex] = useState(0)

    const {opacity, fadeInt} = useAnimation()

    const isVisible = useRef(false)

    const {theme:{colors}} = useContext(ThemeContext)

  
    

    const renderItem = (item:Slide) => {
        return(
            <View style={{
                flex:1,
                backgroundColor:colors.background,
                borderRadius:5,
                padding:40,
                justifyContent:"center"
            }}>
                <Image 
                    source={item.img}
                    style={{
                        width:350,
                        height:400,
                        resizeMode:"center"
                    }}
                />
                <Text style={{
                    ...styles.textTitle,
                    color:colors.primary
                }} >{item.title}</Text>
                <Text style={{
                    ...styles.textDescription,
                    color:colors.text    
                }}>{item.desc}</Text>
            </View>
        )
    }

    return(
        <SafeAreaView
            style={{
                flex:1,
            
                paddingTop:50
            }}
        >
            <Carousel 
              //ref={(c) => { this._carousel = c; }} si quiero que el slider sea automatico 
              data={items}
              renderItem={({item}:any) => renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout="default"
              onSnapToItem={(index:any) => {
                setactiveIndex(index);
                if(index === 2){
                    isVisible.current= true
                    fadeInt()
                }
              }}
            />

            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:20,
                alignItems:'center'
            }}>
                <Pagination 
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width:10,
                        height:10,
                        borderRadius:10,
                        backgroundColor:colors.primary

                    }}
                    />
                <Animated.View
                    style={{
                        opacity 
                    }}
                >
                    <TouchableOpacity 
                        style={{
                            flexDirection:'row',
                            backgroundColor:colors.primary,
                            width:120,
                            height:40,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            
                            
                        }}
                        activeOpacity={0.8}
                        onPress = {() => {
                            if(isVisible.current){
                                navigation.navigate('HomeScreen')
                                
                            }
                        } }
                        >
                        <Text style={{
                            fontSize:20,
                            color:'white',
                        }}>
                            Entrar
                        </Text>
                        <Icon 
                            name='chevron-forward-outline'
                            size={30}
                            color='white'
                            />
                    </TouchableOpacity>
                
                </Animated.View>    
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textTitle:{
        color:'green',
        fontSize:23,
        fontWeight:'bold'
    },
    textDescription:{
        fontSize:16
    }
})