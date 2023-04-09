import React,{Component} from 'react';
// import { Carousel } from '../../components/Carousel';
import HomeCarousel from '../../components/HomeCarousel';
import food1 from '../../static/img/food1.jpg'
import food2 from '../../static/img/food2.jpg'
import food3 from '../../static/img/food3.jpg'
import vibe1 from '../../static/img/vibe1.jpg'
import vibe2 from '../../static/img/vibe2.jpg'
import vibe3 from '../../static/img/vibe3.jpg'

class Home extends Component {
  constructor(props) {
		super(props)
	}
  render() {
    return (
      <div>
        {/* <Carousel/> */}
        <HomeCarousel />
        <div className="container marketing mt-5 text-center ">
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src={vibe1} style={{width: '160px', height: '160px', objectFit: 'cover'}}/>
              <h2 className="mt-2">Euismod</h2>
              <p>Vix ei dico tritani, eam alia iusto disputando ad. Possim mentitum ut pri, eum ad tation vidisse veritus, nisl erroribus at mei. Quo id altera mucius timeam. Pri ad vocent mandamus adversarium, his ex solet utroque.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={food1} style={{width: '160px', height: '160px', objectFit: 'cover'}}/>
              <h2 className="mt-2">Reprimique</h2>
              <p>Vero expetendis reprimique an mel, ad alienum forensibus vis. Veritus noluisse quaestio mei cu, vim te ceteros eloquentiam. Sea ex principes urbanitas. Placerat apeirian ad pro. Graecis scribentur his id, impedit constituto est ad, iusto expetenda vim ut.</p>
            </div>
            <div className="col-lg-4">
              <img className="rounded-circle" src={vibe3} style={{width: '160px', height: '160px', objectFit: 'cover'}}/>
              <h2 className="mt-2">Alienum</h2>
              <p>Ei latine scriptorem sed. In aliquip signiferumque sed, vel in mnesarchum incorrupte, vel ex noster impetus detraxit. Eos sale probo ut, ea nam nostrud feugiat. Natum alienum honestatis pri at, probatus scribentur at sit. </p>
            </div>
          </div>

          <hr className="my-5" />

          <div className="row ">
            <div className="col-md-7" style={{marginTop: '12rem'}}>
              <h2>Copiosae Prodesset</h2>
              <p className="lead">Ne eam viderer ceteros necessitatibus. Audire aliquip ex est, no est mucius sensibus. Eos te fastidii reformidans philosophia, primis interesset et vix, errem tollit delenit cu eam.</p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid mx-auto" src={vibe2} data-holder-rendered="true" style={{width: '500px', height: '500px', objectFit: 'cover'}} />
            </div>
          </div>

          <hr className="my-5" />

          <div className="row">
            <div className="col-md-7 order-md-2" style={{marginTop: '12rem'}}>
              <h2 >Nam Nullam Dolores</h2>
              <p className="lead">Nam no quis nonumy ancillae, vim te dico torquatos. Pri in labore perfecto lobortis, mel ut invidunt vituperata. Id vocent oblique est, assum constituto per ad.Te nec labore tamquam eligendi.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="img-fluid mx-auto" src={food2} data-holder-rendered="true" style={{width: '500px', height: '500px', objectFit: 'cover'}}/>
            </div>
          </div>

          <hr className="my-5" />

          <div className="row">
            <div className="col-md-7" style={{marginTop: '12rem'}}>
              <h2 >Cum Neliore Accommodare</h2>
              <p className="lead"> Rebum torquatos ea his, his dicunt vivendo te. Id duo convenire forensibus, pro at tation appetere posidonium. Qui ut molestiae quaerendum scribentur, cum purto scripta persius id. Eum unum theophrastus ea, ei eum percipitur intellegam.</p>
            </div>
            <div className="col-md-5">
              <img className="img-fluid mx-auto" src={food3} data-holder-rendered="true" style={{width: '500px', height: '500px', objectFit: 'cover'}}/>
            </div>
          </div>
          <hr className="my-5" />
        </div>
      </div>
    )
  }
}

export default Home;