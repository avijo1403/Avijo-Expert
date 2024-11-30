// import { MenuProvider } from 'react-native-popup-menu';

// export const Menu1 = () => (
//   <MenuProvider>
//     <App/>
//   </MenuProvider>
// );

// somewhere in your app
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import App from '../../App';
import { Image, View } from 'react-native';
import { Text } from 'react-native';
import { colors } from '../Theme/GlobalTheme';
import { TouchableOpacity } from 'react-native';

export const Menu2 = (props) => (
    <View>
        <Menu>
            <MenuTrigger>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/dots2.png')} style={{ height: 20, width: 20, marginLeft: 5 }} />
                </View>
            </MenuTrigger>
            <MenuOptions>
                <MenuOption onSelect={props.draftPress}>
                        <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Save Draft</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    </View>
);