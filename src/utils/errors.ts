interface ErrorMessages {
  email: {
    email: string;
    required: string;
    max: string;
    invalid: string;
  },
  password: {
    required: string;
    max: string;
    matches: string;
    invalid: string;
  },
  message: {
    required: string;
    max: string;
  },
  name: {
    required: string;
    max: string;
  },
  category: {
    required: string;
    max: string;
  },
  price: {
    required: string;
    max: string;
  },
  description: {
    required: string;
    max: string;
  },
  image: {
    required: string;
  },
}

export const errorMessages: ErrorMessages = {
  email: {
    "email": "Digite um email válido.",
    "required": "O campo email não pode estar vazio.",
    "max": "O email deve possuir no máximo 50 caracteres.",
    "invalid": "Usuário não cadastrado!"
  },
  password: {
    "required": "O campo senha não pode estar vazio.",
    "max": "Sua senha deve possuir no máximo 15 caracteres",
    "matches": "A senha deve conter ao menos um número, uma letra maiúscula, uma minúscula, um dos caracteres especiais ($ * & @ #) e no mínimo 6 caracteres.",
    "invalid": "Senha digitada não corresponde a senha do usuário!"
  },
  message: {
    "required": "O campo mensagem não pode estar vazio.",
    "max": "O mensagem deve possuir no máximo 150 caracteres."
  },
  name: {
    "required": "O nome do produto não pode estar vazio.",
    "max": "O nome do produto deve possuir no máximo 20 caracteres."
  },
  category: {
    "required": "A categoria do produto não pode estar vazia.",
    "max": "A categoria do produto deve possuir no máximo 20 caracteres."
  },
  price: {
    "required": "O campo preço não pode estar vazio, possuir letras e o separador deve ser o ponto.",
    "max": "O preço máximo permitido é 9999999999."
  },
  description: {
    "required": "O campo descrição não pode estar vazio.",
    "max": "A descrição deve possuir no máximo 150 caracteres."
  },
  image: {
    "required": "O campo imagem não pode estar vazio."
  }
}
