import './feed.scss';
import photo1 from '../../public/images/photo-1.png';
import photo2 from '../../public/images/photo-2.png';
import photo3 from '../../public/images/photo-3.png';
import 'animate.css';

const Feed = () => {
    return (
        <section className='feed'>
            <div className="container">
                <h2 className="title">Відгуки клієнтів</h2>
                <div className="feed__item animate__animated animate__fadeInUp">
                    <img src={photo1} alt="1" className="feed__img" />
                    <div className="feed__text">
                        <div className="feed__subtitle">Ірина Іванченко</div>
                        <div className="feed__count">2 напівмарафони</div>
                        <div className="feed__descr">Не знала, що собі купити – звернулася до хлопців із RunSmart – підібрали пульсометр, який підійшов саме під мої цілі та фінансові можливості. Через деякий час вирішила оновити гаджет – не роздумуючи звернулася туди ж.
                            <br></br>
                            <br></br>
                            Нові цілі – новий гаджет!
                            <br></br>
                            <br></br>
                            Дякую, RunSmart!</div>
                    </div>
                </div>
                <div className="feed__item animate__animated animate__fadeInUp">
                    <img src={photo2} alt="2" className="feed__img" />
                    <div className="feed__text">
                        <div className="feed__subtitle">Іван Сьомочкін</div>
                        <div className="feed__count">1 напівмарафони</div>
                        <div className="feed__descr">Крута штука-пульсометр. Зазвичай без них бігав. Виявляється, тільки гірше собі робив. Купив пульсометр, ще подарунок отримав тренування. Зі мною разом провели перше тренування, навчили користуватися новим гаджетом. Також пояснили основи анатомії, склали план тренувань на місяць уперед.
                            <br></br>
                            <br></br>
                            З ними підготувався до свого першого півмарафону! Дякую!!!</div>
                    </div>
                </div>
                <div className="feed__item animate__animated animate__fadeInUp">
                    <img src={photo3} alt="3" className="feed__img" />
                    <div className="feed__text">
                        <div className="feed__subtitle">Юлія Дашкіна</div>
                        <div className="feed__count">2 напівмарафони</div>
                        <div className="feed__descr">Довго було почати бігати, т.к. раніше кілька разів починала, але ставало важко і я кидала. Від друзів почула про RunSmart і про біг із контролем пульсу і вирішила спробувати.
                            <br></br>
                            <br></br>
                            Подзвонила, хлопці поцікавилися моїми цілями та підібрали дуже цікавий варіант зі знижкою! Тепер бігаю і насолоджуюся бігом! Пробігла вже 2 півмарафони і кілька коротших забігів і не має наміру зупинятися!
                            <br></br>
                            <br></br>
                            Дякую!!!</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feed;