export default function autenticar(req, res, next){
    if (req.session.usuarioLogado){
        next();
    }
    else{
        res.redirect('/index.html')
    }
}