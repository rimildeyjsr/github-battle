var React = require('react');
var ConfirmBattle = require('../Components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentDidMount: function(){
        var query = this.props.location.query;
        console.log('componentDidMount');
        //fetch info
    },

    componentWillMount: function(){
        console.log('componentWillMount');
    },

    getInitialState: function() {
        console.log('getInitialState');
        return {
            isLoading: true,
            PlayerInfo: []
        }

    },

    componentWillReceiveProps: function(){
        console.log('component will receive props');
    },

    componentWillUnmount: function(){
        console.log('componentWillUNMount');
    },

    render: function(){
        return(
            <ConfirmBattle
                isLoading={this.state.isLoading}
                PLayerInfo={this.state.PlayerInfo}
            />
        );
    }
});

module.exports = ConfirmBattleContainer;