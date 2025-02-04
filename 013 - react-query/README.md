# React-Query

this repo is an example how to use react-query

---

<h3> Query, Mutations </h3>

- Query -> GET <br>
- Mutations -> POST, PUT, PATCH, DELETE

---

<h3> isLoading, isPending, isFetching  (Query)</h3>

- isLoading (bool) = true somente na primeira requisição da queryFn (isPending && isFetching)
- isPending (bool) = true quando não houver nenhum valor no cache
- isFetching (bool) = true sempre que a queryFn estiver executando (seja na primeira exec ou nas subsequentes)

<h3> isPending (Mutation)</h3>

- isPending (bool) = true quando está realizando a requisição

---

<h3> GCTime </h3>

- GcTime -> Garbage Collector Time
  - Tempo que uma query ficará inativa até que seja removida do cache
