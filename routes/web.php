<?php

use Artesaos\SEOTools\Facades\OpenGraph;
use Illuminate\Support\Facades\Route;
use Artesaos\SEOTools\Facades\SEOMeta;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$keywords = '
    Buscador de vallas
    Vallas
    Alquiler Vallas Publicitarias
    Publicidad exterior
    Arriendo de vallas Publicitarias
    Impresión a gran escala
    Vallas
    Afiches
    Material P.O.P.
    Software a medida
    Paginas web corporativas
    wordPress
    Woocommerce
    Tiendas online
    ecommerce
    vallas
    Vallas
    Bucaramanga
    Santander
    girón
    giron
    barrancabermeja
    piedecuesta
    san gil
    floridablanca
    bucaramanga
    quantumpublicidad.com
    www.quamtumpublicidad.com
    quantum Quantum
    quantumpublicidad
    Quantumpublicidad
    Quantum Publicidad
    ventas@quantumpublicidad.com
    301 254 3817 - 301 254 3817
    Quantum publicidad
    publicidadquantum
    Carrera 56 #51-06
    Bucaramanga-Santander
    Publicidad Exterior a través de impresión a gran escala y  arriendo o alquiler de Vallas Publicitarias ubicadas en lugares estrategicos de Bucaramanga, Girón Floridablanca y Piedecuesta Santander, ¡ sin intermediarios !
';

SEOMeta::addKeyword($keywords);
SEOMeta::setCanonical('https://quantumpublicidad.com');
SEOMeta::setDescription('Publicidad Exterior a través de impresión a gran escala y  arriendo de Vallas Publicitarias ubicadas en lugares estrategicos de Bucaramanga, Girón Floridablanca y Piedecuesta Santander, ¡ sin intermediarios ! ');
OpenGraph::addImage('https://quantumpublicidad.com/images/logo-background.png');
OpenGraph::setDescription('Publicidad Exterior a través de impresión a gran escala y  arriendo de Vallas Publicitarias ubicadas en lugares estrategicos de Bucaramanga, Girón Floridablanca y Piedecuesta Santander, ¡ sin intermediarios ! ');
OpenGraph::setTitle('Buscador de vallas publicitarias para Santander Bucaramanga Floridablanca San gil Piedecuesta Giron Barrancabermeja ');


Route::view('/','home')->name('home');
Route::view('/vallas','billboard')->name('billboard');
Route::view('/servicios','services')->name('services');
Route::view('/casos','costumers')->name('costumers');
Route::view('/contacto','contact')->name('contact');
