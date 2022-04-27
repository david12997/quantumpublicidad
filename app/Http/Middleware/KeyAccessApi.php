<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class KeyAccessApi
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if( !isset($request->key) || $request->key !== '36963' || empty($request->key) ){

            echo json_encode(['response'=>'bad request, access denied']);
            die();
        }

        return $next($request);
    }
}
