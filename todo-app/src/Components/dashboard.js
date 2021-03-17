import React from "react";
import Card from "./card";

class Dashboard extends React.Component {
  state = { count: 0, cards: [] };

  addCard = () => {
    this.setState({
      count: this.state.count + 1,
      cards: [...this.state.cards, <Card key={this.state.count} />],
    });
  };

  render() {
    return (
      <div className="dashboard">
        <form id="to-do-form">
          <button
            title="Create Card"
            className="create"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("th:", this, "st:", this.state);
              this.addCard();
            }}
          >
            +
          </button>
          <input type="text" placeholder="Untitled Dashboard" />
          <Card />
          {this.state.cards}
        </form>
      </div>
    );
  }
}

export default Dashboard;
