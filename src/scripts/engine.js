const teclasPiano = document.querySelectorAll(".teclas-piano .tecla");

const controlaVolume = document.querySelector(".controle-volume input");

const visualizaTecla = document.querySelector(".visualiza-teclas input");

const mostrarOuNaoTeclas = () => {
    teclasPiano.forEach(key => key.classList.toggle("esconder"));
}

let teclasClicadas = [];

let som = new Audio("./src/sons/a.wav");

const controleVolume = (e) => {
    som.volume = e.target.value;
}

const tocarSom = (tecla) => {
    som.src = `src/sons/${tecla}.wav`;
    som.play();

    const teclaClicada = document.
        querySelector(`[data-tecla="${tecla}"]`);
    teclaClicada.classList.add("active");
    setTimeout(() => {
        teclaClicada.classList.remove("active");
    }, 150);
};

teclasPiano.forEach((tecla) => {
    console.log(tecla.dataset.tecla);
    tecla.addEventListener("click", () => tocarSom(tecla.dataset.tecla));
    teclasClicadas.push(tecla.dataset.tecla);
});

document.addEventListener("keydown", (e) => {
    if (teclasClicadas.includes(e.key)) {
        tocarSom(e.key);
    };
});

controlaVolume.addEventListener("input", controleVolume);

visualizaTecla.addEventListener("click", mostrarOuNaoTeclas);