export type Appointment = {
  id?: string;               // UUID - opcional se gerado pelo banco
  service_id: string;        // UUID do serviço
  professional_id: string;   // UUID do profissional
  client_name: string;       // Nome do cliente
  client_email: string;      // Email do cliente
  client_phone: string;      // Telefone do cliente
  date: Date;                // Data do agendamento
  start_time: string;        // Hora de início (time)
  status: 'PENDING' | 'CONFIRMED' | 'CANCELED'; // Status (baseado no enum appointment_status)
};
