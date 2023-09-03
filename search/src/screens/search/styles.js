import { StyleSheet } from "react-native";
import { colors } from "../../utils/theme/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    lineSeparator: {
        height: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.black,
    },
})
