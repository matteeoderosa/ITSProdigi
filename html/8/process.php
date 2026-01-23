<?php
// process.php
declare(strict_types=1);

// Accetta solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  header('Content-Type: text/plain; charset=utf-8');
  echo "Metodo non consentito";
  exit;
}

// Funzione per leggere e pulire input
function post_string(string $key): string {
  $val = $_POST[$key] ?? '';
  if (!is_string($val)) return '';
  $val = trim($val);
  $val = str_replace("\0", '', $val);
  return $val;
}

$nome     = post_string('nome');
$cognome  = post_string('cognome');
$username = post_string('username');
$password = post_string('password');

// Validazioni minime
$errors = [];

if (mb_strlen($nome) < 2) $errors[] = "Nome non valido (min 2 caratteri).";
if (mb_strlen($cognome) < 2) $errors[] = "Cognome non valido (min 2 caratteri).";
if (!preg_match('/^[A-Za-z0-9_.]{3,}$/', $username)) $errors[] = "Username non valido (min 3: lettere, numeri, _ o .).";
if (strlen($password) < 8) $errors[] = "Password non valida (min 8 caratteri).";

if ($errors) {
  http_response_code(400);
  header('Content-Type: text/html; charset=utf-8');
  echo "<h1>Errore</h1><ul>";
  foreach ($errors as $e) {
    echo "<li>" . htmlspecialchars($e, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "</li>";
  }
  echo "</ul><p><a href='index.html'>Torna indietro</a></p>";
  exit;
}

// NON salvare la password in chiaro: hash
$passwordHash = password_hash($password, PASSWORD_DEFAULT);

// --- DEMO: salva su file (facile da provare subito) ---
// In produzione usa un database.
$record = [
  'nome' => $nome,
  'cognome' => $cognome,
  'username' => $username,
  'password_hash' => $passwordHash,
  'created_at' => date('c'),
];

$file = __DIR__ . '/users.jsonl'; // una riga JSON per utente
file_put_contents($file, json_encode($record, JSON_UNESCAPED_UNICODE) . PHP_EOL, FILE_APPEND | LOCK_EX);

header('Content-Type: text/html; charset=utf-8');
echo "<h1>Registrazione ricevuta</h1>";
echo "<p>Dati salvati (demo) in <code>users.jsonl</code>.</p>";
echo "<ul>";
echo "<li>Nome: " . htmlspecialchars($nome, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "</li>";
echo "<li>Cognome: " . htmlspecialchars($cognome, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "</li>";
echo "<li>Username: " . htmlspecialchars($username, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') . "</li>";
echo "</ul>";
echo "<p><a href='index.html'>Torna al form</a></p>";
