import './styles/library.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Table() {

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
  );
}

export default Table;
