import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import theme from '../../theme';

import { visuallyhidden } from '../../helpers.css';


const isOpenState = css`
    ${visuallyhidden};
`;

const AccordionBody = styled.div`
    ${({ isOpen }) => (isOpen ? '' : isOpenState)};
`;

const AccordionTitle = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacing['2']};
`;

export default class Accordion extends Component {
    state = {
        isOpen: false,
    }

    toggle = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }));
    }

    render() {
        return (
            <Fragment>
                    {!this.state.isOpen && 
                        <AccordionTitle onClick={this.toggle}>Show more &nbsp;<FaCaretDown /></AccordionTitle>
                    }
                    {this.state.isOpen && 
                        <AccordionTitle onClick={this.toggle}>Show Less &nbsp;<FaCaretUp /></AccordionTitle>
                    }
                <AccordionBody isOpen={this.state.isOpen}>{this.props.children}</AccordionBody>
            </Fragment>
        );
    }
}