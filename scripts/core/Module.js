define(['jquery','lib/Class', 'utils/Values', 'utils/Events'], function($, Class, Values, Events){
    return Class.extend({
        defaults: function(){
            return {
                onChange: null,
                onDataChange: null
            }
        },
        init: function(element, options){
            var inst = this
            inst.$el = $(element);
            inst.options = $.extend({}, this.defaults(), options);
        },
        value: function(){
            var inst = this, opts = inst.options;
            if(arguments.length === 0) {
                return inst._value;
            } else {
                var value = arguments[0];
                if(!Values.equals(inst._value, value)) {
                    inst._value = value;
                    Events.apply(opts.onChange, inst, value);
                }
                return inst;
            }
        },
        data: function(){
            var inst = this, opts = inst.options;
            if(arguments.length === 0) {
                return inst._data;
            } else {
                var data = arguments[0];
                if(!Values.equals(inst._data, data)) {
                    inst._data = data;
                    Events.apply(opts.onDataChange, inst, data);
                }
                return inst;
            }
        }
    });
});