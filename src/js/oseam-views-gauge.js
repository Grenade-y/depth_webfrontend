// -------------------------------------------------------------------------------------------------
// OpenSeaMap Water Depth - Web frontend for depth data handling.
//
// Written in 2013 by Dominik Fässler dfa@bezono.org
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along
// with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
// -------------------------------------------------------------------------------------------------

OSeaM.views.Gauge = OSeaM.View.extend({
    events: {
        'click .icon-trash' : 'onDelete'
    },
    initialize: function() {
        this.model.on('change:id',       this.render,           this);
    },
    render: function() {
        var template = OSeaM.loadTemplate('gauge');
        var content = $(template({
            id : this.model.get('id'),
            name : this.model.get('name'),
            type : this.model.get('gaugeType'),
            lat : this.model.get('latitude'),
            lon : this.model.get('longitude')
        }));
        OSeaM.frontend.translate(content);
        this.$el.html(content);
        return this;
    },
    onDelete: function() {
    	this.model.destroy();
    }
});