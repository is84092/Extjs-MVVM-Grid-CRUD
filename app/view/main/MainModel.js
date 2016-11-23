Ext.define('Crud.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainviewmodel',

    requires: ['Crud.store.GridStore'],

    stores: {
        mystore: {
            type: 'mygridstore',
            session: true
        }
    },


    formulas: {
        isUnsavedRecord: function(get) {
            return get('current.id').toString().indexOf('Unsaved') > -1;
        }
    }
});
