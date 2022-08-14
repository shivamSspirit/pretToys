import { Circles } from 'react-loader-spinner'
import './loader.css'
const Loader = () => {
    return (
        <div className='main-loader'>
            <div className='loader-container'>
                <Circles
                    height="100"
                    width="80"
                    radius="12"
                    color='#fff'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </div>
    )
}

export default Loader
