docker compose up -d
docker exec -it live023 bash
psql -U root -d pg
psql -U root -f "script"

## PSQL

- \c
  - Conecta a um banco de dados
- \dt
  - Listar as tabelas

## dicas

- Sempre que possível evitar utilizar o \* no select do banco de dados para evitar utilização de recursos desnecessários
