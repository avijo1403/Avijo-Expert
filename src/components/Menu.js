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

export const YourComponent = () => (
    <View>
        <Menu>
            <MenuTrigger>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/setting1.png')} style={{ height: 36, width: 36, marginLeft: 5 }} />
                </View>
            </MenuTrigger>
            <MenuOptions>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Lab Report</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Prescription</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Insurance</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Scan</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Discharge Summary</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Vaccine Certificate</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Invoice</Text>
                </MenuOption>
                <MenuOption >
                    <Text style={{ color: colors.darkGrey, fontSize: 20, padding: '3%' }}>Other</Text>
                </MenuOption>
            </MenuOptions>
        </Menu>
    </View>
);