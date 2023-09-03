import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/theme/colors";
const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    lineSeparator: {
        height: 10,
    },
    text: {
        marginLeft: 4
    }

})
