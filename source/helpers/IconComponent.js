import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome5';
import Icon7 from 'react-native-vector-icons/EvilIcons';
import Icon8 from 'react-native-vector-icons/Fontisto';
import Icon9 from 'react-native-vector-icons/Foundation';
import Icon10 from 'react-native-vector-icons/MaterialIcons';
import Icon11 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon12 from 'react-native-vector-icons/Octicons';
import Icon13 from 'react-native-vector-icons/SimpleLineIcons';
import Icon14 from 'react-native-vector-icons/Zocial';
import { colors } from '../assets/colors';



const Icons = (props) => {
    return (
        <>
            {
                props && props.type === 'antDesign' ?
                    <Icon
                        style={props && props.style ? props.style : ''}
                        size={props && props.size ? props.size : 24}
                        color={props && props.color ? props.color : colors.primary}
                        name={props.name ? props.name : 'home'}
                    />
                    :
                    props && props.type === 'feather' ?
                        <Icon2
                            style={props && props.style ? props.style : ''}
                            size={props && props.size ? props.size : 24}
                            color={props && props.color ? props.color : colors.primary}
                            name={props.name ? props.name : 'user'}
                        />
                        :
                        props && props.type === 'entypo' ?
                            <Icon3
                                style={props.style ? props.style : ''}
                                size={props && props.size ? props.size : 24}
                                color={props && props.color ? props.color : colors.primary}
                                name={props.name ? props.name : 'menu'}
                            />
                            :
                            props && props.type === 'ionIcon' ?
                                <Icon4
                                    style={props && props.style ? props.style : ''}
                                    size={props && props.size ? props.size : 24}
                                    color={props && props.color ? props.color : colors.primary}
                                    name={props.name ? props.name : 'documents'}
                                />
                                :
                                props && props.type === 'FontAwesome' ?
                                    <Icon5
                                        style={props && props.style ? props.style : ''}
                                        size={props && props.size ? props.size : 24}
                                        color={props && props.color ? props.color : colors.primary}
                                        name={props.name ? props.name : 'user'}
                                    />
                                    :
                                    props && props.type === 'fontAwesome5' ?
                                        <Icon6
                                            style={props && props.style ? props.style : ''}
                                            size={props && props.size ? props.size : 24}
                                            color={props && props.color ? props.color : colors.primary}
                                            name={props.name ? props.name : 'user'}
                                        />
                                        :
                                        props && props.type === 'evilIcons' ?
                                            <Icon7
                                                style={props && props.style ? props.style : ''}
                                                size={props && props.size ? props.size : 24}
                                                color={props && props.color ? props.color : colors.primary}
                                                name={props.name ? props.name : 'home'}
                                            />
                                            :
                                            props && props.type === 'fontisto' ?
                                                <Icon8
                                                    style={props && props.style ? props.style : ''}
                                                    size={props && props.size ? props.size : 24}
                                                    color={props && props.color ? props.color : colors.primary}
                                                    name={props.name ? props.name : 'home'}
                                                />
                                                :
                                                props && props.type === 'foundation' ?
                                                    <Icon9
                                                        style={props && props.style ? props.style : ''}
                                                        size={props && props.size ? props.size : 24}
                                                        color={props && props.color ? props.color : colors.primary}
                                                        name={props.name ? props.name : 'home'}
                                                    />
                                                    :
                                                    props && props.type === 'materialIcons' ?
                                                        <Icon10
                                                            style={props && props.style ? props.style : ''}
                                                            size={props && props.size ? props.size : 24}
                                                            color={props && props.color ? props.color : colors.primary}
                                                            name={props.name ? props.name : 'menu'}
                                                        />
                                                        :
                                                        props && props.type === 'materialCommunityIcons' ?
                                                            <Icon11
                                                                style={props && props.style ? props.style : ''}
                                                                size={props && props.size ? props.size : 24}
                                                                color={props && props.color ? props.color : colors.primary}
                                                                name={props.name ? props.name : 'calendar'}
                                                            />
                                                            :
                                                            props && props.type === 'octicons' ?
                                                                <Icon12
                                                                    style={props && props.style ? props.style : ''}
                                                                    size={props && props.size ? props.size : 24}
                                                                    color={props && props.color ? props.color : colors.primary}
                                                                    name={props.name ? props.name : 'clock'}
                                                                />
                                                                :
                                                                props && props.type === 'simpleLineIcons' ?
                                                                    <Icon13
                                                                        style={props && props.style ? props.style : ''}
                                                                        size={props && props.size ? props.size : 24}
                                                                        color={props && props.color ? props.color : colors.primary}
                                                                        name={props.name ? props.name : 'user'}
                                                                    />
                                                                    : props && props.type === 'zocial' ?
                                                                        <Icon14
                                                                            style={props && props.style ? props.style : ''}
                                                                            size={props && props.size ? props.size : 24}
                                                                            color={props && props.color ? props.color : colors.primary}
                                                                            name={props.name ? props.name : 'pocket'}
                                                                        />
                                                                        :
                                                                        <Icon
                                                                            style={props && props.style ? props.style : ''}
                                                                            size={props && props.size ? props.size : 24}
                                                                            color={props && props.color ? props.color : colors.primary}
                                                                            name={props.name ? props.name : 'home'}
                                                                        />

            }
        </>
    )
}

export default Icons