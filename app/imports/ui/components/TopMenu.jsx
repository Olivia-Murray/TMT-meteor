import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle1 = { color: 'white', fontSize: '14px', borderRight: '1px solid white' };
    const itemStyle2 = { color: 'white', fontSize: '14px' };
    const itemStyle3 = { color: 'white', fontSize: '14px', backgroundColor: '#3498DB' };
    const itemStyle4 = { color: 'white', fontSize: '14px', backgroundColor: '#706f7f' };

    return (
        <Menu borderless className="top-menu">
          <Container>

            <Menu.Item>
              <Image className="tmtlogo" src="https://www.tmt.org/assets/tio_logo-86732a740c18002b14060af42b4f6a1cc65f1836195e9cacdcfc6b13a3639b4e.png"/>
            </Menu.Item>
            <Menu.Item style={itemStyle1} position="right">Scientists</Menu.Item>
            <Menu.Item style={itemStyle2}>Industry</Menu.Item>
            <Menu.Item style={itemStyle3}>Stay Connected</Menu.Item>
            <Menu.Item style={itemStyle4}>Contact Us</Menu.Item>

          </Container>

        </Menu>
    );
  }
}
