<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
 
    // CONDITIONS NOM
    if ( (isset($_POST['name'])) && (strlen(trim($_POST['name'])) > 0) ):
        $nom = stripslashes(strip_tags($_POST['name']));
    else:
        echo "Merci d'écrire un nom <br />";
        $nom = '';
    endif;
 
  
    // CONDITIONS EMAIL
    if ( (isset($_POST['email'])) && (strlen(trim($_POST['email'])) > 0) && (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) ):
        $email = stripslashes(strip_tags($_POST['email']));
    elseif (empty($_POST['email'])):
        echo "Merci d'écrire une adresse email <br />";
        $email = '';
    else:
        echo 'Email invalide :(<br />';
        $email = '';
    endif;
  
    // CONDITIONS PRENOM
    if ( (isset($_POST['prenom'])) && (strlen(trim($_POST['prenom'])) > 0) ):
        $prenom = stripslashes(strip_tags($_POST['prenom']));
    else:
        echo "Merci d'écrire un message<br />";
        $prenom = '';
    endif;
    // SOCIETE
    if ( (isset($_POST['societe'])) && (strlen(trim($_POST['societe'])) > 0) ):
        $societe = stripslashes(strip_tags($_POST['societe']));
    else:
        $societe = '';
    endif;

    if ( (isset($_POST['connu'])) && (strlen(trim($_POST['connu'])) > 0) ):
        $connu = stripslashes(strip_tags($_POST['connu']));
    else:
        $connu = '';
    endif;

    if ( (isset($_POST['message'])) && (strlen(trim($_POST['message'])) > 0) ):
        $message = stripslashes(strip_tags($_POST['message']));
    else:
        $message = '';
    endif;

    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
 
 
    // PREPARATION DES DONNEES
    $ip           = $_SERVER['REMOTE_ADDR'];
    $hostname     = gethostbyaddr($_SERVER['REMOTE_ADDR']);
    $destinataire = "alexis24@free.fr";
    $objet        = "[LynxLabs]";
    $contenu      = "Nom de l'expéditeur : " . $nom . "\r\n";
    $contenu     .= "Prénom de l'expéditeur : " . $prenom . "\r\n";
    $contenu     .= "Société de l'expéditeur : " . $societe . "\r\n";
    $contenu     .= "Comment nous a t-il connu: " . $connu . "\r\n";
    $contenu     .= $message."\r\n\n";
    $contenu     .= "Adresse IP de l'expéditeur : " . $ip . "\r\n";
    $contenu     .= "DLSAM : " . $hostname. "\r\n";
    $contenu     .= "Mail : " . $email;
  
    $headers      = "From: ".$nom." <".$email.">\r\nReply-To: ".$email."";
     
 
    // SI LES CHAMPS SONT MAL REMPLIS
    if ( (empty($nom)) && (empty($email)) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (empty($message)) ):
        echo 'echec :( <br /><a href="contact.html">Retour au formulaire</a>';
    // ENCAPSULATION DES DONNEES 
    else:
        mail($destinataire,$objet,utf8_decode($contenu),$headers);
        echo 'Formulaire envoyé';
    endif;
 
    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
?>