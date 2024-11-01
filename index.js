let nomeHeroi = "Arthicus";
let experiencia = 1001;
let level;

switch (true) {
    case experiencia <= 1000:
        level = "Ferro";
        break;
    case experiencia >= 1001 && experiencia <= 2000:
        level = "Bronze"
        break;
    case experiencia >= 2001 && experiencia <= 5000:
        level = "Prata";
        break;
    case experiencia >= 5001 && experiencia <= 7000:
        level = "Ouro";
        break;
    case experiencia >= 7001 && experiencia <= 8000:
        level = "Platina";
        break;
    case experiencia >= 8001 && experiencia <= 9000:
        level = "Ascendente";
        break;
    case experiencia >= 9001 && experiencia <= 10000:
        level = "Imortal";
        break;
    case experiencia >= 10001:
        level = "Radiante";
        break;
}

console.log(`O herói ${nomeHeroi} está no level ${level} de experiência com ${experiencia} pontos.`);
