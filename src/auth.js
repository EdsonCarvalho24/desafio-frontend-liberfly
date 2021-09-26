import md5 from 'js-md5' 

// Chave privada e chave publica obtida na api da marvel 
// Só com esses dados será possível fazer as requisições na api
export const secret_key = "912e865f4106c8e2bd8916c70237cf7f2016f2dd";
export const public_key = "a22a5df1db72d97db8549515604d93a6";

export const ts = Number(new Date()); // ts corresponde o valor da timestamp é o resultado da conversão em número da data 
export const hash = md5.create(); // Criando a hash com base no algoritmo md5
hash.update(ts + secret_key + public_key) //Para o valor da hash é dada deste modo onde será sempre actualizada
