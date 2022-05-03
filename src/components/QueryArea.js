import React from 'react'
import Home from './Home';

const CodeMirror = React.lazy(() => import("@uiw/react-codemirror"));
const Table = React.lazy(() => import("./Table"));
const {oneDark}=React.lazy(()=>import("@codemirror/theme-one-dark"));

function QueryArea(props) {
    const { openTabs } = props;
    const tables = openTabs;

    return (
        <div>
            <div>

            </div>
            <div class="tab-content" id="nav-tabContent">
                <div class={"tab-pane fade show tabContent active show"} id={`list-home`} role="tabpanel" aria-labelledby={`list-home-list`}>
                    <Home />
                </div>

                {tables.map(tab => {
                    return <div class={"tab-pane fade show tabContent"} id={`list-${tab}`} role="tabpanel" aria-labelledby={`list-${tab}-list`}>

                        <div className="mb-3 mt-3">
                            <button type="button" class="btn btn-success mr-2">Run</button>
                            <button type="button" class="btn btn-primary mr-2">Save</button>
                            <button type="button" class="btn btn-secondary mr-2">Export</button>
                        </div>
                        <CodeMirror
                            value={`SELECT * FROM ${tab}`}
                            height="200px"
                            theme={oneDark}
                        />

                        <Table className="mt-3" tableName={tab} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default QueryArea