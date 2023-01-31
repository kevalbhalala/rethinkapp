import { useRoute } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { useSelector } from 'react-redux';
import { Colors } from '../../theme'
import { View } from 'react-native'

export const Loader = ({ theme }) => {
    const loader = useSelector(state => state?.user?.loader)
    return (
        <>
            {loader ?
                <View style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)'
                }}>
                    <ActivityIndicator size={'large'} animating={true} color={Colors[theme].blue} />
                </View>
                :
                <></>
            }
        </>
    )
}
