var React = require('react');
var ConfirmBattle = require('../Components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentDidMount: function(){
        var query = this.props.location.query;
        //fetch info
    },

    getInitialState: function() {
        return {
            isLoading: true,
            PlayerInfo: []
        }
    },

    render: function(){
        return(
            <ConfirmBattle />
        );
    }
});

module.exports = ConfirmBattleContainer;