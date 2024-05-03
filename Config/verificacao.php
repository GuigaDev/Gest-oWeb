<?php session_start() ?>
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    if (isset($_POST['login']) && isset($_POST['senha'])) {
        
        if (!empty($_POST['login']) && !empty($_POST['senha'])) {
           
            $login = $_POST['login'];
            $senha = $_POST['senha'];

            $login_valido = 'admin';
            $senha_valida = 'admin';

            if ($login === $login_valido && $senha === $senha_valida) {
                $_SESSION['login'] = true;
                header('Location: index.html');
                exit();
            } else {
                $erro = 'Credenciais inválidas. Tente novamente.';
            }
        } else {
            $erro = 'Por favor, preencha todos os campos.';
        }
    }
}
    if (!isset($_SESSION['login'])) {
        if (isset($_POST['acao'])) {
            echo 'Formulário enviado';
        }
        include('login.php');
    } else {
        include('home.php');
    }

?>

</body>
</html>