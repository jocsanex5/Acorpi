(function(){

    //Varibles globales
        var acordeN = document.getElementById("acordeN"),
            acordem = document.getElementById("acordem"),
            acorde7 = document.getElementById("acorde7"),
            acordem7 = document.getElementById("acordem7"),
            acorde9 = document.getElementById("acorde9"),
            acordem9 = document.getElementById("acordem9"),
            acordesus = document.getElementById("acordesus");

    //Eventos
            //Mayores
        document.getElementById("do").addEventListener("click", function(){acordeN.innerHTML = "Do - Mi - Sol";});
            document.getElementById("dosos").addEventListener("click", function(){acordeN.innerHTML = "Do# - Fa - Sol#";});
        document.getElementById("re").addEventListener("click", function(){acordeN.innerHTML = "Re - Fa# - La";});
            document.getElementById("resos").addEventListener("click", function(){acordeN.innerHTML = "Re# - Sol - La#";});
        document.getElementById("mi").addEventListener("click", function(){acordeN.innerHTML = "Mi - Sol# - Si";});
        document.getElementById("fa").addEventListener("click", function(){acordeN.innerHTML = "Fa - La - Do";});
            document.getElementById("fasos").addEventListener("click", function(){acordeN.innerHTML = "Fa# - La# - Do#";});
        document.getElementById("sol").addEventListener("click", function(){acordeN.innerHTML = "Sol - Si - Re";});
            document.getElementById("solsos").addEventListener("click", function(){acordeN.innerHTML = "Sol# - Do - Re#";});
        document.getElementById("la").addEventListener("click", function(){acordeN.innerHTML = "La - Do# - Mi";});
            document.getElementById("lasos").addEventListener("click", function(){acordeN.innerHTML = "La# - Re - Fa";});
        document.getElementById("si").addEventListener("click", function(){acordeN.innerHTML = "Si - Re# - Fa#";});

            //Menores
        document.getElementById("dom").addEventListener("click", function(){acordem.innerHTML = "Do - Re# - Sol";});
            document.getElementById("dososm").addEventListener("click", function(){acordem.innerHTML = "Do# - Mi - Sol#";});
        document.getElementById("rem").addEventListener("click", function(){acordem.innerHTML = "Re - Fa - La";});
            document.getElementById("resosm").addEventListener("click", function(){acordem.innerHTML = "Re# - Fa# - La#";});
        document.getElementById("mim").addEventListener("click", function(){acordem.innerHTML = "Mi - Sol - Si";});
        document.getElementById("fam").addEventListener("click", function(){acordem.innerHTML = "Fa - Sol# - Do";});
            document.getElementById("fasosm").addEventListener("click", function(){acordem.innerHTML = "Fa# - La# - Do#";});
        document.getElementById("solm").addEventListener("click", function(){acordem.innerHTML = "Sol - la# - Re";});
            document.getElementById("solsosm").addEventListener("click", function(){acordem.innerHTML = "Sol# - Si - Re#";});
        document.getElementById("lam").addEventListener("click", function(){acordem.innerHTML = "La - Do - Mi";});
            document.getElementById("lasosm").addEventListener("click", function(){acordem.innerHTML = "La# - Do# - Fa";});
        document.getElementById("sim").addEventListener("click", function(){acordem.innerHTML = "Si - Re - Fa#";});

            //Septimos Mayores
        document.getElementById("do7").addEventListener("click", function(){acorde7.innerHTML = "Do - Mi - Sol - Si";});
            document.getElementById("dosos7").addEventListener("click", function(){acorde7.innerHTML = "Do# - Fa - Sol# - Do";});
        document.getElementById("re7").addEventListener("click", function(){acorde7.innerHTML = "Re - Fa# - La - Do#";});
            document.getElementById("resos7").addEventListener("click", function(){acorde7.innerHTML = "Re# - Sol - La# - Re#";});
        document.getElementById("mi7").addEventListener("click", function(){acorde7.innerHTML = "Mi - Sol# - Si - Re#";});
        document.getElementById("fa7").addEventListener("click", function(){acorde7.innerHTML = "Fa - La - Do - Mi";});
            document.getElementById("fasos7").addEventListener("click", function(){acorde7.innerHTML = "Fa# - La# - Do# - Fa";});
        document.getElementById("sol7").addEventListener("click", function(){acorde7.innerHTML = "Sol - Si - Re - Fa#";});
            document.getElementById("solsos7").addEventListener("click", function(){acorde7.innerHTML = "Sol# - Do - Re# - Sol";});
        document.getElementById("la7").addEventListener("click", function(){acorde7.innerHTML = "La - Do# - Mi - Sol#";});
            document.getElementById("lasos7").addEventListener("click", function(){acorde7.innerHTML = "La# - Re - Fa - La";});
        document.getElementById("si7").addEventListener("click", function(){acorde7.innerHTML = "Si - Re# - Fa# - la#";});

            //Septimos Menores
        document.getElementById("dom7").addEventListener("click", function(){acordem7.innerHTML = "Do - Re# - Sol - La#";});
            document.getElementById("dososm7").addEventListener("click", function(){acordem7.innerHTML = "Do# - Mi - Sol# - Si";});
        document.getElementById("rem7").addEventListener("click", function(){acordem7.innerHTML = "Re - Fa - La - Do";});
            document.getElementById("resosm7").addEventListener("click", function(){acordem7.innerHTML = "Re# - Fa# - La# - Do#";});
        document.getElementById("mim7").addEventListener("click", function(){acordem7.innerHTML = "Mi - Sol - Si - Re";});
        document.getElementById("fam7").addEventListener("click", function(){acordem7.innerHTML = "Fa - Sol# - Do - Re#";});
            document.getElementById("fasosm7").addEventListener("click", function(){acordem7.innerHTML = "Fa# - La# - Do# - Mi";});
        document.getElementById("solm7").addEventListener("click", function(){acordem7.innerHTML = "Sol - la# - Re - Fa";});
            document.getElementById("solsosm7").addEventListener("click", function(){acordem7.innerHTML = "Sol# - Si - Re# - Fa#";});
        document.getElementById("lam7").addEventListener("click", function(){acordem7.innerHTML = "La - Do - Mi - Sol";});
            document.getElementById("lasosm7").addEventListener("click", function(){acordem7.innerHTML = "La# - Do# - Fa - Sol#";});
        document.getElementById("sim7").addEventListener("click", function(){acordem7.innerHTML = "Si - Re - Fa# - La";});

            //Novenos Mayores
        document.getElementById("do9").addEventListener("click", function(){acorde9.innerHTML = "Do - Re - Mi - Sol";});
            document.getElementById("dosos9").addEventListener("click", function(){acorde9.innerHTML = "Do# - Re# - Fa - Sol#";});
        document.getElementById("re9").addEventListener("click", function(){acorde9.innerHTML = "Re - Mi - Fa# - La";});
            document.getElementById("resos9").addEventListener("click", function(){acorde9.innerHTML = "Re# - Fa - Sol - La#";});
        document.getElementById("mi9").addEventListener("click", function(){acorde9.innerHTML = "Mi - Fa# - Sol# - Si";});
        document.getElementById("fa9").addEventListener("click", function(){acorde9.innerHTML = "Fa - Sol - La - Do";});
            document.getElementById("fasos9").addEventListener("click", function(){acorde9.innerHTML = "Fa# - Sol# - La# - Do#";});
        document.getElementById("sol9").addEventListener("click", function(){acorde9.innerHTML = "Sol - La - Si - Re";});
            document.getElementById("solsos9").addEventListener("click", function(){acorde9.innerHTML = "Sol# - La# - Do - Re#";});
        document.getElementById("la9").addEventListener("click", function(){acorde9.innerHTML = "La - Si - Do# - Mi";});
            document.getElementById("lasos9").addEventListener("click", function(){acorde9.innerHTML = "La# - Do - Re - Fa";});
        document.getElementById("si9").addEventListener("click", function(){acorde9.innerHTML = "Si - Do# - Re# - Fa#";});

            //Novenos Menores
        document.getElementById("dom9").addEventListener("click", function(){acordem9.innerHTML = "Do - Re - Re# - Sol";});
            document.getElementById("dososm9").addEventListener("click", function(){acordem9.innerHTML = "Do# - Re# -Mi - Sol#";});
        document.getElementById("rem9").addEventListener("click", function(){acordem9.innerHTML = "Re - Mi - Fa - La";});
            document.getElementById("resosm9").addEventListener("click", function(){acordem9.innerHTML = "Re# - Fa - Fa# - La#";});
        document.getElementById("mim9").addEventListener("click", function(){acordem9.innerHTML = "Mi - Fa# - Sol - Si";});
        document.getElementById("fam9").addEventListener("click", function(){acordem9.innerHTML = "Fa - Sol - Sol# - Do";});
            document.getElementById("fasosm9").addEventListener("click", function(){acordem9.innerHTML = "Fa# - Sol# - La# - Do#";});
        document.getElementById("solm9").addEventListener("click", function(){acordem9.innerHTML = "Sol - La - la# - Re";});
            document.getElementById("solsosm9").addEventListener("click", function(){acordem9.innerHTML = "Sol# - La# - Si - Re#";});
        document.getElementById("lam9").addEventListener("click", function(){acordem9.innerHTML = "La - Si - Do - Mi";});
            document.getElementById("lasosm9").addEventListener("click", function(){acordem9.innerHTML = "La# - Do - Do# - Fa";});
        document.getElementById("sim9").addEventListener("click", function(){acordem9.innerHTML = "Si - Do# -Re - Fa#";});

            //Suspendidos
        document.getElementById("dosus").addEventListener("click", function(){acordesus.innerHTML = "Do - Fa - Sol";});
            document.getElementById("dosossus").addEventListener("click", function(){acordesus.innerHTML = "Do# - Fa# - Sol#";});
        document.getElementById("resus").addEventListener("click", function(){acordesus.innerHTML = "Re - Sol - La";});
            document.getElementById("resossus").addEventListener("click", function(){acordesus.innerHTML = "Re# - Sol# - La#";});
        document.getElementById("misus").addEventListener("click", function(){acordesus.innerHTML = "Mi - La - Si";});
        document.getElementById("fasus").addEventListener("click", function(){acordesus.innerHTML = "Fa - La# - Do";});
            document.getElementById("fasossus").addEventListener("click", function(){acordesus.innerHTML = "Fa# - Si - Do#";});
        document.getElementById("solsus").addEventListener("click", function(){acordesus.innerHTML = "Sol - Do - Re";});
            document.getElementById("solsossus").addEventListener("click", function(){acordesus.innerHTML = "Sol# - Do# - Re#";});
        document.getElementById("lasus").addEventListener("click", function(){acordesus.innerHTML = "La - Re - Mi";});
            document.getElementById("lasossus").addEventListener("click", function(){acordesus.innerHTML = "La# - Re# - Fa";});
        document.getElementById("sisus").addEventListener("click", function(){acordesus.innerHTML = "Si - Mi - Fa#";});
}())