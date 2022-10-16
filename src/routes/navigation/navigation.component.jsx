import { Outlet , Link} from "react-router-dom"
import { ReactComponent as LogoSvg } from "../../assets/images/LogoSvg.svg"
import { Fragment } from "react" 
import '../navigation/navigation.style.scss'

const Navigation = ()=>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <LogoSvg/>
            </Link> 
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            <Link className="nav-link" to='/auth'>
                SING-IN
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation

