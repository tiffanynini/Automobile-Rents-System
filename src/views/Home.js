import Navigation from '../components/navigation'
import {Context} from '../App'
import {useContext} from 'react'
import {Observer} from 'mobx-react'

function Home(){
    let data=useContext(Context);
    return (
        <div>
            <Navigation/>
        </div>
    )
}
export default Home