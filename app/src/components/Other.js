import React from "react";

class Other extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			value: 'hello'
		};
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<div>
				<input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>
				<h2>{this.state.value}</h2>
			</div>
		);
	}
}

export default Other;