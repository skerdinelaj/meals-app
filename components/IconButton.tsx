import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Ionicons as Icon } from '@expo/vector-icons/build/Icons';


type IconButtonProps = {
    onPress: () => void,
    color?: string
    icon: keyof typeof Icon.glyphMap;
}

const IconButton = ({onPress, color, icon}: IconButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})