import { MenuItem } from "../interfaces/appInterfaces"




export const menuItems: MenuItem [] = [{
    name: 'Animation 101',
    icon:'cube-outline',
    component: 'Animation101Screen'
},
{
    name: 'Animation 102',
    icon:'albums-outline',
    component: 'Animation102Screen'
},
{
    name:'SwitchScreen',
    icon:'toggle-outline',
    component:'SwitchScreen'
},
{
    name:'AlertScreen',
    icon: 'alert-circle-outline',
    component:'AlertScreen'
},
{
    name:'TextInputScreen',
    icon: 'document-text-outline',
    component:'TextInputScreen'
},
{
    name:'PullToRefreshScreen',
    icon: 'refresh-outline',
    component:'PullToRefreshScreen'
},
{
    name:'SectionListScreen',
    icon: 'list-outline',
    component:'SectionListScreen'
},
{
    name:'Modal',
    icon: 'copy-outline',
    component:'ModalScreen'
},
{
    name:'Infinto scroll',
    icon: 'infinite-outline',
    component:'InfiniteScrollScreen'
},
{
    name:'Slides',
    icon: 'flower-outline',
    component:'SlidesScreens'
},
{
    name:'Theme',
    icon: 'color-palette-outline',
    component:'ChangeThemeScreen'
}

]

