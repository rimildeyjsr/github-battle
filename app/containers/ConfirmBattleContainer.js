var React = require('react');
var ConfirmBattle = require('../Components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentDidMount: function(){
        var query = this.props.location.query;
        githubHelpers.getPlayersInfo([query.playerOne,query.playerTwo]);
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