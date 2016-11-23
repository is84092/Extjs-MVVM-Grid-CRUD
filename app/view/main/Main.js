Ext.define('Crud.view.main.Main', {

    extend: 'Ext.panel.Panel',
    xtype: 'app-main',
    requires: [
        'Crud.view.main.Detail',
        'Crud.view.main.Grid',
        'Crud.view.main.MainController',
        'Crud.view.main.MainModel'
    ],

    session: true,

    controller: 'maincontroller',
    viewModel: {
        type: 'mainviewmodel'
    },

    layout: 'border',

    title: 'GRID CRUD',

    items: [
        { xtype: 'mydetailpanel', region: 'center', reference: 'detailreference' },
        { xtype: 'mygridpanel', region: 'west', width: 300, reference: 'gridreference', split: true }
    ]
});
