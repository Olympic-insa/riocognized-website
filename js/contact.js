$(function () {

    $("#contact").submit(function (event) {
        var name = $("#name").val();
        var connu = $("#connu").val();
        var email = $("#email").val();
        var prenom = $("#prenom").val();
        var societe = $("#societe").val();
        var message = $("#message").val();
        var dataString = name + email + message;
        var msg_all = '<b>Merci de remplir tous les champs</b>';
        var msg_alert = 'Merci de remplir ce champs';
        if (dataString === '') {
            $('#msg_all').html(msg_all);
        } else if (name === '') {
            $('#msg_all').html(msg_all);
        } else if (email === '') {
            $('#msg_all').html(msg_all);
        } else if (message === '') {
            $('#msg_all').html(msg_all);
        } else {
            $('#msg_all').html('<b>Formulaire bien envoyé</b>');
            $("#contact :input").prop("disabled", 'true');
            $("#reset").removeProp("disabled");
            $.ajax({
                type: "POST",
                url: $(this).attr('action'),
                data: $(this).serialize(),
                success: function () {
                    $('#msg_all').html('<b>Formulaire bien envoyé</b>');
                },
                error: function () {
                    $('#msg_all').html("<b>Erreur d'appel, le formulaire ne peut pas fonctionner</b>");
                    $("#contact :input").removeProp("disabled");
                }
            });
            $("input[type=text], input[type=email], textarea").val("");
        }
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