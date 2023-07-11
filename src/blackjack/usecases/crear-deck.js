import _ from 'underscore';


let deck = [];
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} return new deck
 */
export const crearDeck = (tiposDeCartas = [], tiposEspeciales = []) => {
    
    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('TiposDeCartas es obligatorio como arreglo de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('TiposEspeciales es obligatorio como arreglo de string');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
    
    return deck;
}