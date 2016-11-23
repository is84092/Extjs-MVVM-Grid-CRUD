/**
 * Created by jacker on 2016/11/23.
 */
Ext.define('Crud.store.GridStore', {
    extend: 'Ext.data.Store',
    model: 'Crud.model.GridModel',
    alias: 'store.mygridstore',
    autoLoad: true
});
