import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    const itemStyle1 = { color: 'white', fontSize: '4.2rem', fontFamily: 'sans-serif' };
    const itemStyle2 = { color: 'white', fontSize: '42px', fontFamily: 'sans-serif' };
    return (
        <div className="centerImage">
          <div className="row">
            <Container>
              <Header style={itemStyle1}>Thirty Meter Telescope</Header>
              <Header style={itemStyle2}>
                Astronomy&apos;s Next-Generation Observatory
              </Header>
            </Container>
          </div>
        </div>
    );
  }
}
