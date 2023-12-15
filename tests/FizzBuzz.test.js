/**
 * tareas: 
 * test que devuelve Fizz cuando es divisible por 3
 * test que devuelve Buzz cuando es divisible por 5
 * test que devuelve FizzBuzz cuando es divisible por 3 y por 5
 * test que devuelve el numero cuando no es divisible por 3 ni por 5
*/


// hacer imports de la librería
const { expect} = require("@jest/globals");
const FizzBuzz =require("../FizzBuzz")
/* Feature para
*/

    describe('Test que validan los múltiplos de 3 y 5', () => {
    test('Test devuelve Fizz cuando divisible por 3', () => {
       
        /**
         * GHERKING TEST
         * GIVEN/ ARRANGE: UN NÚMERO
         * WHEN / ACT: CUANDO ESTE SEA DIVISIBLE POR 3
         * THEN / ASSERT: DEVUELVE FIZZ COMO RESULTADO
         */

        //ARRANGE: PREPARA EL ESCENARIO (ENTRADAS Y SALIDAS)
        const numero_ingresado = 3;
        const respuesta_esperada = "Fizz";
        const fizz = new FizzBuzz(); //clases

        //ACT: EJECUTAR EL ESCENARIO

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); //métodos

        //ASSERT: COMPRUEBA EL ESCENARIO

        expect(respuesta_recibida).toBe(respuesta_esperada);


    })

        //otro test

        test('Test devuelve Buzz cuando divisible por 5', () => {
       
        /**
         * GHERKING TEST
         * GIVEN/ ARRANGE: UN NÚMERO
         * WHEN / ACT: CUANDO ESTE SEA DIVISIBLE POR 3
         * THEN / ASSERT: DEVUELVE FIZZ COMO RESULTADO
         */

        //ARRANGE: PREPARA EL ESCENARIO (ENTRADAS Y SALIDAS)
        const numero_ingresado = 5;
        const respuesta_esperada = "Buzz";
        const fizz = new FizzBuzz(); //clases

        //ACT: EJECUTAR EL ESCENARIO

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); //métodos

        //ASSERT: COMPRUEBA EL ESCENARIO

        expect(respuesta_recibida).toBe(respuesta_esperada);


        });
        
        //otro test

        test('Test devuelve FizzBuzz cuando divisible por 3 y por 5', () => {
       
        /**
         * GHERKING TEST
         * GIVEN/ ARRANGE: UN NÚMERO
         * WHEN / ACT: CUANDO ESTE SEA DIVISIBLE POR 3
         * THEN / ASSERT: DEVUELVE FIZZ COMO RESULTADO
         */

        //ARRANGE: PREPARA EL ESCENARIO (ENTRADAS Y SALIDAS)
        const numero_ingresado = 15;
        const respuesta_esperada = "FizzBuzz";
        const fizz = new FizzBuzz(); //clases

        //ACT: EJECUTAR EL ESCENARIO

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); //métodos

        //ASSERT: COMPRUEBA EL ESCENARIO

        expect(respuesta_recibida).toBe(respuesta_esperada);


    });

        //otro test

        test('Test devuelve el numero cuando no es divisible por 3 ni por 5', () => {
       
        /**
         * GHERKING TEST
         * GIVEN/ ARRANGE: UN NÚMERO
         * WHEN / ACT: CUANDO ESTE NO SEA DIVISIBLE POR 3 NI POR 5
         * THEN / ASSERT: DEVUELVE EL MISMO NUMERO COMO RESULTADO
         */

        //ARRANGE: PREPARA EL ESCENARIO (ENTRADAS Y SALIDAS)
        const numero_ingresado = 2;
        const respuesta_esperada = numero_ingresado.toString();
        const fizz = new FizzBuzz(); //clases

        //ACT: EJECUTAR EL ESCENARIO

        const respuesta_recibida = fizz.validar_primos_3_5(numero_ingresado); //métodos

        //ASSERT: COMPRUEBA EL ESCENARIO

        expect(respuesta_recibida).toBe(respuesta_esperada);


        })
        
});