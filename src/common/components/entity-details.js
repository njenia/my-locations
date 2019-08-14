import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import styled from "styled-components";

export const EntityTitle = ({ title }) => (
  <TitleContainer>
    <Typography variant="h4">{title}</Typography>
  </TitleContainer>
);

export const EntityDetail = ({ Icon, label }) => (
  <EntityDetailContainer>
    <IconContainer>
      <Icon size="large" />
    </IconContainer>
    <Typography variant="body1">{label}</Typography>
  </EntityDetailContainer>
);

const TitleContainer = styled.div`
  margin-bottom: 15px;
`;

const EntityDetailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;
