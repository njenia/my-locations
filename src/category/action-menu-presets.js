const newActionConfig = {
  getUrl: () => '/categories/new',
  label: 'New'
}

const detailsActionConfig = {
  getUrl: ({categoryId}) => `/categories/details/${categoryId}`,
  label: 'Details'
}

const editActionConfig = {
  getUrl: ({categoryId}) => `/categories/edit/${categoryId}`,
  label: 'Edit'
}

const deleteActionConfig = {
  getUrl: ({categoryId}) => `/categories/delete/${categoryId}`,
  label: 'Delete'
}

const disabled = config => ({
  ...config,
  disabled: true
})

const actionsMenuPresets = {
  'categories.noneSelected': {
    title: 'Categories',
    actions: [
      newActionConfig,
      disabled(detailsActionConfig),
      disabled(editActionConfig),
      disabled(deleteActionConfig),
    ]
  },
  'categories.oneSelected': {
    title: 'Categories',
    actions: [
      disabled(newActionConfig),
      detailsActionConfig,
      editActionConfig,
      deleteActionConfig,
    ]
  }
}

export default actionsMenuPresets;