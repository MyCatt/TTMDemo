import './styles/library.css';
import React, { useState, useEffect, forceUpdate } from 'react';
import { Link } from 'react-router-dom';

function Results() {

    const [expanded, setExpanded] = useState(true);
    const [selected, setSelected] = useState(0);

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [data, setData] = useState({
            "Create Vendor": {selected: false, status: "Active", owner: "Michael Catterall", lastrun: "Yesterday", runstatus: "Pass"},
            "Create Vendor Template": {selected: false, status: "Active", owner: "Michael Catterall", lastrun: "Yesterday", runstatus: "Pass"}
    });

    function toggleExpand()
    {
        setExpanded(!expanded);
    }

  return (
    <div id="library">
        <div className="header">
            <div className="header__inner header__library redesign">
                <div className="header__library--title">
                    <span className="sub-name">TheTestMartConfig</span>
                    <span className="name">RESULTS</span>
                </div>
                <div className="header__library--icons">
                </div>
            </div>
        </div>
        <div className="library">
            <div className="library-header">
                <div className="library-header__left">
                    <div className="tabs">
                        <div className="tab-wrapper  active">
                            <div className="tab finops-tab">All</div>
                            <span className="total-variable badge badge-secondary">5</span>
                        </div>
                        <div className="tab-wrapper">
                            <div className="tab finops-tab">Pending</div>
                            <span className="total-variable badge badge-secondary">5</span>
                        </div>
                        <div className="tab-wrapper">
                            <div className="tab finops-tab">Saved</div>
                            <span className="total-variable badge badge-secondary">5</span>
                        </div>
                    </div>
                </div>
                <div className="library-header__right"></div>
            </div>
            <div className="library-body">
                <div className="list-action">
                    <div className="list-action__left"></div>
                    

                    <div className="list-action__right">

                            <button>
                                <span class="material-symbols-outlined">post_add</span>
                                Create Report
                            </button>
                            <button className="delete">
                                <span class="material-symbols-outlined">delete</span>
                                Delete
                            </button>
                    </div>
        
                </div>

                <div className="list-test-suite">
                    <table className="table-suite">
                        <tr className="row-head" onClick={() => toggleExpand()}>
                            <th className="circle">
                                <div className="circle-group">
                                    { 1==2 && <span class="material-symbols-outlined">
                                        check
                                    </span>}
                                </div>
                            </th>
                            <th className="td__test-name">Accounts Payable</th>
                            <th className="status">Status</th>
                            <th className="owner">Owner</th>
                            <th className="last_run">Last Run</th>
                            <th className="run_status">Run Status</th>

                            <th className="more">
                                <div>
                                    <span class="material-symbols-outlined">more_horiz</span>
                                    <span class="material-symbols-outlined">expand_more</span>
                                </div>
                            </th>
                        </tr>
                        {expanded ?
                            <tbody>
                                {
                                    selected > -1 && Object.keys(data).map((d, i) => {
                                        return <tr key={i}>
                                            <td className="circle" onClick={() => { 
                                                data[d]['selected'] = !data[d]['selected'];
                                                setData(data)
                                                forceUpdate()
                                            }}>
                                                <div className="circle-group">
                                                    {data[d]['selected'] && <span class="material-symbols-outlined">check</span>}
                                                </div>
                                            </td>
                                            <td>{d}</td>
                                            <td>{data[d]['status']}</td>
                                            <td>{data[d]['owner']}</td>
                                            <td>{data[d]['lastrun']}</td>
                                            <td><span className="pass">{data[d]['runstatus']}</span></td>
            
                                            <td className="options">
                                                <Link className="run-button" to={"/run/" + d.replaceAll(" ", "-").toLowerCase()}>
                                                    <span class="material-symbols-outlined">play_circle</span>
                                                </Link>
                                                <span class="material-symbols-outlined">edit</span>
                                            </td>
                                        </tr>
                                    })
                                }
                        </tbody> : <div></div>}
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Results;
