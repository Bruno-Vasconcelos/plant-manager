import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import userImg from '../assets/bruno.png'
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function Header(){
    const [userName, setUserName] = useState<string>();

    useEffect(()=>{
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName( user || 'aa');
        }
        loadStorageUserName()
    },[]);


    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.greeting}>Olá</Text>
                <Text style={Styles.userName}>{ userName }</Text>
            </View>
            <Image source={userImg} style={Styles.image} />
        </View>
    )
}

const Styles=StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading
    }
})