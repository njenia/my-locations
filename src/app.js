import React, {useState} from 'react'
import styled from 'styled-components'
import {Route, withRouter} from "react-router-dom"
import {Provider} from 'react-redux'

import MainNavigation from './main-navigation'
import {Locations} from './location'
import {Categories} from './category'
import store from './store'
import ActionMenu from "./action-menu"

const App = () => {
  const [actionsConfig, setActionsConfig] = useState({})

  return (
    <Provider store={store}>
      <Container>
        <StyledActionMenu>
          <ActionMenu
            title={actionsConfig.title}
            actions={actionsConfig.actions}
          />
        </StyledActionMenu>

        <StyledPage>
          <PageContentContainer>
            <Route path="/locations" render={() => <Locations updateActionMenu={(title, actions) => {
              setActionsConfig({
                title,
                actions
              })
            }}/>}/>
            <Route path="/categories" render={() => <Categories updateActionMenu={(title, actions) => {
              setActionsConfig({
                title,
                actions
              })
            }}/>}/>
          </PageContentContainer>
        </StyledPage>

        <StyledMainNavigation>
          <MainNavigation/>
        </StyledMainNavigation>
      </Container>
    </Provider>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const StyledPage = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  padding: 16px 0;
`

const PageContentContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100%;
  min-width: 500px;
`

const StyledActionMenu = styled.div`

`

const StyledMainNavigation = styled.div`
`


export default withRouter(App)
