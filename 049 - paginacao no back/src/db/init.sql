DROP DATABASE IF EXISTS live049;
CREATE DATABASE live049;

-- conectar ao banco PG
\c live049

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE posts(
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255),
  content TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seeds
DO $$
DECLARE
  i INTEGER;
BEGIN
  FOR i IN 1..1000000 LOOP
    INSERT INTO posts(title, content)
    VALUES ('Post ' || i, 'Conteudo do post ' || i);
  END LOOP;
END
$$;
