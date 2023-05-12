    $(function () {

        let palavras  = ["SONHO", "LAR", "EMPREENDIMENTO"]
        let inicio    = 0
        let intervalo = 7000


        $('#texto').text(palavras[inicio++])

            setInterval(function() {
                
        }, intervalo);


        setInterval(function() {

              //$('#texto').fadeOut(function() {
                $('#texto').slideUp(function() {

                    if (inicio >= palavras.length) {
                     inicio = 0;
                    }

              //$(this).text(palavras[inicio++]).fadeIn();
                $(this).text(palavras[inicio++]).slideDown();

                });
        }, intervalo);

    });
