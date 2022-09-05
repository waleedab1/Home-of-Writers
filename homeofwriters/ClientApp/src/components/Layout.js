import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Sidebar from './Sidebar.jsx';

import './styles/Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
      return (
          <div className='layout__wrapper'>
              <Sidebar />
              <Container>
                {this.props.children}
              </Container>
          </div>
    );
  }
}
