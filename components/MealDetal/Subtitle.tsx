import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'

type SubtitleProps = {
    children: ReactNode
}

const Subtitle = ({children}: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{children}</Text>
      </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitle: {
        color: "#e2b497",
        fontSize: 16,
    
        fontWeight: "bold",
        textAlign: "center",
      },
      subtitleContainer: {
        marginVertical: 4,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
      },
})