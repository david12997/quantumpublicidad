<?php

namespace App\Http\Controllers;

use App\Models\Storie;
use Illuminate\Http\Request;

class StorieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $stories = Storie::paginate(20);
        return \response($stories);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Storie  $storie
     * @return \Illuminate\Http\Response
     */
    public function show(Storie $storie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Storie  $storie
     * @return \Illuminate\Http\Response
     */
    public function edit(Storie $storie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Storie  $storie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Storie $storie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Storie  $storie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Storie $storie)
    {
        //
    }
}
