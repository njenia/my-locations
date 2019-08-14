import styled from "styled-components";
import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import Select from "../../../common/components/select";
import Checkbox from "../../../common/components/checkbox";
import { Typography } from "@material-ui/core";

const LocationsListToolbar = ({
  isSortAscending,
  onSortDirectionClicked,
  categoryFilterOptions,
  onCategoryFilterChange,
  onGroupClicked,
  isGroupedLocations
}) => (
  <ToolbarContainer>
    <ToolbarElementContainer>
      <Checkbox label="Group by category" handleChange={onGroupClicked} />
    </ToolbarElementContainer>
    <ToolbarElementContainer>
      <ToolbarElementLabel
        clickable
        isDisabled={isGroupedLocations}
        onClick={onSortDirectionClicked}
      >
        Sort by location name
      </ToolbarElementLabel>
      <SortDirectionIcon
        isSortAscending={isSortAscending}
        onSortDirectionClicked={onSortDirectionClicked}
        isDisabled={isGroupedLocations}
      />
    </ToolbarElementContainer>
    <SelectContainer>
      <Select
        options={categoryFilterOptions}
        handleChange={onCategoryFilterChange}
        emptyLabel="Filter by category"
        isDisabled={isGroupedLocations}
      />
    </SelectContainer>
  </ToolbarContainer>
);

const SortDirectionIcon = ({
  isSortAscending,
  onSortDirectionClicked,
  isDisabled
}) => (
  <SortDirectionIconContainer
    isDisabled={isDisabled}
    onClick={onSortDirectionClicked}
  >
    {isSortAscending ? (
      <ArrowDropDownIcon fontSize="large" />
    ) : (
      <ArrowDropUpIcon fontSize="large" />
    )}
  </SortDirectionIconContainer>
);

const ToolbarContainer = styled.div`
  display: flex;
`;

const ToolbarElementContainer = styled.div`
  background-color: #f5f5f5;
  &:not(:last-child) {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const ToolbarElementLabel = styled(Typography).attrs({
  variant: "body1"
})`
  ${props => (props.isDisabled ? "color: #b6b6b6;" : "")} ${props =>
    props.clickable ? "cursor: pointer;" : ""};
`;

const SortDirectionIconContainer = styled.div`
  cursor: pointer;
  ${props => (props.isDisabled ? "pointer-events: none; color: #b6b6b6;" : "")};
`;

const SelectContainer = styled.div`
  margin-left: 10px;
`;

export default LocationsListToolbar;
