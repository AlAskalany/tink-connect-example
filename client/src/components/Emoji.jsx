import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Emoji extends Component {

    render() {
        let emoji;

        switch (this.props.type) {
            case "money":
                emoji = "💰";
                break;
            case "chart":
                emoji = "📈";
                break;
            case "wings-money":
                emoji = "💸";
                break;
            case "tada":
                emoji = "🎉";
                break;
            case "sad":
                emoji = "😞";
                break;
            default:
                emoji = "";
        }

        return (
            <h3><span role="img" aria-labelledby="jsx-a11y/accessible-emoji">{emoji}</span></h3>
        );
    }
}

Emoji.propTypes = {
    type: PropTypes.string.isRequired,
};