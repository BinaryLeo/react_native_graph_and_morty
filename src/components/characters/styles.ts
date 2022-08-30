import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Wrapper = styled.View`
  width: 90%;
  border-radius: 70px;
  margin: 10px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.cards};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ImageContainer = styled.View`
  flex: 1;
`;
export const Content = styled.View`
  margin-left:20px;
  flex: 2;
`;
export const LabelContent = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
