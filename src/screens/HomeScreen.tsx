import React from 'react';
import {View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator} from '../components/ItemSeparator';
import { menuItems } from '../data/menuItems';


import {styles} from '../themes/appTheme'
//import Icon from 'react-native-vector-icons/Ionicons';


export const HomeScreen = () => {

    return(
        <View style ={{flex:1, ...styles.globalMargin }} >

            

            <FlatList 
                data={menuItems}
                renderItem={ ({item}) => <FlatListMenuItem menuItem={item}  />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle title='Opciones del Menu' /> }
                ItemSeparatorComponent = {() => <ItemSeparator /> }
            />
            
        </View>
    )
}





