import express from 'express';
import process from 'process';
import path from 'path';
import session from 'express-session';
import autenticar from './seguranca/autenticar.js';

const host = '0.0.0.0'; //todas as placas de rede
const port = 3000; //porta se refere a um programa no host
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret:'m1projetoadschave',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000 * 15
    }
}));

app.post('/login', (req, res)=>{
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    if (usuario && senha && usuario === 'lucastgfp' && senha === '123'){
        req.session.usuarioLogado = true;
        res.redirect('/inicio.html');
    }
    else{
        res.redirect('/index.html');
    }
})
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(autenticar, express.static(path.join(process.cwd(), 'private')));

app.listen(port, host, ()=>{
    console.log(`Servidor em execução - https://${host}:${port}`);
})