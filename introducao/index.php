<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World</h1>


    
    <?php
        echo "Victor Castro <br>";
        echo "Victor Castro <br>";

        $palavra = "bolo ";

        echo $palavra;
        echo date("d/m/y");
        echo "Todos os direitos reservados @ <br>", date("Y");

        date_default_timezone_set("America/Sao_Paulo");
        echo date_default_timezone_get();
        echo date("G:i:s T");

        // phpinfo();
        
    ?>
</body>
</html>