let comparaComThis = function(param){
    console.log(this === param)
}

// sentido node
comparaComThis(global)

// sentido web
/* comparaComThis(window) */

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)