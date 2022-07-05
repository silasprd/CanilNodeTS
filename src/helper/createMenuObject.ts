type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';


// Função para alterar o foco do header dependendo de qual página esteja.
// Recebe o paramêtro activeMenu e retorna um objeto com o valor do MenuOptions
export const createMenuObject = (activeMenu: MenuOptions) => {
     let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
     };

     if(activeMenu !== '') {
        returnObject[activeMenu] = true;
     }

     return returnObject;
}