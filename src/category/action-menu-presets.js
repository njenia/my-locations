import AddIcon from '@material-ui/icons/Add'
import ListIcon from '@material-ui/icons/List'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const newActionConfig = {
  getUrl: () => "/categories/new",
  label: "New",
  Icon: AddIcon
};

const detailsActionConfig = {
  getUrl: ({ categoryId }) => `/categories/details/${categoryId}`,
  label: "Details",
  Icon: ListIcon
};

const editActionConfig = {
  getUrl: ({ categoryId }) => `/categories/edit/${categoryId}`,
  label: "Edit",
  Icon: EditIcon
};

const deleteActionConfig = {
  getUrl: ({ categoryId }) => `/categories/delete/${categoryId}`,
  label: "Delete",
  Icon: DeleteIcon
};

const disabled = config => ({
  ...config,
  disabled: true
});

const actionsMenuPresets = {
  "categories.noneSelected": {
    title: "Categories",
    actions: [
      newActionConfig,
      disabled(detailsActionConfig),
      disabled(editActionConfig),
      disabled(deleteActionConfig)
    ]
  },
  "categories.oneSelected": {
    title: "Categories",
    actions: [
      disabled(newActionConfig),
      detailsActionConfig,
      editActionConfig,
      deleteActionConfig
    ]
  }
};

export default actionsMenuPresets;
