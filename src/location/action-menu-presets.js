const newActionConfig = {
  getUrl: () => '/locations/new',
  label: 'New'
}

const detailsActionConfig = {
  getUrl: ({locationId}) => `/locations/details/${locationId}`,
  label: 'Details'
}

const mapActionConfig = {
  getUrl: ({locationId}) => `/locations/map/${locationId}`,
  label: 'Map'
}

const editActionConfig = {
  getUrl: ({locationId}) => `/locations/edit/${locationId}`,
  label: 'Edit'
}

const deleteActionConfig = {
  getUrl: ({locationId}) => `/locations/delete/${locationId}`,
  label: 'Delete'
}

const disabled = config => ({
  ...config,
  disabled: true
})

const actionsMenuPresets = {
  'locations.noneSelected': {
    title: 'Locations',
    actions: [
      newActionConfig,
      disabled(detailsActionConfig),
      disabled(mapActionConfig),
      disabled(editActionConfig),
      disabled(deleteActionConfig),
    ]
  },
  'locations.oneSelected': {
    title: 'Locations',
    actions: [
      disabled(newActionConfig),
      detailsActionConfig,
      mapActionConfig,
      editActionConfig,
      deleteActionConfig,
    ]
  }
}

export default actionsMenuPresets;