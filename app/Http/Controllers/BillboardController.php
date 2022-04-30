<?php

namespace App\Http\Controllers;

use App\Models\Billboard;
use Illuminate\Http\Request;

class BillboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $billboard = Billboard::paginate(20);
        return \response($billboard);
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
     * @param  \App\Models\Billboard  $billboard
     * @return \Illuminate\Http\Response
     */
    public function show(Billboard $billboard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Billboard  $billboard
     * @return \Illuminate\Http\Response
     */
    public function edit(Billboard $billboard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Billboard  $billboard
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Billboard $billboard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Billboard  $billboard
     * @return \Illuminate\Http\Response
     */
    public function destroy(Billboard $billboard)
    {
        //
    }
}
