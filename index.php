<?php

use OpenSwoole\Http\Server;
use OpenSwoole\Http\Request;
use OpenSwoole\Http\Response;

$server = new OpenSwoole\HTTP\Server("php-server", 8083);

$server->on("Request", function(Request $request, Response $response)
{
    $response->header("Content-Type", "text/plain");
    $response->end("Hello World PHP\n");
});

$server->start();
