/*
-Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.

-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

-Listar participantes e palestrantes por evento.

-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

*/

//entradas
let dataEvento = 16;
let idade = 18;
let participantes = 101;

//processamento

if(dataEvento >=15){//saida
    console.log('cadastro no evento permitido pela data');


    if(idade >= 18){//saida
        console.log('cadastro permitido');


        if(participantes <= 100){
               console.log(`quantidade de participantes ${participantes}, cadastro permitido`);

        }else{
               console.log('cadastro nao permitido, limite esgotado');
             }

    }else{//saida
             console.log('cadastro nao permitido pela idade');
}

}else{//saida
    console.log('cadastro no evento nao permitido')
}


