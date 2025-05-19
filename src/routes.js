import { Router } from "express";

const routes = Router();

//rota de teste, hello word
routes.get("/", (req, res) => {
    return res.send('rota de teste')
})

//rota que retorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req, res) => {
    return res.json({
        items: [
            {
                id: "01",
                nome: "Igor",
                cargo: "Estudante",
                idade: 22,
                custoPorHora: 0,
                temLicenca: false
            },
            {
                id: "02",
                nome: "Vini",
                cargo: "Estudante",
                idade: 21,
                custoPorHora: 14.20,
                temLicenca: true
            },
            {
                id: "03",
                nome: "Fabio",
                cargo: "Fumante",
                idade: 19,
                custoPorHora: 20.15,
                temLicenca: false
            },
        ]
    })
})

routes.get("/imagem" , (req, res) => {
    return res.json({
        items: [
            {
                id: "01",
                nome: "emoji foda",
                image: "https://br.pinterest.com/pin/675610381620108680/"
            },
            {
                id: "02",
                nome: "amo desenvolvimento",
                image: "https://us.123rf.com/450wm/yayayoy/yayayoy1710/yayayoy171000002/87706070-emoticon-deprimido-fazendo-um-gesto-de-arma-de-dedo-suicida.jpg?ver=6"
            },
            {
                id: "03",
                nome: "nerd",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV25eLqrxyW3ZGigU79Zpcj3J2cb3SWhbyg&s"
            },
            
        ]
    })
})

export default routes;