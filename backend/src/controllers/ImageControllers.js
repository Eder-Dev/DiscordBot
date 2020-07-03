const express = require('express');
const connection = require('../database/connection');

module.exports = {
    async create(req,res){
        const {nomePopu, nomeCien, url} = req.query;
		
		const data = new Date().toLocaleDateString().split('-');
		var dia = ""
		var mes = "";
		parseInt(data[1])<10?dia = "0"+data[1]:dia = data[1]
		parseInt(data[2])<10?mes = "0"+data[2]:mes = data[2]
		var dataFinal = dia + '/' + mes + '/' + data[0];
        await connection('image').insert({
            nomePopu,
            nomeCien,
            url,
			data:dataFinal
        });

        return res.send("Cadastrado com sucesso")
    },
    async index(req,res){        
        const db = await connection('image').select('*')
        return res.json(db)
    }
}