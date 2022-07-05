import { Request, Response } from 'express';
import { Pet } from '../models/Pet';
import { createMenuObject } from '../helper/createMenuObject';

export const search = (req: Request, res:Response) => {
    //Variável para capturar o que foi digitado
    let query: string = req.query.q as string;

    //Redirecionar para pagina inicial se não houver nada na pesquisa
    if(!query) {
        res.redirect('/');
        return;
    }

    //Lista para pegar e exibir
    let list = Pet.getFromName(query);
    
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}
