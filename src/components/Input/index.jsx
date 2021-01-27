import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const Input = styled.div`
    display: flex;
    input {
        border: 1px solid ${db.theme.colors.secondary};
        padding: 10px;
        background-color: ${db.theme.colors.mainBg};
        border-radius: ${db.theme.borderRadius};
        flex: 1;
        margin-bottom: 5px;
    }  
`;

export default function InputText(props) {

    const [name, setName] = useState('');

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Input {...props}>
        <input
            onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value);
                // State
                // name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value);
            }}
            placeholder="Informe seu nome ai"
        />
      </Input>
    );
  }