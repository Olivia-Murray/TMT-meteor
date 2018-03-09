import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default class SecondMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="second-menu">
          <Container>

            <Dropdown item text="About">
              <Dropdown.Menu>
                <Dropdown.Item>Mission & Vision</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Science with TMT">
              <Dropdown.Menu>
                <Dropdown.Item>Science Themes</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="The Observatory">
              <Dropdown.Menu>
                <Dropdown.Item>Site</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Education & Outreach">
              <Dropdown.Menu>
                <Dropdown.Item>Vision</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="News & Multimedia">
              <Dropdown.Menu>
                <Dropdown.Item>News</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>Events</Menu.Item>

            <Menu.Item>Documents</Menu.Item>


          </Container>

        </Menu>
    );
  }
}
