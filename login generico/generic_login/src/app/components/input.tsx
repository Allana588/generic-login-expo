import { TextInput, StyleSheet, TextInputProps } from "react-native";

export function MeuInput({ ...rest }: TextInputProps) {
    return (
        <TextInput style={styles.input} {...rest} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        marginTop:5,
        padding: 10,
    }
});