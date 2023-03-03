import React,{ useContext } from "react";
import {View, TouchableOpacity, Text} from 'react-native';


import { HeaderTitle } from "../components/HeaderTitle";
import { ThemeContext } from "../context/themeContext/ThemeContext";
import { styles } from "../themes/appTheme";

export const ChangeThemeScreen = () => {

    const {setDarkTheme, setLightTheme, theme:{colors}} = useContext(ThemeContext)

    return(
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />

            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{
                    width:150,
                    height:50,
                    borderRadius:20,
                    backgroundColor:colors.primary,
                    justifyContent:'center',
                }} 
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                    >
                    <Text style={{
                        color:'white', 
                        textAlign:'center',
                        fontSize:20,
                    }}>Dark</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width:150,
                    height:50,
                    borderRadius:20,
                    backgroundColor:colors.primary,
                    justifyContent:'center',
                }} 
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                    >
                    <Text style={{
                        color:'white', 
                        textAlign:'center',
                        fontSize:20,
                    }}>Light</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}