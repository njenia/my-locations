import styled from "styled-components"
import React from "react"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

import Select from "../../../common/components/select"
import Checkbox from "../../../common/components/checkbox"

const LocationsListToolbar = ({ isSortAscending, onSortDirectionClicked, categoryFilterOptions,
                                onCategoryFilterChange, onGroupClicked }) => (
  <ToolbarContainer>
    <div>Sort by: Location name</div>
    <SortDirectionIcon isSortAscending={isSortAscending} onSortDirectionClicked={onSortDirectionClicked}/>
    |
    <div>Filter by category:</div>
    <Select options={categoryFilterOptions} handleChange={onCategoryFilterChange}/>
    |
    <Checkbox label="Group by category" handleChange={onGroupClicked}/>
  </ToolbarContainer>
);


const SortDirectionIcon = ({isSortAscending, onSortDirectionClicked}) => (
  <div onClick={onSortDirectionClicked}>
    {isSortAscending ? <ArrowDropDownIcon fontSize="large"/> :
      <ArrowDropUpIcon fontSize="large"/>}
  </div>
);

const ToolbarContainer = styled.div`
  display: flex;
`;

export default LocationsListToolbar;