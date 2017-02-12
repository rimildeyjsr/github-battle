var React = require('react');
var ConfirmBattle = require('../Components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
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