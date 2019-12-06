import React from "react";
import { Dropdown } from "semantic-ui-react";

const SearchDropDownBox = props => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      Ticket ID
      <Dropdown
        placeholder={props.placeholderContent}
        search
        selection
        options={props.options}
        style={{marginLeft: "10px"}}
      />
    </div>
  );
};

export { SearchDropDownBox };
