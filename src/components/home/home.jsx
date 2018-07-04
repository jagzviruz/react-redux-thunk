import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ModalHolder from "../modal-holder/modal-holder";

import TableData from "../table-data";

class Home extends Component {
  state = {
    showModal: false
  };

  showModal = () => {
    this.setState({
      showModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };

  handleTabSelection = (index, lastIndex, event) => {
    console.log(index, lastIndex, event);
  };

  render() {
    return (
      <div className="home">
        <button onClick={this.showModal}>Show Modal</button>
        <ModalHolder
          modalState={this.state.showModal}
          closeModal={this.closeModal}
        >
          <Tabs onSelect={this.handleTabSelection}>
            <TabList>
              <Tab>Table Tab</Tab>
              <Tab>Chart Tab</Tab>
            </TabList>

            <TabPanel>
              <TableData />
            </TabPanel>
            <TabPanel>
              <div> Some Charts Here</div>
            </TabPanel>
          </Tabs>
        </ModalHolder>
      </div>
    );
  }
}

export default Home;
