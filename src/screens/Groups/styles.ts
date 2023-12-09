import styled  from "styled-components/native";
  
export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.COLORS.GRAY_200};
    padding: 24px;
    `;

export const Title = styled.Text`
    color: #fff;
    font-size:32px;
`;