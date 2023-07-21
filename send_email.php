<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $comments = $_POST["comments"];
  $to = "your.email@example.com";
  $subject = "Visitor Comments";
  $headers = "From: contact_form@example.com";
  mail($to, $subject, $comments, $headers);
}
?>
