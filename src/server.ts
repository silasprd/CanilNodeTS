import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "./routes/index";

// Variáveis de ambiente config
dotenv.config();

const server = express();

// Configuração do engine (mustache)
server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

// Variáveis de ambiente
server.use(express.static(path.join(__dirname, "../public")));

// ROTAS
server.use(mainRoutes);

// Se nenhuma rota funcionar
server.use((req, res) => {
  res.render('pages/404')
});

server.use;
server.listen(process.env.PORT);
