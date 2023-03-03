import React, {useState, useContext} from 'react';

import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../components/HeaderTitle';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/appTheme';

export const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets();

    const {theme:{colors, dark}} = useContext(ThemeContext)

    const [refreshing, setRefreshing] = useState(false);

    const [data, setData] = useState<string>()

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("terminado")
            setRefreshing(false);
            setData("ciao mondo")    
        }, 3500);
    }

    

    return(
        <ScrollView 
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={colors.primary}
                    colors={[colors.card]}
                    //style={{backgroundColor:'#585606'}}
                    tintColor={dark ? 'white' : 'black'}
                    //title='cargando...'
                    //titleColor="white"
                />
            }
        >
            <View style={styles.globalMargin} >
                <HeaderTitle title='Resfresh'  />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>

    )
}

