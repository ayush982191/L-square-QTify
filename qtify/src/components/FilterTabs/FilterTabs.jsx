import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import style from "./FilterTabs.module.css";
import { allSongsTabs } from "../../config/helper-config";

function FilterTabs({ loadingState, data }) {
  console.log("data is",data);
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filteredData = (index) => {
    if (index == 0) return data;

    const tabLabel = ["rock", "pop", "jazz", "blues"][index-1];
    return data?.filter(
      (item) => item?.genre?.key === tabLabel?.toLowerCase()
    );
    // console.log("f data is ");
    // console.log(fdata);
    // return fdata
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {allSongsTabs.map((each) => (
            <Tab label={each} key={each} sx={{ color: "white" }} />
          ))}
        </Tabs>
      </Box>
      {allSongsTabs.map((_, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <div>
            <Section
              data={filteredData(index)}
              type="songs"
              header={"filterAll"}
              loadingState={loadingState}
            />
          </div>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default FilterTabs;

// CustomTabPanel
