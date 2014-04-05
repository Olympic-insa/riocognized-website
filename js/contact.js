$(function(){
        $("#contact").submit(function(event){
            var name        = $("#name").val();
            var email      = $("#email").val();
            var message    = $("#message").val();
            var dataString = name + email + message;
            var msg_all    = 'Merci de remplir tous les champs';
            var msg_alert  = 'Merci de remplir ce champs';
            if(dataString  == '')
            {
                $('#msg_all').html(msg_all);
            }
            else if(name == '')
            {
                $('#msg_all').html(msg_alert);
            }

            else if(email == '')
            {
                $('#msg_all').html(msg_alert);
            }
            else if(message == '')
            {
                $('#msg_all').html(msg_alert);
            }
            else
            {
                $.ajax({
                    type : "POST",
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    success : function(){
                       $('#msg_all').html('<b>Formulaire bien envoyé</b>');
                    },
                    error: function(){
                        $('#msg_all').html("<b>Erreur d'appel, le formulaire ne peut pas fonctionner</b>");
                    }
                });
            }
            return false;
        });
    });