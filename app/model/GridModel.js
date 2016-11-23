/**
 * Created by jacker on 2016/11/23.
 */
Ext.define('Crud.model.GridModel', {
    extend: 'Ext.data.Model',
    clientIdProperty: 'clientId',
    identifier: {
        type: 'sequential',
        prefix: 'Unsaved-'
    },
    proxy: {
        type: 'ajax',
        api: {
            create: 'resources/create.json',
            read: 'resources/data.json',
            update: 'resources/update',
            destroy: 'resources/destroy'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success',
            messageProperty: 'err'
        },
        writer: {
            type: 'json',
            clientIdProperty: 'clientId',
            writeAllFields: true
        }
    },
    fields: [
        { name: 'name' },
        { name: 'email' },
        { name: 'phone' }
    ]
});

