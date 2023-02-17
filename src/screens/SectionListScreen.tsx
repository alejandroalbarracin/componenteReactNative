import React from "react";
import { SectionList, View,Text } from 'react-native';
import { HeaderTitle } from "../components/HeaderTitle";
import { ItemSeparator } from "../components/ItemSeparator";
import { styles } from "../themes/appTheme";



interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Mujer Maravilla", "Linterna Verde", "Canario", "flash", "Flecha Verde", "Shazam", "Aquaman", "Supergirl", "Zatanna", "Detective Marciano", "Victor Stone", "Chico Bestia", "StarFire", "Constantine", "Raven" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Iron Man", "Capitan America", "Pantera Negra", "Soldado de invierno", "Vision", "Wanda", "Viuda Negra", "Hulk", "Doctor Strange", "Wolverine", "deadPool","Magneto", "Bestia", "Tormenta", "Star-Lord", "Ojo de alcon", "Nick Fury", "Silver Surfer", "Avispa","Pantera Negra", "Soldado de invierno", "Vision", "Wanda", "Viuda Negra", "Hulk", "Doctor Strange", "Wolverine", "deadPool","Magneto", "Bestia", "Tormenta", "Star-Lord", "Ojo de alcon", "Nick Fury", "Silver Surfer", "Avispa" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama","Tanjiro", "Naruto", "Light Yagami", "Edward Elric", "Luffy", "Levi", "killua", "Satoru Gojo", "Ash Ketchum" ]
    }
];


export const SectionListScreen = () => {
    return(
        <View style={{...styles.globalMargin, flex:1} }>

            <SectionList
            
                sections={casas}
                keyExtractor={(item, index) => item + index }

                ListHeaderComponent={() => <HeaderTitle title="Select List" />}
                ListFooterComponent={() => (
                    <View style={{marginBottom:80}}>
                        <HeaderTitle title={'Total casa ' + casas.length} />  
                    </View>
                ) }

                renderItem={({item}) => <Text style={{color:'black'}} >{item}</Text>}
                stickySectionHeadersEnabled={true}
                renderSectionHeader={({section}) => (
                    <View style={{backgroundColor:'white'}} >
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length}/>
                ) }
                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}

                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}