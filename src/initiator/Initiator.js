import React, { Component } from "react";
import {
    View,
    StatusBar,
    StyleSheet,
    AsyncStorage,
    ActivityIndicator,
} from "react-native";
import { NavigationActions } from "react-navigation";

export default class Initiator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
                <StatusBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
