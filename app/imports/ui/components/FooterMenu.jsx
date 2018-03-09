import React from 'react';
import { Grid, Image, List, Header, Icon } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    const itemStyle1 = { color: 'white', fontSize: '1rem' };
    const itemStyle2 = { color: '#FFAB40', fontSize: '1rem' };
    const itemStyle3 = { color: '#FFAB40', fontSize: '1rem', borderTop: '1px solid white' };
    return (
        <div className="footer-background">
          <Grid container columns={4}>
            <Grid.Column width={8}>
              <Image className="tmtlogo" src="https://www.tmt.org/assets/tio_logo-86732a740c18002b14060af42b4f6a1cc65f1836195e9cacdcfc6b13a3639b4e.png"/>
              <p>
                The TMT International Observatory LLC (TIO), a non-profit organization, was established in May 2014 to carry out the construction and operation phases of the TMT Project. The Members of TIO are Caltech, the University of California, the National Institutes of Natural Sciences of Japan, the National Astronomical Observatories of the Chinese Academy of Sciences, the Department of Science and Technology of India, and the National Research Council (Canada); the Association of Universities for Research in Astronomy (AURA) is a TIO Associate. Major funding has been provided by the Gordon &amp; Betty Moore Foundation.
              </p>
              <List>
                <List.Item style={itemStyle2}><Icon name="marker" />100 West Walnut Street, Suite 300
                  <br/>
                  Pasadena, CA 01124
                </List.Item>
                <List.Item style={itemStyle3}><Icon name="envelope" />inquiry@tmt.org</List.Item>
              </List>
            </Grid.Column>


            <Grid.Column width={2}>
              <Header style={itemStyle1}>TMT Policies</Header>
              <List>
                <List.Item style={itemStyle2}>Private Policy</List.Item>
                <List.Item style={itemStyle2}>Image Use Policy</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={2}>
              <Header style={itemStyle1}>Work with TMT</Header>
              <List>
                <List.Item style={itemStyle2}>Employment Opportunities</List.Item>
                <List.Item style={itemStyle2}>Industry Opportunities</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={2}>

              <Header style={itemStyle1}>Thirty Meter Telescope</Header>
              <List>
                <List.Item style={itemStyle2}>TMT Hawaii</List.Item>
                <List.Item style={itemStyle2}>TMT La Palma</List.Item>
                <List.Item style={itemStyle2}>TMT Intranet</List.Item>
                <List.Item style={itemStyle2}>Old TMT Website</List.Item>
              </List>

            </Grid.Column>

          </Grid>
        </div>
    );
  }
}
