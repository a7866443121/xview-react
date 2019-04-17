import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import navConf from '../nav.config.json';

export default class SideNav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: navConf
    };
  }
  render () {
    const vm = this;
    const data = vm.state.data;
    var menu =  Object.keys(data);
    var pageName = location.hash;
    
    return ( 
      <div className="side-nav nav">{ 
        menu.map(title => <div className="group-container" key={title}> 
            <p className="side-nav-title">{title}</p>
            {data[title].map(nav => nav.desc ? <div className="side-nav-items" key={nav.desc}> 
                {
                  nav.name ? <Link className={ 
                    pageName === nav.name ? 'active' : ''
                  } to={'./' + nav.name}>{nav.desc}</Link> : <p className="side-nav-group">{nav.desc}</p>
                }
                {
                  nav.items ? nav.items.map(item => <div key={item.name}>
                      <Link to={'./' + item.name} className={ 
                        "slid-nav-component" + ' ' +
                        pageName === nav.name ? 'active' : ''
                      } >{item.desc}</Link>
                    </div>
                  ): null
                }
            </div> : null
            )}
          </div>)
        }
      </div>
    );
  }
}
