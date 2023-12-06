import { StyleSheet, Text, View } from "react-native";

export function Groups(){
    return (
        <View style={styles.container}>
                <Text style={styles.text}>
                    Groups</Text>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#000',
        alignItems:'center',
    },
    text:{
        color:'#fff',
        fontSize:32
    }
})