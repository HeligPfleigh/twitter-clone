import React, { Component } from 'react';
import styled from 'styled-components/native';

const Root = styled.View`
  alignItems: center;
  justifyContent: center;
  flex: 1;
  backgroundColor: ${props => props.theme.WHITE};
  width: 90%;
  alignSelf: center;
`;

const Text = styled.Text`
  color: ${props => props.theme.PRIMARY};
  fontSize: 18;
  textAlign: center;
`;

class ProfileScreen extends Component {
  render(){
    return (
      <Root>
        <Text>Profile</Text>
      </Root>
    )
  }
}

export default ProfileScreen;
