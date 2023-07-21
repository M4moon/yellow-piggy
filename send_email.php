<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $comments = $_POST["comments"];
  $to = "momokhan05@gmail.com";
  $subject = "Visitor Comments";
  $headers = "From: momokhan05@gmail.com";
  mail($to, $subject, $comments, $headers);
}
?>
