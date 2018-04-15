define(function(){
    return {
        apply: function(){
            var args = Array.prototype.slice.call(arguments), func = args.shift(), context = args.shift();
            func = typeof func === "string" ? window[func] : func;
            if (typeof func === "function") {
                return func.apply(context, args);
            }
        }
    };
});
