import React from "react";
import styled from "styled-components";
import map from "lodash/map";
import Typography from "@material-ui/core/Typography/Typography";

export const createSimpleMarkersFromCoords = coordsArr =>
  map(coordsArr, coords => ({ coords }));

export const createMarkers = locations =>
  map(locations, ({ name, address, coords }) => ({
    coords,
    PopupComponent: <PopupContent name={name} address={address} />
  }));

const PopupContent = ({ name, address }) => (
  <StyledPopupContent>
    <Typography variant="subtitle1">{name}</Typography>
    <Typography variant="subtitle2">{address}</Typography>
  </StyledPopupContent>
);

const StyledPopupContent = styled.div`
  padding: 10px;
`;
