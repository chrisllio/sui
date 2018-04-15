define(['jquery','Module', 'utils/Values', 'lib/textchange'], function($, BaseModule, Values){
    return BaseModule.extend({
        defaults: function(){
            return $.extend({}, this._super(), {
                maxLength: 0,
                onChange: function(v){
                    if(this.options.maxLength > 0 ) {
                        var remain = this.options.maxLength - Values.textLength(v);
                        if(remain >= 0) {
                            var remainc = Math.floor(remain/2);
                            console.log('还可录入'+remain+'个字符'+((remain == 1 || remainc>0)?'(最多'+Math.floor(remain/2)+'个汉字)':'')+'。');
                        } else {
                            console.log('已超出' + (0-remain) + '个字符，请删减录入的内容（1个汉字算两个字符）！');
                        }
                    }
                }
            });
        },
        init: function(element, options){
            var inst = this;
            inst._super(element, options);
            inst.$el.bind('textchange', function(){
                inst.value($(this).val());
            });
        },
        value: function(){
            var inst = this;
            if(arguments.length === 0){
                return inst._super();
            } else {
                var args = Array.prototype.slice.call(arguments);
                args[0] = inst._parse(args[0]);
                var result = inst._super.apply(inst, args), text = inst.text();
                if(inst.$el.val() !== text) inst.$el.val(text);
                return result;
            }
        },
        _parse: function(value){
            if(value === undefined || value === null) {
                return value;
            } else if(value === '') {
                return null;
            } else {
                return String(value);
            }
        },
        text: function(){
            var value = this._value;
            return value === undefined || value === null? '': value;
        }
    });
});