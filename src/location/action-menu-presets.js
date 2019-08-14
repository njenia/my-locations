import AddIcon from '@material-ui/icons/Add'
import ListIcon from '@material-ui/icons/List'
import MapIcon from '@material-ui/icons/Map'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const newActionConfig = {
  getUrl: () => "/locations/new",
  label: "New",
  Icon: AddIcon
};

const detailsActionConfig = {
  getUrl: ({ locationId }) => `/locations/details/${locationId}`,
  label: "Details",
  Icon: ListIcon
};

const mapActionConfig = {
  getUrl: ({ locationId }) => `/locations/map/${locationId}`,
  label: "Map",
  Icon: MapIcon
};

const editActionConfig = {
  getUrl: ({ locationId }) => `/locations/edit/${locationId}`,
  label: "Edit",
  Icon: EditIcon
};

const deleteActionConfig = {
  getUrl: ({ locationId }) => `/locations/delete/${locationId}`,
  label: "Delete",
  Icon: DeleteIcon
};

const disabled = config => ({
  ...config,
  disabled: true
});

const actionsMenuPresets = {
  "locations.noneSelected": {
    title: "Locations",
    actions: [
      newActionConfig,
      disabled(detailsActionConfig),
      disabled(mapActionConfig),
      disabled(editActionConfig),
      disabled(deleteActionConfig)
    ]
  },
  "locations.oneSelected": {
    title: "Locations",
    actions: [
      disabled(newActionConfig),
      detailsActionConfig,
      mapActionConfig,
      editActionConfig,
      deleteActionConfig
    ]
  }
};

export default actionsMenuPresets;
