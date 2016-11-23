/**
 * Created by jacker on 2016/11/23.
 */
Ext.define('Crud.view.main.Detail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mydetailpanel',
    defaultType: 'textfield',
    bodyPadding: 10,
    hidden: true,
    bind: {
        hidden: '{!current}'
    },
    items: [
        {xtype: 'container', cls: 'ct-alert', html: 'This record is unsaved!', bind: {hidden: '{!isUnsavedRecord}'}},
        {fieldLabel: 'Id', bind: '{current.id}', xtype: 'displayfield'},
        {fieldLabel: 'Name', bind: '{current.name}'},
        {fieldLabel: 'Email', bind: '{current.email}'},
        {fieldLabel: 'Phone', bind: '{current.phone}'}
    ],
    bbar: [
        {text: 'Save', itemId: 'save'},
        {text: 'Add Child Page', itemId: 'addChild'},
        {text: 'Delete', itemId: 'delete'}
    ]
});
