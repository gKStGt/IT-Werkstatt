
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    // SMTP-Konfiguration
    $mail->isSMTP();
    $mail->Host       = 'smtp.alfahosting.de'; // Beispiel für Alfahosting
    $mail->SMTPAuth   = true;
    $mail->Username   = 'kontakt@deine-domain.de';
    $mail->Password   = 'DEIN_PASSWORT';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Absender & Empfänger
    $mail->setFrom('kontakt@deine-domain.de', 'IT Werkstatt');
    $mail->addAddress('zieladresse@deine-domain.de');

    // Inhalt aus Formular
    $name     = $_POST['name'] ?? '';
    $email    = $_POST['email'] ?? '';
    $message  = $_POST['nachricht'] ?? '';

    $mail->isHTML(true);
    $mail->Subject = 'Neue Anfrage über das Kontaktformular';
    $mail->Body    = "<b>Name:</b> $name<br><b>E-Mail:</b> $email<br><b>Nachricht:</b><br>$message";

    $mail->send();
    echo 'Nachricht wurde erfolgreich gesendet.';
} catch (Exception $e) {
    echo "Nachricht konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
}
?>
