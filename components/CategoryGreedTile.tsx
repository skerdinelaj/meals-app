import { Pressable, StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import React from "react";

type CategoryGreedTileProps = {
    title: string;
    color: string;
    id: string;
    onPress: (id: string) => void;
};

const CategoryGreedTile = ({ title, color, onPress, id}: CategoryGreedTileProps) => {
    return (
        <View style={[styles.gridItem]}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                android_ripple={{ color: "#ccc" }}
                onPress={() => onPress(id)}
            >
                <View style={{ ...styles.innerContainer, backgroundColor: color }}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGreedTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
