import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

//import { styles } from '../themes/appTheme';

interface Props {
    menuItem: MenuItem
}


export const FlatListMenuItem = ({menuItem}: Props ) => {

    const navigation = useNavigation<any>();


    return(
        <TouchableOpacity 
            activeOpacity={0.7}
            onPress={() => navigation.navigate(menuItem.component as any)}
        >
            <View style={styles.container} >
                <Icon
                    name={menuItem.icon}
                    color="green"
                    size={23}
                    />
                <Text style={styles.colorText} >{menuItem.name} </Text>

                <View style={{flex:1}} />

                <Icon
                    name="arrow-redo-circle-outline"
                    color="green"
                    size ={23}
                    
                    />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    colorText:{
        color:"black",
        marginLeft: 10,
        fontSize: 19
    },
    container:{
        flexDirection:"row"
    },
})