import React from "react";

class Card extends React.Component {

    description = (
        <textarea className="textarea description"
            placeholder="Add description" onInput={e => {
                console.log(e.target.innerText);
            }}
        >
        </textarea>
    );

    state = {
        isActive: false,
    };

    showHide = _ => {
        this.setState({
            isActive: !this.state.isActive
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="card-container">
                <div className="cards" onClick={
                    this.showHide
                }>
                    <div className="cardinput">
                        <textarea className="textarea" placeholder="Card Name" title="Add a name" />
                    </div>
                    <button
                        className="delete"
                        type="submit"
                        title="Delete"
                        onClick={(e) => {
                            e.preventDefault();
                            // console.log(e.target);
                            e.target.parentElement.parentElement.remove(); /* Eltávolítjuk vele az inputokat a gombbal együtt */
                        }}
                    >
                        X{/* Delete */}
                    </button>
                </div>
                <div className="description-frame">
                    {this.state.isActive && this.description}
                </div>
            </div>
        );
    }
}

export default Card;
