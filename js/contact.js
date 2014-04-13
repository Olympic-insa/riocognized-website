$(function () {
    var $contactform = $('#contact');
    $contactform.submit(function () {
        //e.preventDefault();
        var daReferrer = document.referrer;
        var name = $("#name").val();
        var connu = $("#connu").val();
        if (connu === null) connu = "";
        var email_c = $("#email").val();
        var prenom = $("#prenom").val();
        var societe = $("#societe").val();
        var message = $("#message").val();
        message = message.replace(new RegExp('\r?\n','g'), "%0A");
        var email = "alexis24@free.fr";
        var subject = "[Lynxlabs]";
        var body_message = "Nom : " + name + " " + prenom + "%0ASociete : " + societe + "%0AEmail : " + email_c + "%0AConnu par : " + connu + "%0A%0A" + message;

        var mailto_link = 'mailto:'+email+'?fsubject='+subject+'&body='+body_message;
        win = window.open(mailto_link,'emailWindow');
        if (win && win.open &&!win.closed) win.close();
   /* PHP mail function
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
    */
    });
    
       
    $("#reset").click(function () {
        $("#contact :input").removeProp("disabled");
        $('#msg_all').html('');
    });

    $("select:has(option[value=]:first-child)").on('change', function () {
        $(this).toggleClass("empty", $.inArray($(this).val(), ['', null]) >= 0);
    }).trigger('change');
});