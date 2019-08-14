import React, { useEffect } from "react";
import { withRouter } from "react-router";

import UpsertCategory from "../common/components/upsert-category-view";

export const NewCategory = ({
  history,
  upsertCategory,
  onSubmit,
  updateActionMenu
}) => {
  useEffect(() => {
    updateActionMenu("categories.noneSelected");
  }, []);

  return (
    <UpsertCategory
      upsertCategory={upsertCategory}
      onSubmit={data => {
        upsertCategory(data);
        onSubmit();
      }}
    />
  );
};

export default withRouter(NewCategory);
