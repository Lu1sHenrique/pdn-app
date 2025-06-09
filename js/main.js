document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.grid-fotos')) {
        const gridFotos = document.querySelector('.grid-fotos');
        const fogosContainer = document.querySelector('.fogos-de-artificio');

        const fotos = [
            'img/img1.jpeg',
            'img/img13.jpeg',
            'img/img3.jpeg',
            'img/img8.jpeg',
            'img/img10.jpeg',
            'img/img6.jpeg',
            'img/img7.jpeg',
            'img/img9.jpeg',
            'img/img4.jpeg',
            'img/img11.jpeg',
            'img/img2.jpeg',
            'img/img12.jpeg',
        ];

        fotos.forEach(foto => {
            const img = new Image();
            img.src = foto;
            img.alt = 'Foto especial';
            img.onerror = function() {
                this.style.display = 'none';
            };
            img.loading = 'lazy'; 
            gridFotos.appendChild(img);
        });

        function criarFogosDeArtificio() {
            const cores = [
                '#ff0000', '#ff7700', '#ffdd00', '#33ff00',
                '#0099ff', '#7700ff', '#ff00ff', '#ffffff'
            ];

            const intervaloFogos = setInterval(() => {
                if (document.hidden) return;
                
                for (let i = 0; i < 5; i++) {
                    const fogo = document.createElement('div');
                    fogo.className = 'fogo';
                    
                    const posicaoX = Math.random() * 100;
                    fogo.style.left = `${posicaoX}%`;
                    fogo.style.bottom = '0';
                    
                    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
                    fogo.style.backgroundColor = corAleatoria;
                    fogo.style.boxShadow = `0 0 10px 5px ${corAleatoria}`;
                    
                    const duracao = 2 + Math.random() * 3;
                    fogo.style.animationDuration = `${duracao}s`;
                    
                    fogosContainer.appendChild(fogo);
                    
                    setTimeout(() => {
                        fogo.remove();
                    }, duracao * 1000);
                }
            }, 200);

            window.addEventListener('beforeunload', () => {
                clearInterval(intervaloFogos);
            });
        }

        criarFogosDeArtificio();
    }
});