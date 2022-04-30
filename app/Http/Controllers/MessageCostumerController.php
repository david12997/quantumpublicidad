<?php

namespace App\Http\Controllers;

use App\Models\MessageCostumer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class MessageCostumerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $messages = MessageCostumer::paginate(20);
        return \response($messages);
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
        $validator = Validator::make($request->all(),[

            'name_costumer'=>['required'],
            'email_costumer'=>['required'],
            'message_costumer'=>['required']
        ]);

        if($validator->fails()){

            echo json_encode(["response"=>"something wrong check your data"]);

        }else{

            MessageCostumer::create($request->all());
            echo json_encode(["response"=>"insert success"]);
        }


    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MessageCostumer  $messageCostumer
     * @return \Illuminate\Http\Response
     */
    public function show(MessageCostumer $messageCostumer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MessageCostumer  $messageCostumer
     * @return \Illuminate\Http\Response
     */
    public function edit(MessageCostumer $messageCostumer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MessageCostumer  $messageCostumer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MessageCostumer $messageCostumer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MessageCostumer  $messageCostumer
     * @return \Illuminate\Http\Response
     */
    public function destroy(MessageCostumer $messageCostumer)
    {
        //
    }
}
