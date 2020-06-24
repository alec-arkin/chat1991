import React from 'react';
import styled from 'styled-components';
import {
    Password as InputPassword,
    Email as InputEmail,
} from 'components/Input';
import { Save as ButtonSave } from 'components/Button';
import Form from '../Form';

const Wrapper = styled(Form)`
	flex-direction: column;
	width: 440px;	
		${({ tablet, mobile, theme }) => {
    const type = (tablet || mobile)
        ? 'primaryMobile'
        : 'primaryDesktop';

    return `
    align-items: ${theme.form[type].alignItems};
    width: ${theme.form[type].width};
     `
}
    }
`;

class User extends React.Component {

    render = () => {
        const { mobile, tablet } = this.props;
        return <Wrapper
            mobile={ mobile }
            tablet={ tablet }>
            <InputEmail/>
            <InputPassword/>
            <ButtonSave
                mobile={ mobile }
                tablet={ tablet }>
                Добавить
            </ButtonSave>
        </Wrapper>;
    };
};
export default User;

