<?php
declare(strict_types=1);


$nome = "Mario";
$eta = 18;
$titolo = "Programmino";
$citta = "Roma";
$hobby = ["corsa", "musica", "videogiochi"];
$nomi = ["diego", "luca", "franz", "pippo"];


require_once __DIR__ . "/includes/header.php";
?>

<h1>Ciao <?= htmlspecialchars($nome) ?>!</h1>

<p>Età: <?= (int)$eta ?></p>

<?php if($eta >= 18): ?>
    <p>Sei maggiorenne.</p>
<?php else: ?>
    <p>Sei minorenne.</p>
<?php endif; ?>

<p>La città è <?= htmlspecialchars($citta) ?></p>

<h2>Hobby</h2>
<ul>
    <?php for($i = 0; $i < count($hobby); $i ++): ?>
        <li>Hobby <?= $i+1 ?> : <?= $hobby[$i] ?></li>
        <?php endfor; ?>
</ul>

<h2>Nomi</h2>
<ul>
    <?php foreach($nomi as $i => $nomePersona): ?>
        <li>Nome <?= $i+1 ?> : <?= htmlspecialchars($nomePersona) ?></li>
    <?php endforeach; ?>
</ul>

<?php
require_once __DIR__ . "/includes/footer.php";
?>