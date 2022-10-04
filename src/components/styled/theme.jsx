import styled from "styled-components";
import { Dimensions } from 'react-native';
const { width }  = Dimensions.get('window')
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    gray:  '#7d7d7d'
};

const { primary, secondary, tertiary, darkLight, brand, green, red} = Colors;
export const StyledTextInput = styled.TextInput `
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 18px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    width: ${width - 40}px;
    color: ${tertiary};
`
export const LeftIcon = styled.View `
    left: 15px;
    top: 35px;
    position: absolute;
    z-index: 1;
`
export const RightIcon = styled.TouchableOpacity `
    right: 15px;
    top: 33px;
    position: absolute;
    z-index: 1;
`
export const StyledInputLabel = styled.Text `
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`
export const StyledFormArea = styled.View `
    width: 90%;
    margin-top: 30px;
`;