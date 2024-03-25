import './styles/results.css';
import React, { useState, useEffect, forceUpdate } from 'react';
import { Link } from 'react-router-dom';

function Results() {

    const [selected, setSelected] = useState(0);

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [data, setData] = useState({
            "Create Vendor": {selected: false, type: 0, count: 1, passed: 1, failed: 0, status: "Pass", owner: "Michael Catterall", duration: "1m 38s", executed: "5 min ago", report: "https://pre-prod-new.thetestmart.com/log-page?timestamp=1709713814&typeReport=1&orderNumber=0&sessionId=chrome-90-0-9bbac129-1b22-47bf-86f2-4705b639c869&sessionIdNumber=0&testReport=customLog-0-Create%20Vendor&numberRun=2&variableSet=Default&developerReport=End%20To%20End-1709713814-0-Create%20Vendor.html"},
            "Create Vendor 2": {selected: false, type: 0, count: 1, passed: 1, failed: 0, status: "Pass", owner: "Michael Catterall", duration: "1m 38s", executed: "5 min ago", report: "https://pre-prod-new.thetestmart.com/log-page?timestamp=1709713814&typeReport=1&orderNumber=0&sessionId=chrome-90-0-9bbac129-1b22-47bf-86f2-4705b639c869&sessionIdNumber=0&testReport=customLog-0-Create%20Vendor&numberRun=2&variableSet=Default&developerReport=End%20To%20End-1709713814-0-Create%20Vendor.html"}
    });

  return (
    <div id="results">
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
                        <tr className="row-head">
                            <th className="circle">

                            </th>
                            <th className="td__test-name">Today</th>
                            <th className="status">Status</th>
                            <th className="passed_count">Passed</th>
                            <th className="failed_count">Failed</th>
                            <th className="run_status">Executed</th>
                            <th className="run_status">Duration</th>
                            <th className="run_status">Report</th>
                            
                            <th className="download"></th>
                        </tr>
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
                                            <td><span className="pass">{data[d]['status']}</span></td>
                                            <td><span className="pass">{data[d]['passed']}</span></td>
                                            <td><span className="fail">{data[d]['failed']}</span></td>
                                            <td>{data[d]['executed']}</td>
                                            <td>{data[d]['duration']}</td>
                                            <td><a href={data[d]['report']} target="_blank">Open</a></td>

                                            <td className="option"><span class="material-symbols-outlined">download</span></td>
                                        </tr>
                                    })
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Results;
