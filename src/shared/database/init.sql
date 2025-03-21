-- Criação do tipo ENUM para status do agendamento
CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'cancelled');

-- Tabela users
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name varchar(255),
  phone varchar(20),
  email varchar(255)
);

-- Tabela professionals
CREATE TABLE professionals (
    user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    bio TEXT,
    address TEXT,
    image TEXT
);

-- Tabela services
CREATE TABLE services (
    id UUID PRIMARY KEY,
    professional_id UUID REFERENCES professionals(user_id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    duration INT,
    description TEXT,
    image TEXT,
    periodo INT,
    hora_inicio TIME,
    hora_fim TIME
);

-- Tabela appointments
CREATE TABLE appointments (
    id UUID PRIMARY KEY,
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    professional_id UUID REFERENCES professionals(user_id) ON DELETE CASCADE,
    client_name VARCHAR(255),
    client_email VARCHAR(255) NOT NULL,
    client_phone VARCHAR(20),
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    status appointment_status DEFAULT 'pending'
);
