import arm from '../../../assets/icons/arm-3.svg'
import simple from '../../../assets/icons/simple.svg'
import magnet from '../../../assets/icons/magnet-2.svg'
import ball from '../../../assets/icons/ball.svg'

const style = {width: '70px', height: 'auto', textAlign: 'center'}
var sellingPoints = [
    
    {
        icon: <img src={arm} style={style} alt="not hard" />,
        title: 'Easy',
        description: 'Content designed to be easy and approachable to people of any background.',
    },
    
    {
        icon: <img src={magnet} style={style} alt="magnet" />,
        title: 'Engaging',
        description: 'Keeps you engaged in the content by providing bite-sized workloads daily.',
    },
    {
        icon: <img src={simple} style={style} alt="simple" />,
        title: 'Simple',
        description: 'This app is simple',
    },
    {
        icon: <img src={ball} style={style} alt="ball" />,
        title: 'Fun',
        description: 'And it\'s just plain fun...',
    },
]


export default sellingPoints