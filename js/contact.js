$(function () {
    var $contactform = $('#contact');
    $contactform.submit(function () {
        $.ajax({
            type: "POST",
            url: "process.php",
            data: $(this).serialize(),
            success: function (msg) {
                if (msg === 'SEND') {
                    $('#msg_all').html('<b>Formulaire bien envoyé</b>');
                    $("#contact :input").prop("disabled", 'true');
                    $("#reset").removeProp("disabled");
                    $("input[type=text], input[type=email], textarea").val("");
                } else {
                    $('#msg_all').html("<b>Erreur d'appel, le formulaire ne peut pas fonctionner</b>");
                    $("#contact :input").removeProp("disabled");
                }
            }
        });
        return false;
    });

    $("#reset").click(function () {
        $("#contact :input").removeProp("disabled");
        $('#msg_all').html('');
    });

    $("select:has(option[value=]:first-child)").on('change', function () {
        $(this).toggleClass("empty", $.inArray($(this).val(), ['', null]) >= 0);
    }).trigger('change');
});