import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { family, size } from '../utils/theme/sizes';
import { colors } from '../utils/theme/colors';

const CustomText = ({
    text = '',
    size = 16,
    style = {},
    font = family.SP_Regular,
    onPress = undefined,
    colors = '#000000',
    expandable = false,
    intialLength = 100,
    numberOfLines,
    textDecorationLine

}) => {
    const [textData, setTextData] = useState(text);

    useEffect(() => {
        if (expandable) {
            setTextData(`${text.slice(0, intialLength)}...`);
        } else {
            setTextData(text);
        }
    }, [text]);

    const toggleExpandable = () => {
        if (textData.length == text.length) {
            setTextData(`${text.slice(0, intialLength)}...`);
        } else {
            setTextData(text);
        }
    };

    const actionBtnLable = textData.length == text.length ? 'Show Less' : 'See more';
    return (
        <Text
            onPress={onPress ?? undefined}
            style={{
                fontSize: size,
                color: colors,
                fontFamily: font,
                textDecorationLine: textDecorationLine,
                ...style,
            }}
            numberOfLines={numberOfLines}
        >
            {textData}
            {expandable ? '  ' : ''}
            {expandable && (
                <Text
                    onPress={toggleExpandable}
                    style={{
                        fontSize: size,
                        color: colors,
                        textDecorationLine: 'underline',
                        fontFamily: font,
                    }}>
                    {actionBtnLable}
                </Text>
            )}
        </Text>
    );
};

export default CustomText;