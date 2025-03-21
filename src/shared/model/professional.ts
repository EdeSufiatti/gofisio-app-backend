export type Professional = {
  user_id: string;    // UUID que referencia o usuário (chave primária e estrangeira)
  bio?: string;       // Biografia do profissional (text) - opcional
  address?: string;   // Endereço (text) - opcional
  image?: string;     // URL ou caminho da imagem (text) - opcional
};
