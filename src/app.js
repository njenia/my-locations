import React, { useState } from "react";
import styled from "styled-components";
import { Route, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import partial from "lodash/partial";
import { Redirect } from "react-router";

import MainNavigation from "./main-navigation";
import { Locations } from "./location";
import { Categories } from "./category";
import store from "./store";
import ActionMenu from "./action-menu";
import locationsActionsMenuPresets from "./location/action-menu-presets";
import categoriesActionsMenuPresets from "./category/action-menu-presets";

const App = () => {
  const [actionMenuPreset, setActionMenuPreset] = useState({
    preset: locationsActionsMenuPresets["locations.noneSelected"]
  });

  const getPreset = preset =>
    locationsActionsMenuPresets[preset] || categoriesActionsMenuPresets[preset];

  const updateActionMenu = (mainActionUrl, preset, params) => {
    setActionMenuPreset({
      mainActionUrl,
      preset: getPreset(preset),
      params
    });
  };

  return (
    <Provider store={store}>
      <Container>
        <StyledActionMenu>
          <ActionMenu
            presetConfig={actionMenuPreset.preset}
            params={actionMenuPreset.params}
            mainActionUrl={actionMenuPreset.mainActionUrl}
          />
        </StyledActionMenu>

        <StyledPage>
          <PageContentContainer>
            <Redirect exact from="/" to="/locations" />
            <Route
              path="/locations"
              render={() => (
                <Locations
                  updateActionMenu={partial(updateActionMenu, "/locations")}
                />
              )}
            />
            <Route
              path="/categories"
              render={() => (
                <Categories
                  updateActionMenu={partial(updateActionMenu, "/categories")}
                />
              )}
            />
          </PageContentContainer>
        </StyledPage>

        <StyledMainNavigation>
          <MainNavigation />
        </StyledMainNavigation>
      </Container>
    </Provider>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledPage = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  padding: 16px 0;
`;

const PageContentContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  min-width: 500px;
`;

const StyledActionMenu = styled.div``;

const StyledMainNavigation = styled.div``;

export default withRouter(App);
