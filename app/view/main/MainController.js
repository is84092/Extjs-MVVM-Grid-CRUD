/**
 * @class CrudTree.main.MainController
 * @extends Ext.app.ViewController
 * Description
 */
Ext.define('Crud.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller',

    requires: ['Crud.model.GridModel'],

    init: function() {
        this.listen({
            component: {
                'mygridpanel': {
                    'select': 'onGridSelect'
                },
                'mydetailpanel #save': {
                    click: 'onSaveClick'
                },
                'mydetailpanel #addChild': {
                    click: 'onAddClick'
                },
                'mydetailpanel #delete': {
                    click: 'onDeleteClick'
                }
            }
        });
    },


    onAddClick: function() {
        var me = this;

        Ext.Msg.prompt('Add Model', 'Model Name', function (action, value) {
            if (action === 'ok') {
                var session = me.getSession(),
                    viewModel = me.getViewModel(),
                    selectedModel = viewModel.getData().current,
                    grid = me.lookupReference('gridreference');

                var newModel = session.createRecord('Crud.model.GridModel', {
                    name: value
                });

                grid.getStore().insert(0, newModel);
                grid.setSelection(newModel);
            }
        });
    },


    onDeleteClick: function() {
        var me = this;

        Ext.Msg.confirm('Warning', 'Are you sure you\'d like to delete this record?', function(btn) {
            if(btn === 'yes') {
                me.getViewModel().get('current').erase();
                me.getViewModel().set('current', null);
                Ext.toast('Model deleted');
            }
        }, this)

    },


    onSaveClick: function() {
        this.getViewModel().get('current').save({
            failure: function(record, operation) {
                // do something if the save failed
            },
            success: function(record, operation) {
                // do something if the save succeeded
            },
            callback: function(record, operation, success) {
                console.log("save call back")
            }
        });
        Ext.toast('Model saved');
    },


    onGridSelect: function(tree, model) {
        console.log("onselect");
        this.getViewModel().setLinks({
            current: {
                type: 'Crud.model.GridModel',
                id: model.getId()
            }
        });
    }
});