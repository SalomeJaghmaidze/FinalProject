import React from 'react';
import { StyledMenu, LinkNav, Page } from './Menu.styled';

const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <LinkNav to='/Posts'>
                    <Page>Main</Page>
                </LinkNav>
                <LinkNav to='/Services'>
                    <Page>Services</Page>
                </LinkNav>
      </StyledMenu>
    )
  }

  export {Menu}