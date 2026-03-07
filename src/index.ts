    import './styles.css';
    import { Game } from './game';

    const game = new Game();

    const button1 = document.getElementById('b1') as HTMLButtonElement;
    const button2 = document.getElementById('b2') as HTMLButtonElement;
    const button3 = document.getElementById('b3') as HTMLButtonElement;

    button1.addEventListener('click', () => {
        game.acceptInput(0);
    })

    button2.addEventListener('click', () => {
        game.acceptInput(1);
    })

    button3.addEventListener('click', () => {
        game.acceptInput(2);
    })