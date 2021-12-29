var funcs = [];

for(var i=0; i<10; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

// Em todas as situações, será impresso o valor 10
funcs[2]();
funcs[8]();