<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mensaje cliente</title>
</head>
<body>

    <p><b>Recibiste un mensaje de: </b> {{ $msg['name_costumer'] }}</p>
    <p><b>Dirección de correo del cliente: </b> {{$msg['email_costumer'] }}</p>
    <p><b>Mensaje:</b></p>
    <p>{{$msg['message_costumer']}}</p>

</body>
</html>
