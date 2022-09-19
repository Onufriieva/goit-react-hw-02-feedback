import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
display: flex;
margin: 0px 0px 24px 0px;
padding: 0px;
list-style: none;
`;

export const ListItem = styled.li`
margin-right: 12px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15); 

&:last-child {
    margin-right: 0px;
}
`;

export const ListButton = styled.button`
padding: 6px 22px;
font-weight: 700;
background-color: #ffffff;
min-width: 160px;
border-radius: 4px;

&:hover,
&:focus {
    background-color: grey;
    color: #ffffff;
 }
`;
