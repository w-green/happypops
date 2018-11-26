import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';
import Accordion from '../Accordion';

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


const AcceptanceOfRisk = () => (
    <SectionContainer>
        <H2>Acceptance of Risk</H2>
        <p>Prior to visiting please familiarise yourself with our soft play  rules to ensure safety of your little ones. 
        You will be asked to sign Acceptance of these on arrival as well as Acceptance of Risk.</p>


        <p>Play involving inflatables carries a potential risk of serious injury if not undertaken with suitable precautions in place.</p>

        <Accordion>
            <p>Happy Pops has taken every reasonable precaution to ensure that you have a safe and fun experience through the use of high quality equipment and the services of an experienced team. However, it is important to understand that risk in any context can never be fully eliminated, and that you accept that activities at Happy Pops are conducted at your own risk and that you knowingly and freely assume responsibility for your and your children’s participation for which you are legally responsible.</p>

            <p>Happy Pops is not responsible for any and/or all injury, disability, death or loss or damage to any person or property arising from your own carelessness or negligence and/or failure to follow instructors. However, nothing in this Risk Acceptance Form excludes or limits liability for death or personal injury as a consequence of Happy Pops negligence.</p>
    
            <p>For you to enter the playground, we will require that you accept the contents of this Risk Acceptance Form by signing a hard copy upon your arrival at the Happy Pops to confirm that you accept responsibility for yourself and your child during their time in the Happy Pops play area. </p>

            <p>Please report to a member of staff at the beginning of each visit to Happy Pops for any concerns. If you require more assistance, please do not hesitate to ask a member of the Happy Pops team.
            All participants must obey all instructions given by Happy Pops staff at all times.</p>

            <p>All existing injuries or health issues that may be affected by you taking part in playing must be reported to a Happy Pops member of staff before taking part (e.g. Heart Problems, Asthma, Diabetes, Allergies).</p>

            <p>By playing with us, you declare that you are the parent or guardian of any children in the group, or, if not, that you have the authority from the child(ren)s parent(s) or guardian(s) to sign to confirm consent on their behalf.</p>

            <p>By playing with us, you confirm that you have read and understood the above, you have read and understood the above guidelines and assume full responsibility for any risk associated with taking part in the activities provided by Happy Pops, agree to this Risk Acceptance Form and you agree to hold harmless Happy Pops against liability of any kind in relation to any loss or injury that arises as a result of your own carelessness or negligence or your failure to follow instructions.</p>
        </Accordion>

    </SectionContainer>
);

export default AcceptanceOfRisk;

