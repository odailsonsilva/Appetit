 import CSimples from '../assets/imgs/products/c_simples.svg'
 import CSCompleto from '../assets/imgs/products/c-completo.svg'
 import PSimples from '../assets/imgs/products/p-caseiro.svg'
 import PCompleto from '../assets/imgs/products/p-caseiro-completo.svg'
 import Misto from '../assets/imgs/products/misto-quente-receita-1.jpeg'
 import LinguaP from '../assets/imgs/products/lingua-p.jpg'
 import LinguaG from '../assets/imgs/products/lingua-g.jpg'
 import Pastel from '../assets/imgs/products/pastel.jpg'
 import Esfirra from '../assets/imgs/products/esfirra.jpg'
 import Enrolado from '../assets/imgs/products/enrolados.jpeg'
 import Sucos from '../assets/imgs/products/sucos.jpg'
 import Vitaminas from '../assets/imgs/products/vitaminas.jpg'
 import Refrigerantes from '../assets/imgs/products/refrigerantes.jpeg'
 import Agua from '../assets/imgs/products/agua.jpg'
 import AguaGas from '../assets/imgs/products/aguagas.jpg'
 import Nescau from '../assets/imgs/products/nescau.jpeg'

 const categories = [
    {
        titleUl: 'Cuscuz',
        idUl: 1,
        products: [
            {id: 1, title: 'Cuscuz simples', price: 2.25, image: CSimples},
            {id: 2, title: 'Cuscuz completo', price: 3.25, image: CSCompleto, x: true}
        ]
    },
    {
        titleUl: 'Pães',
        idUl: 2,
        products: [
            {id: 3, title: 'Pão caseiro', price: 2.25, image: PSimples},
            {id: 4, title: 'Pão caseiro completo', price: 2.25, image: PCompleto},
            {id: 5, title: 'Misto quente', price: 3.00, image: Misto},
            {id: 6, title: 'Lingua de sogra (pequena)', price: 2.00, image: LinguaP},
            {id: 7, title: 'Lingua de sogra (grande)', price: 3.00, image: LinguaG, x: true}
        ]
    },
    {
        titleUl: 'Salgados',
        idUl: 3,
        products: [
            {id: 8, title: 'Pastelzinho de carne', price: 2.00, image: Pastel},
            {id: 9, title: 'Esfirra de frango', price: 2.00, image: Esfirra},
            {id: 10, title: 'Enrolado de presunto', price: 2.00, image: Enrolado, x: true}      
        ]
    },
    {
        titleUl: 'Bebidas',
        idUl: 4,
        products: [
            {id: 11, title: 'Sucos', price: 3.25, image: Sucos},
            {id: 12, title: 'Vitaminas', price: 3.50, image: Vitaminas},
            {id: 13, title: 'Refrigerantes', price: 2.50, image: Refrigerantes},
            {id: 14, title: 'Água mineral (sem gás)', price: 3.00, image: Agua},
            {id: 15, title: 'Água mineral (com gás)', price: 3.50, image: AguaGas},
            {id: 16, title: 'Nescau', price: 2.50, image: Nescau, x: true}
        ]
    }
    
 ]

export default categories