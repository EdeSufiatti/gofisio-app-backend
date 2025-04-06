export type Service = {
  id?: string;                // UUID, opcional se gerado pelo banco
  professional_id: string;    // UUID do profissional
  name: string;               // Nome do serviço
  price: number;              // Preço (numeric(10,2))
  duration: number;           // Duração (int4)
  description?: string;       // Descrição opcional (text)
  image?: string;             // URL ou caminho da imagem (text)
  periodo: number;           // Período (integer) - opcional
  hora_inicio: string;       // Hora de início (time) - opcional
  hora_fim: string;          // Hora de fim (time) - opcional
};
