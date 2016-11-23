/**
 * Created by jacker on 2016/11/23.
 */
Ext.define('Crud.view.main.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',
    bind: {store: '{mystore}'},
    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Email', dataIndex: 'email'},
        {text: 'Phone', dataIndex: 'phone'}
    ]
});