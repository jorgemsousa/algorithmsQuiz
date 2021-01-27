import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const Buttom = styled.div`
    display: flex;
    button {
        border: 1px solid ${db.theme.colors.wrong};
        padding: 10px;
        background-color: ${db.theme.colors.primary};
        border-radius: ${db.theme.borderRadius};
        flex: 1;
        margin-top: 10px;
        margin-bottom: 5px;
        color: ${db.theme.colors.contrastText}
    }  
    button:hover {
        cursor: pointer;
        font-weight: bold;
        background-color: ${db.theme.colors.wrong}
    }
`;

export default function ButtomPrinmary(props) {

    const [name, setName] = useState('');

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Buttom {...props}>
          <button type="submit" disabled={name.length === 0}>
                Jogar
          </button>
      </Buttom>
    );
}