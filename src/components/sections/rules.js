import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: ${theme.spacing['5']};
    font-size: 1.2rem;
    line-height: 2rem;
`;

const H2 = styled.h2`
    text-align: center;
`;

const Rules = () => (
    <SectionContainer>
        <H2>Rules of play</H2>
        <p>By entering our soft play you agree to all of our rules of play and will adhere to them. In the event that you do not adhere to our rules of play you will be asked to leave the hall without a refund. We reserve the right to amend the rules of play at any time without notice.</p>
        <p>Parents / Guardians must be over 18 years old and must supervise children using the facility. It is the responsibility of parents or other accompanying adults to explain the rules of play to children and monitor them closely.</p>
        <p>Parents / Guardians must ensure that children are appropriately dressed to use the facility. We advise that children should wear long trousers and sleeves to minimise the risk of “burn” and should not wear jewellery, buckles, watches or other sharp objects. Clothes should be tucked in.</p>
        <p>We provide members of staff who monitor the equipment and who have access to first aid facilities, however these staff are not there to supervise your children. Parents or other accompanying adults must ensure that children behave at all times in a manner to avoid causing offence or injury to others.</p>
        <p>Age restrictions do vary in the play zone; these are in place for the safety and enjoyment of all children. Please ensure your children play in the correct areas. D.O.Bs will be taken for all children who appear to be aged 5+.</p>
        <p>Children who are unwell must not be brought into the soft play. Anyone who becomes unwell whilst at the soft play is asked to leave immediately to avoid the risk of infection.</p>
        <p>We encourage parents or other accompanying adults to play with their children and to use the equipment where it is safe to do so. All adults doing this must use reasonable care to avoid damage to the equipment or injury to themselves or others.</p>
        <p>No pets are allowed on the premises except guide dogs.</p>
        <p>Balls and objects must not be thrown at others. Children must not be allowed to climb on the netted walls or the system structure or on the slides. Please also ensure that your children do not play directly in front of the slide exits.</p>
        <p>During busy times, the length of play sessions may be limited.</p>
        <p>If you witness any unsafe play, violent / abusive conduct or dangerous equipment you agree to notify a member of staff immediately.</p>
        <p>Children and adults must remove shoes and be wearing socks to use the equipment. Anti-slippery socks can be purchased at the venue. </p>
        <p>NO food or drink should be taken into the play zone. Chewing gum is strictly forbidden.</p>
        <p>Smoking and the use of e-cigarettes is not permitted on our premises.</p>
        <p>Nappy changing and the use of potties etc should be conducted in the correct areas. We do provide baby changing facilities in the disabled toilet. All nappies should be disposed of in the correct bins provided.</p>
        <p>We accept no responsibility for theft or loss of items. Personal items and money belonging to children should be left with their accompanying adult.</p>

    </SectionContainer>
);

export default Rules;