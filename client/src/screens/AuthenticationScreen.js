import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.SECONDARY};
  position: relative;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.WHITE};
  fontWeight: bold;
  fontSize: 20;
`;

const ButtonLogin = styled(Touchable).attrs({
  feedback: 'opacity',
})`
  height: 75;
  width: 150;
  backgroundColor: ${props => props.theme.PRIMARY};
  justifyContent: center;
  alignItems: center;
  position: absolute;
  top: 30%;
  right: 0;
  borderTopLeftRadius: 20;
  borderBottomLeftRadius: 20;
`

class AuthenticationScreen extends Component {
  render(){
    return (
      <Root>
        <ButtonLogin>
          <ButtonText>
            Auth
          </ButtonText>
        </ButtonLogin>
      </Root>
    )
  }
}

export default AuthenticationScreen;
