import './advantages.scss';
import '../blocks/animations.scss';
import cup from '../../public/images/cup.png';
import heart from '../../public/images/heart.png';
import shoe from '../../public/images/shoe.png';

const Advantages = () => {
    return (
        <section className='advantages'>
            <div className="container">
                <h2 className="title">
                    НАШІ ПЕРЕВАГИ
                </h2>
                <div className="advantages__wrapper">
                    <div className="advantages__item">
                        <img src={cup} alt="cup" className="advantages__icon" />
                        <div className="advantages__subtitle">Ділимося досвідом</div>
                        <div className="advantages__descr">Наші співробітники завжди готові поділитися своїм досвідом, оскільки самі бігають напівмарафони, перепливли Босфор, готуються до змагань з тріатлону!</div>
                    </div>
                    <div className="advantages__item">
                        <img src={heart} alt="heart" className="advantages__icon advantages__icon_animated" />
                        <div className="advantages__subtitle">Дбаємо про здоров'я</div>
                        <div className="advantages__descr">Ми працюємо для того, щоб Ваші заняття спортом йшли на користь Вашому здоров'ю та були на радість Вам та Вашим близьким!</div>
                    </div>
                    <div className="advantages__item">
                        <img src={shoe} alt="shoe" className="advantages__icon" />
                        <div className="advantages__subtitle">Вчимо бігати</div>
                        <div className="advantages__descr">Допомагаємо з навчанням правильній техніці бігу! Дружимо з найбільшою школою бігу в Україні – </div>
                        <a href="#">I LOVE RUNNING.</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;